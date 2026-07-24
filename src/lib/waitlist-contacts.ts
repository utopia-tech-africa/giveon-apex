import { Resend } from "resend";

export const WAITLIST_SOURCE = "waitlist";

export const WAITLIST_PROPERTY_KEYS = {
  country: "country",
  priceRange: "price_range",
  source: "source",
} as const;

const PROPERTY_DEFINITIONS = [
  {
    key: WAITLIST_PROPERTY_KEYS.country,
    type: "string" as const,
    fallbackValue: "",
  },
  {
    key: WAITLIST_PROPERTY_KEYS.priceRange,
    type: "string" as const,
    fallbackValue: "",
  },
  {
    key: WAITLIST_PROPERTY_KEYS.source,
    type: "string" as const,
    fallbackValue: "",
  },
];

export function getResendClient() {
  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    throw new Error("RESEND_API_KEY is not configured.");
  }
  return new Resend(apiKey);
}

export async function ensureWaitlistContactProperties(resend: Resend) {
  const listed = await resend.contactProperties.list({ limit: 100 });
  if (listed.error) {
    throw new Error(listed.error.message);
  }

  const existing = new Set(
    (listed.data?.data ?? []).map((property) => property.key),
  );

  for (const definition of PROPERTY_DEFINITIONS) {
    if (existing.has(definition.key)) continue;

    const created = await resend.contactProperties.create(definition);
    if (created.error) {
      // Another request may have created it concurrently.
      if (!created.error.message.toLowerCase().includes("already")) {
        throw new Error(created.error.message);
      }
    }
  }
}

export function splitFullName(fullName: string) {
  const parts = fullName.trim().split(/\s+/);
  const firstName = parts[0] ?? fullName;
  const lastName = parts.length > 1 ? parts.slice(1).join(" ") : undefined;
  return { firstName, lastName };
}

export type WaitlistContact = {
  id: string;
  email: string;
  fullName: string;
  country: string;
  priceRange: string;
  createdAt: string;
};

function readProperty(
  properties: Record<string, { type: string; value: string | number }> | undefined,
  key: string,
) {
  const property = properties?.[key];
  if (!property) return "";
  return String(property.value ?? "");
}

export async function saveWaitlistContact(input: {
  fullName: string;
  email: string;
  country: string;
  priceRangeLabel: string;
}) {
  const resend = getResendClient();
  await ensureWaitlistContactProperties(resend);

  const { firstName, lastName } = splitFullName(input.fullName);
  const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;
  const properties = {
    [WAITLIST_PROPERTY_KEYS.country]: input.country,
    [WAITLIST_PROPERTY_KEYS.priceRange]: input.priceRangeLabel,
    [WAITLIST_PROPERTY_KEYS.source]: WAITLIST_SOURCE,
  };

  const created = await resend.contacts.create({
    email: input.email,
    firstName,
    lastName,
    unsubscribed: false,
    properties,
    ...(segmentId ? { segments: [{ id: segmentId }] } : {}),
  });

  if (!created.error) {
    return created.data;
  }

  // Contact may already exist — update instead.
  const updated = await resend.contacts.update({
    email: input.email,
    firstName,
    lastName,
    properties,
  });

  if (updated.error) {
    throw new Error(updated.error.message || created.error.message);
  }

  if (segmentId) {
    await resend.contacts.segments.add({
      email: input.email,
      segmentId,
    });
  }

  return updated.data;
}

export async function listWaitlistContacts(): Promise<WaitlistContact[]> {
  const resend = getResendClient();
  const segmentId = process.env.RESEND_WAITLIST_SEGMENT_ID;

  const listed = await resend.contacts.list({
    limit: 100,
    ...(segmentId ? { segmentId } : {}),
  });

  if (listed.error) {
    throw new Error(listed.error.message);
  }

  const contacts = listed.data?.data ?? [];
  const detailed = await Promise.all(
    contacts.map(async (contact) => {
      const result = await resend.contacts.get({ id: contact.id });
      if (result.error || !result.data) return null;

      const source = readProperty(
        result.data.properties,
        WAITLIST_PROPERTY_KEYS.source,
      );

      if (!segmentId && source !== WAITLIST_SOURCE) {
        return null;
      }

      const fullName = [result.data.first_name, result.data.last_name]
        .filter(Boolean)
        .join(" ")
        .trim();

      return {
        id: result.data.id,
        email: result.data.email,
        fullName: fullName || "—",
        country: readProperty(
          result.data.properties,
          WAITLIST_PROPERTY_KEYS.country,
        ),
        priceRange: readProperty(
          result.data.properties,
          WAITLIST_PROPERTY_KEYS.priceRange,
        ),
        createdAt: result.data.created_at,
      } satisfies WaitlistContact;
    }),
  );

  return detailed
    .filter((contact): contact is WaitlistContact => contact !== null)
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    );
}
