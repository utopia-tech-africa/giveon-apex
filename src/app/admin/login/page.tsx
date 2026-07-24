import { Suspense } from "react";
import { AdminLoginForm } from "@/components/admin/admin-login-form";
import { isAdminConfigured } from "@/lib/admin-auth";

export default function AdminLoginPage() {
  return (
    <main className="flex flex-1 flex-col items-center justify-center px-4 py-16">
      {!isAdminConfigured() ? (
        <div className="max-w-md rounded-xl bg-[#013030] p-6 font-chillax text-sm text-white/80">
          Set <code className="text-[#f38213]">ADMIN_PASSWORD</code> in your
          environment to enable the admin waitlist view.
        </div>
      ) : (
        <Suspense
          fallback={
            <div className="font-chillax text-white/70">Loading...</div>
          }>
          <AdminLoginForm />
        </Suspense>
      )}
    </main>
  );
}
