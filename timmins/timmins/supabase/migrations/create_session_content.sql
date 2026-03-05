-- Session-specific course content (each session can have its own content)
-- Run this in Supabase SQL Editor

CREATE TABLE IF NOT EXISTS session_content (
  session_id UUID PRIMARY KEY REFERENCES public_class_sessions(id) ON DELETE CASCADE,
  content JSONB NOT NULL DEFAULT '{}',
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE session_content ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Session content public read" ON session_content FOR SELECT USING (true);
CREATE POLICY "Session content allow insert" ON session_content FOR INSERT WITH CHECK (true);
CREATE POLICY "Session content allow update" ON session_content FOR UPDATE USING (true);
CREATE POLICY "Session content allow delete" ON session_content FOR DELETE USING (true);

CREATE INDEX IF NOT EXISTS idx_session_content_session_id ON session_content(session_id);
