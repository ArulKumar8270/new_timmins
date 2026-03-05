import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL ?? "";
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ?? "";
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? "";

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing Supabase env: Add NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY to .env or .env.local. " +
    "Get keys from Supabase Dashboard > Project Settings > API."
  );
}

/** Client for public/browser - use anon key */
export const supabase = createClient(supabaseUrl, supabaseAnonKey);

/** Server-only client with full access - use service role key */
export const supabaseAdmin = supabaseServiceKey
  ? createClient(supabaseUrl, supabaseServiceKey)
  : supabase;

export type PublicClassSession = {
  id: string;
  domain: string;
  course_code: string;
  course_name: string;
  slug: string;
  location: string;
  duration: string;
  date: string;
  hrdc_number?: string;
  created_at: string;
};
