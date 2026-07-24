"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export function AdminSignOutButton() {
  const router = useRouter();

  const onSignOut = async () => {
    await fetch("/api/admin/login", { method: "DELETE" });
    router.replace("/admin/login");
    router.refresh();
  };

  return (
    <Button type="button" variant="outline" size="sm" onClick={onSignOut}>
      Sign out
    </Button>
  );
}
