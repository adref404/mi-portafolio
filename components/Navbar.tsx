"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const LINKS = [
  { href: "/", label: "inicio" },
  { href: "/projects", label: "proyectos" },
  { href: "/#about", label: "sobre mí" },
  { href: "/#experiencia", label: "experiencia" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        borderBottom: "1px solid var(--border)",
        backdropFilter: "blur(16px)",
        background: "rgba(10,10,10,0.8)",
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          height: 64,
        }}
      >
        {/* logo */}
        <Link
          href="/"
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 14,
            fontWeight: 500,
            color: "var(--accent)",
            letterSpacing: "0.05em",
          }}
        >
          fc<span style={{ color: "var(--text-dim)" }}>.</span>dev
        </Link>

        {/* links */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }}>
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 13,
                color: pathname === l.href ? "var(--text)" : "var(--text-muted)",
                transition: "color 0.2s",
                letterSpacing: "0.02em",
              }}
            >
              {l.label}
            </Link>
          ))}
          <a
            href="https://github.com/adref404"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "6px 16px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--text-muted)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </nav>
  );
}