-- Run this in Supabase SQL Editor to create tables

-- Domains (used in class sessions dropdown)
CREATE TABLE IF NOT EXISTS domains (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL UNIQUE,
  sort_order INT DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE domains ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Domains public read" ON domains FOR SELECT USING (true);
CREATE POLICY "Domains allow insert" ON domains FOR INSERT WITH CHECK (true);
CREATE POLICY "Domains allow update" ON domains FOR UPDATE USING (true);
CREATE POLICY "Domains allow delete" ON domains FOR DELETE USING (true);

-- Seed domains
INSERT INTO domains (name, sort_order) VALUES
  ('Embedded Linux Development', 1),
  ('AI, Machine Learning, Deep Learning', 2),
  ('DevOps', 3),
  ('Android Mobile App Development', 4),
  ('Business Intelligence', 5),
  ('5G, SDN, NFV & IoT', 6),
  ('Cloud Computing', 7),
  ('Embedded Android Development', 8),
  ('Fullstack', 9),
  ('Programming Languages', 10),
  ('SAFe Courses and Certifications', 11),
  ('Other', 99)
ON CONFLICT (name) DO NOTHING;

-- Public class sessions (each row = one session with date/location)
CREATE TABLE IF NOT EXISTS public_class_sessions (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  domain TEXT NOT NULL,
  course_code TEXT NOT NULL,
  course_name TEXT NOT NULL,
  slug TEXT NOT NULL,
  location TEXT NOT NULL,
  duration TEXT NOT NULL,
  date TEXT NOT NULL,
  hrdc_number TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable RLS
ALTER TABLE public_class_sessions ENABLE ROW LEVEL SECURITY;

-- Public read for anon (anyone can read)
CREATE POLICY "Public read" ON public_class_sessions
  FOR SELECT USING (true);

-- Allow insert/update/delete for anon (admin uses client; restrict via auth in production)
CREATE POLICY "Allow insert" ON public_class_sessions
  FOR INSERT WITH CHECK (true);
CREATE POLICY "Allow update" ON public_class_sessions
  FOR UPDATE USING (true);
CREATE POLICY "Allow delete" ON public_class_sessions
  FOR DELETE USING (true);

-- Index for slug lookups
CREATE INDEX IF NOT EXISTS idx_public_class_sessions_slug ON public_class_sessions(slug);

-- Seed data (optional - run after table creation)
INSERT INTO public_class_sessions (domain, course_code, course_name, slug, location, duration, date, hrdc_number) VALUES
  ('Embedded Linux Development', 'ELD 001', 'Embedded Linux System Internals', 'embedded-linux-system-internals', 'Timmins Training Center, Penang', '5 days', '4-8 May 2026', '10001240991'),
  ('Embedded Linux Development', 'ELD 001', 'Embedded Linux System Internals', 'embedded-linux-system-internals', 'Dash Box Hotel Cyberjaya', '5 days', '11-15 May 2026', '10001240991');

-- Course content (admin-editable sections per slug)
CREATE TABLE IF NOT EXISTS course_content (
  slug TEXT PRIMARY KEY,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE course_content ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Course content public read" ON course_content FOR SELECT USING (true);
CREATE POLICY "Course content allow insert" ON course_content FOR INSERT WITH CHECK (true);
CREATE POLICY "Course content allow update" ON course_content FOR UPDATE USING (true);
CREATE POLICY "Course content allow delete" ON course_content FOR DELETE USING (true);

-- Case study enquiries (from download form)
CREATE TABLE IF NOT EXISTS case_study_enquiries (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  case_study_name TEXT NOT NULL,
  full_name TEXT NOT NULL,
  organization TEXT NOT NULL,
  email TEXT NOT NULL,
  contact_number TEXT NOT NULL,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE case_study_enquiries ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Case study enquiries allow insert" ON case_study_enquiries FOR INSERT WITH CHECK (true);
CREATE POLICY "Case study enquiries allow select" ON case_study_enquiries FOR SELECT USING (true);
CREATE POLICY "Case study enquiries allow delete" ON case_study_enquiries FOR DELETE USING (true);

-- Class registrations (from public class registration form)
CREATE TABLE IF NOT EXISTS class_registrations (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  course_name TEXT NOT NULL,
  session_id UUID REFERENCES public_class_sessions(id) ON DELETE SET NULL,
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

ALTER TABLE class_registrations ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Class registrations allow insert" ON class_registrations FOR INSERT WITH CHECK (true);
CREATE POLICY "Class registrations allow select" ON class_registrations FOR SELECT USING (true);
CREATE POLICY "Class registrations allow delete" ON class_registrations FOR DELETE USING (true);
