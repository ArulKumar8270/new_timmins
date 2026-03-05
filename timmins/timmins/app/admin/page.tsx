"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

export default function AdminDashboardPage() {
  const [stats, setStats] = useState({ sessions: 0, domains: 0, enquiries: 0, registrations: 0 });

  useEffect(() => {
    const load = async () => {
      try {
        const [sessionsRes, domainsRes, enquiriesRes, regsRes] = await Promise.all([
          supabase.from("public_class_sessions").select("id", { count: "exact", head: true }),
          supabase.from("domains").select("id", { count: "exact", head: true }),
          supabase.from("case_study_enquiries").select("id", { count: "exact", head: true }),
          supabase.from("class_registrations").select("id", { count: "exact", head: true }),
        ]);
        setStats({
          sessions: sessionsRes.count ?? 0,
          domains: domainsRes.error ? 0 : (domainsRes.count ?? 0),
          enquiries: enquiriesRes.error ? 0 : (enquiriesRes.count ?? 0),
          registrations: regsRes.error ? 0 : (regsRes.count ?? 0),
        });
      } catch {
        setStats({ sessions: 0, domains: 0, enquiries: 0, registrations: 0 });
      }
    };
    load();
  }, []);

  return (
    <div>
      <div className="admin-page-header" style={{ marginBottom: "2rem" }}>
        <h1>Dashboard</h1>
        <p>Manage your training classes and domains</p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: "1.5rem" }}>
        <Link href="/admin/classes" className="admin-stat-card">
          <div className="admin-stat-icon classes">📅</div>
          <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600, color: "var(--admin-text)" }}>Class Sessions</h3>
          <p className="admin-stat-value">{stats.sessions}</p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem", color: "var(--admin-muted)" }}>Dates, locations, HRDC →</p>
        </Link>

        <Link href="/admin/course-content" className="admin-stat-card">
          <div className="admin-stat-icon" style={{ background: "rgba(65, 152, 200, 0.2)", color: "#4198c8" }}>📝</div>
          <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600, color: "var(--admin-text)" }}>Course Content</h3>
          <p className="admin-stat-value">All</p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem", color: "var(--admin-muted)" }}>Edit page content per course →</p>
        </Link>

        <Link href="/admin/registrations" className="admin-stat-card">
          <div className="admin-stat-icon registrations">📋</div>
          <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600, color: "var(--admin-text)" }}>Class Registrations</h3>
          <p className="admin-stat-value">{stats.registrations}</p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem", color: "var(--admin-muted)" }}>View registrations →</p>
        </Link>

        <Link href="/admin/domains" className="admin-stat-card">
          <div className="admin-stat-icon domains">📁</div>
          <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600, color: "var(--admin-text)" }}>Domains</h3>
          <p className="admin-stat-value">{stats.domains}</p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem", color: "var(--admin-muted)" }}>Manage domains →</p>
        </Link>

        <Link href="/admin/enquiries" className="admin-stat-card">
          <div className="admin-stat-icon enquiries">📋</div>
          <h3 style={{ margin: "0 0 0.25rem", fontSize: "1rem", fontWeight: 600, color: "var(--admin-text)" }}>Case Studies Enquiries</h3>
          <p className="admin-stat-value">{stats.enquiries}</p>
          <p style={{ margin: "0.5rem 0 0", fontSize: "0.8125rem", color: "var(--admin-muted)" }}>View leads →</p>
        </Link>
      </div>

      <div className="admin-quick-links" style={{ marginTop: "2rem" }}>
        <strong>Quick links:</strong>{" "}
        <Link href="/training-calendar/public-classes">Public Classes</Link>
        {" · "}
        <Link href="/training-calendar">Training Calendar</Link>
      </div>
    </div>
  );
}
