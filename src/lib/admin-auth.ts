export const ADMIN_SESSION_COOKIE = "giveon_admin_session";

function getAdminPassword() {
  return process.env.ADMIN_PASSWORD ?? "";
}

export function isAdminConfigured() {
  return getAdminPassword().length > 0;
}

function toHex(buffer: ArrayBuffer) {
  return Array.from(new Uint8Array(buffer))
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join("");
}

function timingSafeEqualString(a: string, b: string) {
  if (a.length !== b.length) return false;

  let mismatch = 0;
  for (let i = 0; i < a.length; i += 1) {
    mismatch |= a.charCodeAt(i) ^ b.charCodeAt(i);
  }
  return mismatch === 0;
}

async function hmacSha256Hex(secret: string, value: string) {
  const key = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(secret),
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"],
  );

  const signature = await crypto.subtle.sign(
    "HMAC",
    key,
    new TextEncoder().encode(value),
  );

  return toHex(signature);
}

export async function createAdminSessionToken() {
  const password = getAdminPassword();
  if (!password) return null;
  return hmacSha256Hex(password, "giveon-apex-admin");
}

export async function verifyAdminSessionToken(
  token: string | undefined | null,
) {
  const expected = await createAdminSessionToken();
  if (!expected || !token) return false;
  return timingSafeEqualString(expected, token);
}

export function verifyAdminPassword(password: string) {
  const expected = getAdminPassword();
  if (!expected) return false;
  return timingSafeEqualString(expected, password);
}
