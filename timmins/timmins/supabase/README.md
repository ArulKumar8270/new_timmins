# Supabase Setup for Public Classes

## 1. Create tables

1. Go to [Supabase Dashboard](https://supabase.com/dashboard) → your project
2. Open **SQL Editor**
3. Run the contents of `schema.sql` (creates `domains` and `public_class_sessions` tables)

## 2. Environment variables

Add to `.env.local` (copy from `.env.local.example`):

```
NEXT_PUBLIC_SUPABASE_URL=https://ojjgxebpeelbnfbuzggs.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=<your anon key from Project Settings > API>
```

Get the anon key from: **Project Settings** → **API** → `anon` (public) or `publishable` key.
If you see "supabaseKey is required", restart the dev server (`npm run dev`) after adding env vars.

## 3. Admin

- **URL:** `/admin/classes`
- Add sessions with: Domain, Course Code, Course Name, Slug, Location, Duration, Date
- Slug is used in URL: `/training-calendar/public-classes/[slug]`
- **Security:** Protect `/admin/classes` in production (e.g. add auth). RLS currently allows insert/delete for anon.

## 4. Dynamic class pages

- `/training-calendar/public-classes/embedded-linux-system-internals` – fetches from Supabase
- Add sessions via admin; the page shows all sessions for that slug
- **Build:** Run `npm run build` after adding new classes so they are included in the static export
