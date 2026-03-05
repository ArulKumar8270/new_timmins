"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import type { PublicClassSession } from "@/lib/supabase";

type Domain = { id: string; name: string };

export default function AdminClassesPage() {
  const [sessions, setSessions] = useState<PublicClassSession[]>([]);
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [editingSession, setEditingSession] = useState<PublicClassSession | null>(null);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadSessions = async () => {
    const { data, error } = await supabase
      .from("public_class_sessions")
      .select("*")
      .order("date", { ascending: true });
    if (!error) setSessions(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadSessions();
  }, []);

  useEffect(() => {
    supabase.from("domains").select("id, name").order("sort_order").order("name").then(({ data }) => {
      setDomains(data || []);
    });
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const form = e.currentTarget;
    const slug = ((form.elements.namedItem("slug") as HTMLInputElement)?.value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    const { error } = await supabase.from("public_class_sessions").insert({
      domain: (form.elements.namedItem("domain") as HTMLSelectElement)?.value,
      course_code: (form.elements.namedItem("course_code") as HTMLInputElement)?.value,
      course_name: (form.elements.namedItem("course_name") as HTMLInputElement)?.value,
      slug,
      location: (form.elements.namedItem("location") as HTMLInputElement)?.value,
      duration: (form.elements.namedItem("duration") as HTMLInputElement)?.value,
      date: (form.elements.namedItem("date") as HTMLInputElement)?.value,
      hrdc_number: (form.elements.namedItem("hrdc_number") as HTMLInputElement)?.value || null,
    });
    if (!error) {
      setMessage({ type: "success", text: "Class session added successfully!" });
      form.reset();
      loadSessions();
    } else {
      setMessage({ type: "error", text: error.message });
    }
    setSubmitting(false);
  };

  const handleSaveEdit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!editingSession) return;
    setSubmitting(true);
    setMessage(null);
    const form = e.currentTarget;
    const slug = ((form.elements.namedItem("slug") as HTMLInputElement)?.value || "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "-");
    const { error } = await supabase
      .from("public_class_sessions")
      .update({
        domain: (form.elements.namedItem("domain") as HTMLSelectElement)?.value,
        course_code: (form.elements.namedItem("course_code") as HTMLInputElement)?.value,
        course_name: (form.elements.namedItem("course_name") as HTMLInputElement)?.value,
        slug,
        location: (form.elements.namedItem("location") as HTMLInputElement)?.value,
        duration: (form.elements.namedItem("duration") as HTMLInputElement)?.value,
        date: (form.elements.namedItem("date") as HTMLInputElement)?.value,
        hrdc_number: (form.elements.namedItem("hrdc_number") as HTMLInputElement)?.value || null,
      })
      .eq("id", editingSession.id);
    if (!error) {
      setMessage({ type: "success", text: "Session updated!" });
      setEditingSession(null);
      loadSessions();
    } else {
      setMessage({ type: "error", text: error.message });
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this session?")) return;
    const { error } = await supabase.from("public_class_sessions").delete().eq("id", id);
    if (!error) {
      setMessage({ type: "success", text: "Deleted" });
      setEditingSession(null);
      loadSessions();
    } else {
      setMessage({ type: "error", text: error.message });
    }
  };

  return (
    <div>
      <div className="admin-page-header" style={{ marginBottom: "1.5rem" }}>
        <h1>Classes</h1>
        <p>Add and manage public class sessions</p>
      </div>

      {message && (
        <div className={message.type === "success" ? "admin-alert admin-alert-success" : "admin-alert admin-alert-error"}>
          {message.text}
        </div>
      )}

      <div className="admin-grid-2" style={{ display: "grid", gridTemplateColumns: "minmax(280px, 1fr) 1.5fr", gap: "2rem" }}>
        <div className="admin-card">
          <h2 className="admin-card-title">{editingSession ? "Edit Session" : "Add New Session"}</h2>
          <form key={editingSession?.id ?? "new"} onSubmit={editingSession ? handleSaveEdit : handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <div>
            <label className="admin-label">Domain</label>
            <select name="domain" required className="admin-select" defaultValue={editingSession?.domain}>
              <option value="">Select domain</option>
              {domains.length > 0 ? (
                domains.map((d) => (
                  <option key={d.id} value={d.name}>
                    {d.name}
                  </option>
                ))
              ) : (
                <>
                  <option value="Embedded Linux Development">Embedded Linux Development</option>
                  <option value="AI, Machine Learning, Deep Learning">AI, Machine Learning, Deep Learning</option>
                  <option value="DevOps">DevOps</option>
                  <option value="Other">Other</option>
                </>
              )}
            </select>
          </div>
          <div>
            <label className="admin-label">Course Code</label>
            <input name="course_code" required placeholder="e.g. ELD 001" className="admin-input" defaultValue={editingSession?.course_code} />
          </div>
          <div>
            <label className="admin-label">Course Name</label>
            <input name="course_name" required placeholder="e.g. Embedded Linux System Internals" className="admin-input" defaultValue={editingSession?.course_name} />
          </div>
          <div>
            <label className="admin-label">Slug (URL)</label>
            <input name="slug" required placeholder="embedded-linux-system-internals" className="admin-input" defaultValue={editingSession?.slug} />
            <small style={{ color: "var(--admin-muted)", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>URL: /training-calendar/public-classes/[slug]</small>
          </div>
          <div>
            <label className="admin-label">Location</label>
            <input name="location" required placeholder="e.g. Timmins Training Center, Penang" className="admin-input" defaultValue={editingSession?.location} />
          </div>
          <div>
            <label className="admin-label">Duration</label>
            <input name="duration" required placeholder="e.g. 5 days" className="admin-input" defaultValue={editingSession?.duration} />
          </div>
          <div>
            <label className="admin-label">Date</label>
            <input
              name="date"
              type="text"
              required
              placeholder="e.g. 4-8 May 2026"
              className="admin-input"
              defaultValue={editingSession?.date}
              title="Date or date range (e.g. 4-8 May 2026, 15-19 Jun 2026)"
            />
            <small style={{ color: "var(--admin-muted)", fontSize: "0.75rem", marginTop: "0.25rem", display: "block" }}>Format: day-day Month Year</small>
          </div>
          <div>
            <label className="admin-label">HRDC Number (optional)</label>
            <input name="hrdc_number" placeholder="e.g. 10001240991" className="admin-input" defaultValue={editingSession?.hrdc_number ?? ""} />
          </div>
          <div style={{ display: "flex", gap: "0.5rem" }}>
            <button type="submit" disabled={submitting} className="admin-btn admin-btn-primary">
              {submitting ? "Saving…" : editingSession ? "Save Changes" : "Add Session"}
            </button>
            {editingSession && (
              <button type="button" onClick={() => setEditingSession(null)} className="admin-btn admin-btn-ghost">
                Cancel
              </button>
            )}
          </div>
          </form>
        </div>

        <div className="admin-card">
          <h2 className="admin-card-title">Existing Sessions</h2>
      {loading ? (
        <p style={{ color: "var(--admin-muted)" }}>Loading…</p>
      ) : sessions.length === 0 ? (
        <p style={{ color: "var(--admin-muted)", fontSize: "0.9rem" }}>No sessions yet. Run the SQL schema in Supabase, then add sessions above.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Domain</th>
                <th>Code</th>
                <th>Course</th>
                <th>Location</th>
                <th>Date</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {sessions.map((s) => (
                <tr key={s.id}>
                  <td>{s.domain}</td>
                  <td>{s.course_code}</td>
                  <td>{s.course_name}</td>
                  <td>{s.location}</td>
                  <td>{s.date}</td>
                  <td>
                    <a href={`/training-calendar/public-classes/${s.slug}`} target="_blank" rel="noopener noreferrer" style={{ marginRight: 8, color: "var(--admin-accent)", textDecoration: "none", fontSize: "0.875rem", fontWeight: 500 }}>
                      View
                    </a>
                    <button type="button" onClick={() => setEditingSession(s)} className="admin-btn admin-btn-ghost" style={{ marginRight: 4 }}>
                      Edit
                    </button>
                    <button type="button" onClick={() => handleDelete(s.id)} className="admin-btn admin-btn-ghost">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
        </div>
      </div>
    </div>
  );
}
