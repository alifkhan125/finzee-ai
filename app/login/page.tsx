import { AuthCard } from "@/components/auth-card";
import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <AuthCard
      eyebrow="Account access"
      title="Welcome back."
      copy="Sign in with your Supabase email and password. If you forgot your password, request a secure recovery link."
      footerLinks={[
        { href: "/", label: "Home" },
        { href: "/forgot-password", label: "Forgot password?" },
      ]}
    >
      <LoginForm />
    </AuthCard>
  );
}
