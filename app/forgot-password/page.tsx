import { AuthCard } from "@/components/auth-card";
import { ForgotPasswordForm } from "@/components/forgot-password-form";

export default function ForgotPasswordPage() {
  return (
    <AuthCard
      eyebrow="Password reset"
      title="Recover your account."
      copy="Enter the email linked to your account and Supabase will send a secure password reset email."
      footerLinks={[
        { href: "/", label: "Home" },
        { href: "/login", label: "Back to login" },
      ]}
    >
      <ForgotPasswordForm />
    </AuthCard>
  );
}
