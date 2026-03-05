-- Run this in Supabase Dashboard → SQL Editor to create the class_registrations table

CREATE TABLE IF NOT EXISTS public.class_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  session_date TEXT,
  session_location TEXT,
  full_name TEXT NOT NULL,
  email TEXT NOT NULL,
  mobile_number TEXT NOT NULL,
  organization_name TEXT NOT NULL,
  job_role TEXT NOT NULL,
  job_role_other TEXT,
  hear_about TEXT[] DEFAULT '{}',
  hear_about_other TEXT,
  experience_level TEXT NOT NULL,
  learning_expectations TEXT,
  who_pays TEXT NOT NULL,
  require_invoice TEXT NOT NULL,
  dietary TEXT NOT NULL,
  dietary_special_note TEXT,
  additional_comments TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE public.class_registrations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Class registrations allow insert" ON public.class_registrations
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Class registrations allow select" ON public.class_registrations
  FOR SELECT USING (true);

CREATE POLICY "Class registrations allow delete" ON public.class_registrations
  FOR DELETE USING (true);
