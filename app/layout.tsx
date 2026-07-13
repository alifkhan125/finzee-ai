import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Finzee Auth",
  description: "Supabase password reset flow for Finzee AI Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
