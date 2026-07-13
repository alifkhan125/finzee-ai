import { redirect } from "next/navigation";
import { AuthCard } from "@/components/auth-card";
import { ResetPasswordForm } from "@/components/reset-password-form";
import { createClient } from "@/lib/supabase/server";

export default async function ResetPasswordPage() {
  const supabase = await createClient();
  const {
    data: { session },
  } = await supabase.auth.getSession();

  if (!session) {
    redirect("/forgot-password");
  }

  return (
    <AuthCard
      eyebrow="Set a new password"
      title="Choose something fresh."
      copy="You are signed in through the recovery link. Set a new password below to finish the reset flow."
      footerLinks={[
        { href: "/", label: "Home" },
        { href: "/login", label: "Back to login" },
      ]}
    >
      <ResetPasswordForm />
    </AuthCard>
  );
}
