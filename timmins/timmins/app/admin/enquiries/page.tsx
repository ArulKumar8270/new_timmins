"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

type Enquiry = {
  id: string;
  case_study_name: string;
  full_name: string;
  organization: string;
  email: string;
  contact_number: string;
  created_at: string;
};

export default function AdminEnquiriesPage() {
  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  const loadEnquiries = async () => {
    const { data, error } = await supabase
      .from("case_study_enquiries")
      .select("*")
      .order("created_at", { ascending: false });
    if (!error) setEnquiries(data || []);
    setLoading(false);
  };

  useEffect(() => {
    loadEnquiries();
  }, []);

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this enquiry?")) return;
    const { error } = await supabase.from("case_study_enquiries").delete().eq("id", id);
    if (!error) {
      setMessage({ type: "success", text: "Deleted" });
      loadEnquiries();
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
        <h1>Case Studies Enquiries</h1>
        <p>Leads from the case study download form</p>
      </div>

      {message && (
        <div className={message.type === "success" ? "admin-alert admin-alert-success" : "admin-alert admin-alert-error"}>
          {message.text}
        </div>
      )}

      {loading ? (
        <p style={{ color: "var(--admin-muted)" }}>Loading…</p>
      ) : enquiries.length === 0 ? (
        <p style={{ color: "var(--admin-muted)", fontSize: "0.9rem" }}>No enquiries yet.</p>
      ) : (
        <div className="admin-table-wrap">
          <table className="admin-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Case Study</th>
                <th>Name</th>
                <th>Organization</th>
                <th>Email</th>
                <th>Contact</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {enquiries.map((e) => (
                <tr key={e.id}>
                  <td style={{ fontSize: "0.8rem", color: "var(--admin-muted)" }}>{formatDate(e.created_at)}</td>
                  <td>{e.case_study_name}</td>
                  <td>{e.full_name}</td>
                  <td>{e.organization}</td>
                  <td>
                    <a href={`mailto:${e.email}`} style={{ color: "var(--admin-accent)", textDecoration: "none" }}>
                      {e.email}
                    </a>
                  </td>
                  <td>{e.contact_number}</td>
                  <td>
                    <button type="button" onClick={() => handleDelete(e.id)} className="admin-btn admin-btn-ghost">
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
  );
}
