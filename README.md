# Finzee AI Web

Minimal Next.js 15 app wired to Supabase for email/password sign-in and password recovery.

## Setup

1. Install dependencies:

```bash
npm install
```

2. Copy `.env.example` to `.env.local` and set:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY=your_supabase_anon_key
```

3. In Supabase Auth URL configuration, add this redirect URL:

```text
http://localhost:3000/auth/callback?next=/reset-password
```

If you deploy the app, add the production domain version of that same callback URL too.

## Run

```bash
npm run dev
```

## Flow

- `/login` signs in with email and password.
- `/forgot-password` sends the reset email with a redirect to the app callback.
- `/auth/callback` exchanges the Supabase auth code for a session cookie.
- `/reset-password` lets the user set a new password with `supabase.auth.updateUser`.
