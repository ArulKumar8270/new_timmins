"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { DEFAULT_COURSE_CONTENT, type CourseContent } from "@/lib/course-content";
import AdminEditor from "../AdminEditor";
import AdminRichEditor from "../AdminRichEditor";

function escapeHtml(s: string): string {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function htmlFromLines(lines: string[]): string {
  if (!lines?.length) return "";
  return lines.map((l) => `<p>${escapeHtml(l)}</p>`).join("");
}

function htmlToLines(html: string): string[] {
  if (!html?.trim()) return [];
  if (typeof document === "undefined") return [];
  const div = document.createElement("div");
  div.innerHTML = html;
  const items: string[] = [];
  div.querySelectorAll("p, li").forEach((el) => {
    const t = el.textContent?.trim();
    if (t) items.push(t);
  });
  if (items.length === 0) {
    const t = div.textContent?.trim();
    if (t) items.push(t);
  }
  return items;
}

function parseContent(json: string): CourseContent {
  try {
    const parsed = JSON.parse(json) as CourseContent;
    return { ...DEFAULT_COURSE_CONTENT, ...parsed };
  } catch {
    return { ...DEFAULT_COURSE_CONTENT };
  }
}

function FieldSection({ title, children }: { title: string; children: React.ReactNode }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="admin-card" style={{ marginBottom: "1rem" }}>
      <h3
        className="admin-card-title"
        style={{ cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "space-between" }}
        onClick={() => setOpen(!open)}
      >
        {title}
        <span style={{ fontSize: "0.9rem", fontWeight: 400 }}>{open ? "▼" : "▶"}</span>
      </h3>
      {open && <div style={{ marginTop: "1rem" }}>{children}</div>}
    </div>
  );
}

function StringListField({
  label,
  value,
  onChange,
  placeholder = "One item per line",
}: {
  label: string;
  value: string[];
  onChange: (v: string[]) => void;
  placeholder?: string;
}) {
  const html = htmlFromLines(value || []);
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label className="admin-label">{label}</label>
      <AdminRichEditor value={html} onChange={(v) => onChange(htmlToLines(v))} placeholder={placeholder} minHeight={100} />
    </div>
  );
}

function TextField({
  label,
  value,
  onChange,
  placeholder,
  rows = 1,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  rows?: number;
}) {
  return (
    <div style={{ marginBottom: "1rem" }}>
      <label className="admin-label">{label}</label>
      {rows > 1 ? (
        <AdminRichEditor value={value || ""} onChange={onChange} placeholder={placeholder} minHeight={rows * 28} />
      ) : (
        <input value={value || ""} onChange={(e) => onChange(e.target.value)} className="admin-input" placeholder={placeholder} />
      )}
    </div>
  );
}

type SessionItem = { id: string; slug: string; course_name: string; course_code: string; date: string; location: string };

export default function AdminCourseContentPage() {
  const [sessions, setSessions] = useState<SessionItem[]>([]);
  const [selectedSessionId, setSelectedSessionId] = useState("");
  const [content, setContent] = useState<CourseContent>({ ...DEFAULT_COURSE_CONTENT });
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [showJson, setShowJson] = useState(false);
  const [jsonText, setJsonText] = useState("");

  useEffect(() => {
    supabase
      .from("public_class_sessions")
      .select("id, slug, course_name, course_code, date, location")
      .order("date", { ascending: true })
      .then(({ data }) => {
        setSessions(data || []);
        if (data?.length && !selectedSessionId) setSelectedSessionId(data[0].id);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (!selectedSessionId) return;
    const session = sessions.find((s) => s.id === selectedSessionId);
    if (!session) return;
    void (async () => {
      try {
        const [sessionRes, courseRes] = await Promise.all([
          supabase.from("session_content").select("content").eq("session_id", selectedSessionId).maybeSingle(),
          supabase.from("course_content").select("content").eq("slug", session.slug).maybeSingle(),
        ]);
        const sessionData = !sessionRes.error && sessionRes.data?.content ? sessionRes.data.content : null;
        const courseData = !courseRes.error && courseRes.data?.content ? courseRes.data.content : null;
        const merged = sessionData ? parseContent(JSON.stringify(sessionData)) : courseData ? parseContent(JSON.stringify(courseData)) : { ...DEFAULT_COURSE_CONTENT };
        setContent(merged);
      } catch {
        setContent({ ...DEFAULT_COURSE_CONTENT });
      }
    })();
  }, [selectedSessionId, sessions]);

  const update = <K extends keyof CourseContent>(key: K, value: CourseContent[K]) => {
    setContent((prev) => ({ ...prev, [key]: value }));
  };

  const handleLoadDefault = () => {
    setContent({ ...DEFAULT_COURSE_CONTENT });
  };

  const sanitizeForSave = (data: CourseContent): CourseContent => {
    const out = { ...data };
    if (Array.isArray(out.capability_outcomes)) out.capability_outcomes = out.capability_outcomes.filter((s) => String(s).trim());
    if (Array.isArray(out.benefits)) out.benefits = out.benefits.filter((s) => String(s).trim());
    if (Array.isArray(out.who_should_attend)) out.who_should_attend = out.who_should_attend.filter((s) => String(s).trim());
    if (Array.isArray(out.learning_objectives)) out.learning_objectives = out.learning_objectives.filter((s) => String(s).trim());
    if (Array.isArray(out.expert_bullets)) out.expert_bullets = out.expert_bullets.filter((s) => String(s).trim());
    if (Array.isArray(out.trusted_by_logos)) out.trusted_by_logos = out.trusted_by_logos.filter((l) => (l.url || "").trim());
    if (Array.isArray(out.why_matters)) out.why_matters = out.why_matters.filter((m) => (m.title || m.description || "").trim());
    if (Array.isArray(out.training_format_cards)) out.training_format_cards = out.training_format_cards.filter((c) => (c.title || c.description || "").trim());
    if (Array.isArray(out.prerequisites)) out.prerequisites = out.prerequisites.filter((p) => (p.title || p.description || "").trim());
    if (Array.isArray(out.course_outline)) out.course_outline = out.course_outline.filter((o) => (o.day || o.title || "").trim());
    if (Array.isArray(out.testimonials)) out.testimonials = out.testimonials.filter((t) => (t.name || t.quote || "").trim());
    if (Array.isArray(out.registration_job_roles)) out.registration_job_roles = out.registration_job_roles.filter((s) => String(s).trim());
    if (Array.isArray(out.registration_hear_about)) out.registration_hear_about = out.registration_hear_about.filter((s) => String(s).trim());
    if (Array.isArray(out.registration_experience_levels)) out.registration_experience_levels = out.registration_experience_levels.filter((s) => String(s).trim());
    if (Array.isArray(out.registration_who_pays)) out.registration_who_pays = out.registration_who_pays.filter((s) => String(s).trim());
    if (Array.isArray(out.registration_invoice_options)) out.registration_invoice_options = out.registration_invoice_options.filter((s) => String(s).trim());
    if (Array.isArray(out.registration_dietary)) out.registration_dietary = out.registration_dietary.filter((s) => String(s).trim());
    return out;
  };

  const handleSave = async () => {
    if (!selectedSessionId) return;
    setSaving(true);
    setMessage(null);
    try {
      const payload = showJson ? parseContent(jsonText) : sanitizeForSave(content);
      const { error } = await supabase.from("session_content").upsert(
        { session_id: selectedSessionId, content: payload, updated_at: new Date().toISOString() },
        { onConflict: "session_id" }
      );
      if (error) throw error;
      setMessage({ type: "success", text: "Session content saved!" });
      if (showJson) {
        setContent(parseContent(jsonText));
        setJsonText(JSON.stringify(payload, null, 2));
      }
    } catch (e) {
      setMessage({ type: "error", text: e instanceof Error ? e.message : "Save failed" });
    }
    setSaving(false);
  };

  if (loading) return <p>Loading…</p>;

  return (
    <div>
      <div className="admin-page-header" style={{ marginBottom: "1.5rem" }}>
        <h1>Course Content</h1>
        <p>Each session has its own content. Select a session below to edit its content.</p>
      </div>

      {message && (
        <div className={message.type === "success" ? "admin-alert admin-alert-success" : "admin-alert admin-alert-error"}>
          {message.text}
        </div>
      )}

      <div className="admin-card" style={{ marginBottom: "1.5rem" }}>
        <h2 className="admin-card-title">Select Session</h2>
        <select value={selectedSessionId} onChange={(e) => setSelectedSessionId(e.target.value)} className="admin-select" style={{ maxWidth: 500 }} disabled={sessions.length === 0}>
          {sessions.length === 0 ? (
            <option value="">No sessions — add in Classes</option>
          ) : (
          sessions.map((s) => (
            <option key={s.id} value={s.id}>
              {s.course_name} ({s.course_code}) — {s.date} | {s.location}
            </option>
          )))}
        </select>
        {selectedSessionId && (() => {
          const s = sessions.find((x) => x.id === selectedSessionId);
          return s ? (
            <p style={{ marginTop: "0.75rem", fontSize: "0.8rem", color: "var(--admin-muted)" }}>
              <a href={`/training-calendar/public-classes/${s.slug}`} target="_blank" rel="noopener noreferrer" style={{ color: "var(--admin-accent)" }}>
                View page →
              </a>
            </p>
          ) : null;
        })()}
        <p style={{ marginTop: "0.5rem", fontSize: "0.75rem", color: "var(--admin-muted)" }}>
          Add sessions in <a href="/admin/classes" style={{ color: "var(--admin-accent)" }}>Classes</a>.
        </p>
      </div>

      <div style={{ marginBottom: "1rem", display: "flex", gap: "0.5rem" }}>
        <button
          type="button"
          onClick={() => {
            if (!showJson) setJsonText(JSON.stringify(content, null, 2));
            setShowJson(!showJson);
          }}
          className="admin-btn admin-btn-ghost"
        >
          {showJson ? "Show form fields" : "Show JSON editor"}
        </button>
        <button type="button" onClick={handleLoadDefault} className="admin-btn admin-btn-ghost">
          Load default
        </button>
      </div>

      {showJson ? (
        <div className="admin-card">
          <h2 className="admin-card-title">Content (JSON)</h2>
          <AdminEditor value={jsonText} onChange={setJsonText} minHeight={400} rows={20} />
        </div>
      ) : (
        <>
          <FieldSection title="Hero & Overview">
            <StringListField label="Capability Outcomes" value={content.capability_outcomes || []} onChange={(v) => update("capability_outcomes", v)} />
            <TextField label="Course Description" value={content.course_description || ""} onChange={(v) => update("course_description", v)} rows={3} />
            <StringListField label="Benefits" value={content.benefits || []} onChange={(v) => update("benefits", v)} />
            <TextField label="Price" value={content.price || ""} onChange={(v) => update("price", v)} placeholder="Price: RM 7,500 (100% HRDC Claimable)" />
          </FieldSection>

          <FieldSection title="Trusted By">
            <TextField label="Section Title" value={content.trusted_by_title || ""} onChange={(v) => update("trusted_by_title", v)} placeholder="Trusted by Teams Across Industries & Regions" />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Logos: url|alt (one per line, e.g. /assets/New_images/clients/cisco.png|Cisco)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.trusted_by_logos || []).map((l) => `${l.url || ""}|${l.alt || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [url, alt] = line.split("|");
                  return { url: url?.trim() || "", alt: alt?.trim() || "" };
                });
                update("trusted_by_logos", items);
              }}
              placeholder="/assets/New_images/clients/cisco.png|Cisco"
              minHeight={100}
            />
          </FieldSection>

          <FieldSection title="Why Training Matters">
            <TextField label="Section Title (suffix)" value={content.why_matters_title || ""} onChange={(v) => update("why_matters_title", v)} placeholder="Training Matters" />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Format: Title|Description|Icon (one per line, use | to separate)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.why_matters || []).map((m) => `${m.title || ""}|${m.description || ""}|${m.icon || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [title, desc, icon] = line.split("|");
                  return { title: title?.trim() || "", description: desc?.trim() || "", icon: icon?.trim() || "" };
                });
                update("why_matters", items);
              }}
              placeholder="Build your career roadmap with solid foundation.| |☀️"
              minHeight={100}
            />
          </FieldSection>

          <FieldSection title="Who Should Attend">
            <TextField label="Section Title" value={content.who_should_attend_title || ""} onChange={(v) => update("who_should_attend_title", v)} />
            <StringListField label="Audience items" value={content.who_should_attend || []} onChange={(v) => update("who_should_attend", v)} />
          </FieldSection>

          <FieldSection title="Training Format">
            <TextField label="Title" value={content.training_format_title || ""} onChange={(v) => update("training_format_title", v)} placeholder="5-Day Intensive Training" />
            <TextField label="Subtitle" value={content.training_format_subtitle || ""} onChange={(v) => update("training_format_subtitle", v)} />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Cards: Title|Description|Icon (one per line)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.training_format_cards || []).map((c) => `${c.title || ""}|${c.description || ""}|${c.icon || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [title, desc, icon] = line.split("|");
                  return { title: title?.trim() || "", description: desc?.trim() || "", icon: icon?.trim() || "" };
                });
                update("training_format_cards", items);
              }}
              minHeight={120}
            />
          </FieldSection>

          <FieldSection title="Learning Objectives">
            <TextField label="Section Title" value={content.learning_objectives_title || ""} onChange={(v) => update("learning_objectives_title", v)} />
            <StringListField label="Objectives" value={content.learning_objectives || []} onChange={(v) => update("learning_objectives", v)} />
          </FieldSection>

          <FieldSection title="Prerequisites">
            <TextField label="Section Title" value={content.prerequisites_title || ""} onChange={(v) => update("prerequisites_title", v)} />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Format: Title|Description|Icon (one per line)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.prerequisites || []).map((p) => `${p.title || ""}|${p.description || ""}|${p.icon || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [title, desc, icon] = line.split("|");
                  return { title: title?.trim() || "", description: desc?.trim() || "", icon: icon?.trim() || "" };
                });
                update("prerequisites", items);
              }}
              minHeight={90}
            />
          </FieldSection>

          <FieldSection title="Course Outline">
            <TextField label="Section Title" value={content.course_outline_title || ""} onChange={(v) => update("course_outline_title", v)} />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Format: Day|Title|Topics (one per line)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.course_outline || []).map((o) => `${o.day || ""}|${o.title || ""}|${o.topics || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [day, title, topics] = line.split("|");
                  return { day: day?.trim() || "", title: title?.trim() || "", topics: topics?.trim() || "" };
                });
                update("course_outline", items);
              }}
              placeholder="Day 1|Introduction to Embedded Linux|"
              minHeight={140}
            />
          </FieldSection>

          <FieldSection title="Learn From The Expert">
            <TextField label="Title" value={content.expert_title || ""} onChange={(v) => update("expert_title", v)} />
            <TextField label="Description" value={content.expert_description || ""} onChange={(v) => update("expert_description", v)} rows={3} />
            <StringListField label="Bullet points" value={content.expert_bullets || []} onChange={(v) => update("expert_bullets", v)} />
          </FieldSection>

          <FieldSection title="Testimonials">
            <TextField label="Section Title" value={content.testimonials_title || ""} onChange={(v) => update("testimonials_title", v)} />
            <TextField label="Google Reviews URL" value={content.google_reviews_url || ""} onChange={(v) => update("google_reviews_url", v)} placeholder="https://g.page/r/..." />
            <p style={{ fontSize: "0.8rem", color: "var(--admin-muted)", marginBottom: "0.5rem" }}>Format: Name|Quote|Rating|Source (one per line)</p>
            <AdminRichEditor
              value={htmlFromLines(
                (content.testimonials || []).map((t) => `${t.name || ""}|${t.quote || ""}|${t.rating || ""}|${t.source || ""}`).filter((s) => s.replace(/\|/g, "").trim())
              )}
              onChange={(v) => {
                const items = htmlToLines(v).map((line) => {
                  const [name, quote, rating, source] = line.split("|");
                  return { name: name?.trim() || "", quote: quote?.trim() || "", rating: rating?.trim() || "", source: source?.trim() || "" };
                });
                update("testimonials", items);
              }}
              minHeight={120}
            />
          </FieldSection>

          <FieldSection title="Certificate">
            <TextField label="Title" value={content.certificate_title || ""} onChange={(v) => update("certificate_title", v)} />
            <TextField label="Description" value={content.certificate_description || ""} onChange={(v) => update("certificate_description", v)} rows={2} />
            <TextField label="Certificate Image URL" value={content.certificate_image || ""} onChange={(v) => update("certificate_image", v)} placeholder="/assets/New_images/badge.png" />
          </FieldSection>

          <FieldSection title="Final CTA">
            <TextField label="Title" value={content.cta_title || ""} onChange={(v) => update("cta_title", v)} placeholder="Let's Get Started Today!" />
            <TextField label="Subtitle" value={content.cta_subtitle || ""} onChange={(v) => update("cta_subtitle", v)} placeholder="Let's innovate your business!" />
            <TextField label="Limit Text (card)" value={content.cta_limit_text || ""} onChange={(v) => update("cta_limit_text", v)} placeholder="Limited to 15 participants!" />
          </FieldSection>

          <FieldSection title="Registration Form">
            <StringListField label="Job Roles" value={content.registration_job_roles || []} onChange={(v) => update("registration_job_roles", v)} placeholder="Engineer, Lead, Manager, ..." />
            <StringListField label="How did you hear about" value={content.registration_hear_about || []} onChange={(v) => update("registration_hear_about", v)} placeholder="Website, Social Media, ..." />
            <StringListField label="Experience Levels" value={content.registration_experience_levels || []} onChange={(v) => update("registration_experience_levels", v)} placeholder="Beginner, Intermediate, Advanced..." />
            <StringListField label="Who Pays" value={content.registration_who_pays || []} onChange={(v) => update("registration_who_pays", v)} placeholder="Myself, Company sponsored, HRDC Claim" />
            <StringListField label="Invoice Options" value={content.registration_invoice_options || []} onChange={(v) => update("registration_invoice_options", v)} placeholder="Yes, No" />
            <StringListField label="Dietary Options" value={content.registration_dietary || []} onChange={(v) => update("registration_dietary", v)} placeholder="Vegetarian, Halal, Not applicable" />
            <TextField label="Experience Level Question" value={content.registration_experience_label || ""} onChange={(v) => update("registration_experience_label", v)} rows={2} placeholder="Pre-requisites: ... What is your experience level?" />
            <TextField label="Success Message" value={content.registration_success_message || ""} onChange={(v) => update("registration_success_message", v)} rows={2} placeholder="Thank you! We will contact you shortly..." />
            <TextField label="Terms Confirmation Text" value={content.registration_terms_text || ""} onChange={(v) => update("registration_terms_text", v)} rows={2} placeholder="I confirm that the information provided is accurate..." />
          </FieldSection>
        </>
      )}

      <div style={{ marginTop: "1.5rem" }}>
        <button type="button" onClick={handleSave} disabled={saving} className="admin-btn admin-btn-primary">
          {saving ? "Saving…" : "Save"}
        </button>
      </div>
    </div>
  );
}
