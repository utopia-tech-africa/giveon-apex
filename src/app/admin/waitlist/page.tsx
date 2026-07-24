import type { Metadata } from "next";
import Link from "next/link";
import { AdminSignOutButton } from "@/components/admin/admin-sign-out-button";
import ComponentLayout from "@/components/component-layout";
import { listWaitlistContacts } from "@/lib/waitlist-contacts";

export const metadata: Metadata = {
  title: "Waitlist Admin",
  robots: {
    index: false,
    follow: false,
  },
};

function formatDate(value: string) {
  const date = new Date(value);
  if (Number.isNaN(date.getTime())) return value;

  return new Intl.DateTimeFormat("en-GB", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(date);
}

export default async function AdminWaitlistPage() {
  let contacts: Awaited<ReturnType<typeof listWaitlistContacts>> = [];
  let errorMessage: string | null = null;

  try {
    contacts = await listWaitlistContacts();
  } catch (error) {
    errorMessage =
      error instanceof Error
        ? error.message
        : "Unable to load waitlist contacts.";
  }

  return (
    <main className="flex flex-1 flex-col">
      <ComponentLayout className="flex flex-col gap-8 py-10 lg:py-14">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-col gap-2">
            <p className="font-chillax text-sm tracking-wide text-[#f38213] uppercase">
              Admin
            </p>
            <h1 className="font-zodiak text-3xl italic text-white md:text-4xl">
              Waitlist signups
            </h1>
            <p className="font-chillax text-sm text-white/70">
              {contacts.length}{" "}
              {contacts.length === 1 ? "person" : "people"} on the list
            </p>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/waitlist"
              className="font-chillax text-sm text-white/70 transition-colors hover:text-[#f38213]">
              View public form
            </Link>
            <AdminSignOutButton />
          </div>
        </header>

        {errorMessage ? (
          <div className="rounded-xl border border-red-400/40 bg-red-950/30 px-4 py-3 font-chillax text-sm text-red-200">
            {errorMessage}
          </div>
        ) : contacts.length === 0 ? (
          <div className="rounded-xl bg-[#013030] px-6 py-10 text-center font-chillax text-white/70">
            No waitlist signups yet. New submissions will appear here.
          </div>
        ) : (
          <div className="overflow-x-auto rounded-xl border border-white/10 bg-[#013030]">
            <table className="min-w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 font-chillax text-xs tracking-wide text-[#f38213] uppercase">
                  <th className="px-4 py-3 font-medium">Name</th>
                  <th className="px-4 py-3 font-medium">Email</th>
                  <th className="px-4 py-3 font-medium">Country</th>
                  <th className="px-4 py-3 font-medium">Budget</th>
                  <th className="px-4 py-3 font-medium">Joined</th>
                </tr>
              </thead>
              <tbody>
                {contacts.map((contact) => (
                  <tr
                    key={contact.id}
                    className="border-b border-white/5 font-chillax text-sm text-white last:border-b-0">
                    <td className="px-4 py-3 whitespace-nowrap">
                      {contact.fullName}
                    </td>
                    <td className="px-4 py-3">
                      <a
                        href={`mailto:${contact.email}`}
                        className="text-white/80 transition-colors hover:text-[#f38213]">
                        {contact.email}
                      </a>
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {contact.country || "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap">
                      {contact.priceRange || "—"}
                    </td>
                    <td className="px-4 py-3 whitespace-nowrap text-white/70">
                      {formatDate(contact.createdAt)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </ComponentLayout>
    </main>
  );
}
