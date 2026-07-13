import Link from "next/link";
import type { ReactNode } from "react";

type AuthCardProps = {
  eyebrow: string;
  title: string;
  copy: string;
  children: ReactNode;
  footerLinks?: Array<{ href: string; label: string }>;
};

export function AuthCard({
  eyebrow,
  title,
  copy,
  children,
  footerLinks = [],
}: AuthCardProps) {
  return (
    <main className="shell">
      <section className="card">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="title">{title}</h1>
        <p className="copy">{copy}</p>
        {children}
        {footerLinks.length > 0 ? (
          <div className="actions">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        ) : null}
      </section>
    </main>
  );
}
