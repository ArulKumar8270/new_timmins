-- Add session_id to class_registrations to link each registration to a specific session
-- Run this in Supabase SQL Editor

ALTER TABLE class_registrations
  ADD COLUMN IF NOT EXISTS session_id UUID REFERENCES public_class_sessions(id) ON DELETE SET NULL;

CREATE INDEX IF NOT EXISTS idx_class_registrations_session_id ON class_registrations(session_id);
