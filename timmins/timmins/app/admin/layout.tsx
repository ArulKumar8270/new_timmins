"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import "./admin.css";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/classes", label: "Classes", icon: "📅" },
  { href: "/admin/registrations", label: "Class Registrations", icon: "📋" },
  { href: "/admin/domains", label: "Domains", icon: "📁" },
  { href: "/admin/course-content", label: "Course Content", icon: "📝" },
  { href: "/admin/enquiries", label: "Case Studies Enquiries", icon: "📧" },
];

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="admin-layout" style={{ display: "flex", minHeight: "100vh" }}>
      {/* Sidebar */}
      <aside
        className="admin-sidebar"
        style={{
          width: 280,
          color: "#fff",
          padding: "1.5rem 0",
          flexShrink: 0,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <div style={{ padding: "0 1.25rem", marginBottom: "1.5rem" }}>
          <Link href="/admin" style={{ color: "#fff", textDecoration: "none", fontWeight: 700, fontSize: "1.25rem", letterSpacing: "-0.02em" }}>
            Timmins Admin
          </Link>
        </div>
        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const isActive = pathname === item.href || (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "0.75rem",
                  padding: "0.75rem 1.25rem",
                  color: isActive ? "#fff" : "rgba(255,255,255,0.75)",
                  textDecoration: "none",
                  background: isActive ? "rgba(65, 152, 200, 0.25)" : "transparent",
                  borderLeft: isActive ? "3px solid #4198c8" : "3px solid transparent",
                }}
              >
                <span style={{ fontSize: "1.1rem", opacity: isActive ? 1 : 0.9 }}>{item.icon}</span>
                {item.label}
              </Link>
            );
          })}
        </nav>
        <div style={{ padding: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.1)" }}>
          <Link href="/" style={{ color: "rgba(255,255,255,0.7)", fontSize: "0.875rem", textDecoration: "none", display: "flex", alignItems: "center", gap: "0.5rem" }}>
            ← Back to site
          </Link>
        </div>
      </aside>

      {/* Main content */}
      <main className="admin-main" style={{ flex: 1, padding: "2rem", overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
}
