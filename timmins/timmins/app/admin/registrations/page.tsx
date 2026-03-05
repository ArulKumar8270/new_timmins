"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Registration = {
  id: string;
  course_name: string;
  session_id: string | null;
  session_date: string | null;
  session_location: string | null;
  full_name: string;
  email: string;
  mobile_number: string;
  organization_name: string;
  job_role: string;
  job_role_other: string | null;
  experience_level: string;
  who_pays: string;
  require_invoice: string;
  dietary: string;
  created_at: string;
};

export default function AdminRegistrationsPage() {
  const [registrations, setRegistrations] = useState<Registration[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const loadRegistrations = async () => {
    const { data, error } = await supabase
      .from("class_registrations")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setRegistrations(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadRegistrations();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this registration?")) return;
    const { error } = await supabase.from("class_registrations").delete().eq("id", id);
    if (!error) {
      setMessage({ type: "success", text: "Deleted" });
      setExpandedId(null);
      loadRegistrations();
    } else {
      setMessage({ type: "error", text: error.message });
    }
  };

  const formatDate = (s: string) => {
    try {
      return new Date(s).toLocaleString();
    } catch {
      return s;
    }
  };

  return (
    <div>
      <div className="admin-page-header" style={{ marginBottom: "1.5rem" }}>
        <h1>Class Registrations</h1>
        <p>Registrations from the public class registration form</p>
      </div>

      {message && (
        <div className={message.type === "success" ? "admin-alert admin-alert-success" : "admin-alert admin-alert-error"}>
          {message.text}
        </div>
      )}

      {loading ? (
        <p style={{ color: "var(--admin-muted)" }}>Loading…</p>
      ) : registrations.length === 0 ? (
        <p style={{ color: "var(--admin-muted)", fontSize: "0.9rem" }}>No registrations yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Course</th>
                <th>Session</th>
                <th>Name</th>
                <th>Organization</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Who Pays</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {registrations.map((r) => (
                <React.Fragment key={r.id}>
                  <tr>
                    <td style={{ fontSize: "0.8rem", color: "var(--admin-muted)" }}>{formatDate(r.created_at)}</td>
                    <td>{r.course_name}</td>
                    <td style={{ fontSize: "0.85rem" }}>{[r.session_date, r.session_location].filter(Boolean).join(" | ") || "—"}</td>
                    <td>{r.full_name}</td>
                    <td>{r.organization_name}</td>
                    <td>
                      <a href={`mailto:${r.email}`} style={{ color: "var(--admin-accent)", textDecoration: "none" }}>
                        {r.email}
                      </a>
                    </td>
                    <td>{r.mobile_number}</td>
                    <td>{r.who_pays}</td>
                    <td>
                      <div style={{ display: "flex", gap: "0.5rem" }}>
                        <button
                          type="button"
                          onClick={() => setExpandedId(expandedId === r.id ? null : r.id)}
                          className="admin-btn admin-btn-ghost"
                        >
                          {expandedId === r.id ? "Hide" : "Details"}
                        </button>
                        <button type="button" onClick={() => handleDelete(r.id)} className="admin-btn admin-btn-ghost">
                          Delete
                        </button>
                      </div>
                    </td>
                  </tr>
                  {expandedId === r.id && (
                    <tr>
                      <td colSpan={9} style={{ padding: "1rem", background: "#f8fafc", borderBottom: "1px solid var(--admin-border)" }}>
                        <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem", fontSize: "0.875rem" }}>
                          <div><strong>Session:</strong> {r.session_date || "—"} | {r.session_location || "—"}</div>
                          <div><strong>Job Role:</strong> {r.job_role}{r.job_role_other ? ` (${r.job_role_other})` : ""}</div>
                          <div><strong>Experience:</strong> {r.experience_level}</div>
                          <div><strong>Invoice:</strong> {r.require_invoice}</div>
                          <div><strong>Dietary:</strong> {r.dietary}</div>
                          <div><strong>HRDC:</strong> {r.who_pays === "HRDC Claim" ? "Yes" : "—"}</div>
                        </div>
                      </td>
                    </tr>
                  )}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
