"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Domain = { id: string; name: string; sort_order: number };

export default function AdminDomainsPage() {
  const [domains, setDomains] = useState<Domain[]>([]);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadDomains = async () => {
    const { data, error } = await supabase
      .from("domains")
      .select("*")
      .order("sort_order", { ascending: true })
      .order("name", { ascending: true });
    if (!error) setDomains(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadDomains();
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setMessage(null);
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim();
    const sortOrder = parseInt((form.elements.namedItem("sort_order") as HTMLInputElement)?.value || "0", 10);
    if (!name) {
      setMessage({ type: "error", text: "Name is required" });
      setSubmitting(false);
      return;
    }
    const { error } = await supabase.from("domains").insert({ name, sort_order: sortOrder });
    if (!error) {
      setMessage({ type: "success", text: "Domain added!" });
      form.reset();
      loadDomains();
    } else {
      setMessage({ type: "error", text: error.message });
    }
    setSubmitting(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this domain?")) return;
    const { error } = await supabase.from("domains").delete().eq("id", id);
    if (!error) {
      setMessage({ type: "success", text: "Deleted" });
      loadDomains();
    } else {
      setMessage({ type: "error", text: error.message });
    }
  };

  return (
    <div>
      <div className="admin-page-header" style={{ marginBottom: "1.5rem" }}>
        <h1>Domains</h1>
        <p>Manage training domains used in class sessions</p>
      </div>

      {message && (
        <div className={message.type === "success" ? "admin-alert admin-alert-success" : "admin-alert admin-alert-error"}>
          {message.text}
        </div>
      )}

      <div className="admin-grid-2" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
        <div className="admin-card">
          <h2 className="admin-card-title">Add Domain</h2>
          <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <div>
              <label className="admin-label">Domain Name</label>
              <input name="name" required placeholder="e.g. Embedded Linux Development" className="admin-input" />
            </div>
            <div>
              <label className="admin-label">Sort Order</label>
              <input name="sort_order" type="number" defaultValue="0" className="admin-input" />
            </div>
            <button type="submit" disabled={submitting} className="admin-btn admin-btn-primary">
              {submitting ? "Adding…" : "Add Domain"}
            </button>
          </form>
        </div>

        <div className="admin-card">
          <h2 className="admin-card-title">Existing Domains</h2>
          {loading ? (
            <p style={{ color: "var(--admin-muted)" }}>Loading…</p>
          ) : domains.length === 0 ? (
            <p style={{ color: "var(--admin-muted)", fontSize: "0.9rem" }}>No domains yet. Run the SQL schema in Supabase, then add domains above.</p>
          ) : (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {domains.map((d) => (
                <li key={d.id} className="admin-domain-item">
                  <span style={{ fontWeight: 500 }}>{d.name}</span>
                  <span style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                    <span style={{ fontSize: "0.75rem", color: "var(--admin-muted)", background: "#f1f5f9", padding: "0.25rem 0.5rem", borderRadius: 4 }}>#{d.sort_order}</span>
                    <button type="button" onClick={() => handleDelete(d.id)} className="admin-btn admin-btn-ghost">
                      Delete
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
