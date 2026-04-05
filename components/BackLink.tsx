"use client"
import Link from "next/link"

export default function BackLink() {
  return (
    <Link
      href="/projects"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontFamily: "var(--font-mono)",
        fontSize: 13,
        color: "var(--text-muted)",
        marginBottom: 48,
        transition: "color 0.2s",
      }}
      onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
      onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
    >
      ← proyectos
    </Link>
  )
}