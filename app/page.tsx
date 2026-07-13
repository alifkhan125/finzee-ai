import Link from "next/link";

export default function HomePage() {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">Finzee AI</p>
        <h1 className="title">Password recovery flow is ready.</h1>
        <p className="copy">
          Use the login screen to sign in, or request a reset email and come back
          through Supabase&apos;s recovery link.
        </p>
        <div className="actions">
          <Link href="/login">Open login</Link>
          <Link href="/forgot-password">Forgot password</Link>
        </div>
      </section>
    </main>
  );
}
