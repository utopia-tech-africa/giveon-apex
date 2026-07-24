"use client";

import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const inputClassName = cn(
  "w-full rounded-lg border border-[#d9dbdb] bg-transparent px-3 py-3",
  "font-chillax text-sm text-white placeholder:text-[#617677]",
  "outline-none transition-colors focus:border-[#e38837]",
);

export function AdminLoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setError(null);
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/admin/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      const data = (await response.json()) as { error?: string };

      if (!response.ok) {
        setError(data.error || "Unable to sign in.");
        return;
      }

      const nextPath = searchParams.get("next") || "/admin/waitlist";
      router.replace(nextPath);
      router.refresh();
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={onSubmit}
      className="flex w-full max-w-md flex-col gap-4 rounded-xl bg-[#013030] p-6"
      noValidate>
      <h1 className="font-zodiak text-3xl italic text-white">Admin login</h1>
      <p className="font-chillax text-sm text-white/70">
        Sign in to view Apex Cabins waitlist signups.
      </p>

      <label className="flex flex-col gap-2">
        <span className="font-chillax text-sm text-white">Password</span>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className={inputClassName}
          required
        />
      </label>

      {error && <p className="font-chillax text-sm text-red-300">{error}</p>}

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Signing in..." : "Sign in"}
      </Button>
    </form>
  );
}
