"use client";
import Link from "next/link";

export default function HomeHero() {
  return (
    <section
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 60% at 50% 0%, black, transparent)",
        }}
      />
      {/* accent blob */}
      <div
        style={{
          position: "absolute",
          top: "10%",
          right: "-10%",
          width: 500,
          height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(232,197,71,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div className="container" style={{ position: "relative", zIndex: 1, paddingTop: 120, paddingBottom: 80 }}>
        <p
          className="fade-up fade-up-1"
          style={{ fontFamily: "var(--font-mono)", fontSize: 13, color: "var(--accent)", marginBottom: 20, letterSpacing: "0.1em" }}
        >
          {"// hola, soy"}
        </p>

        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 600,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            marginBottom: 8,
          }}
        >
          Fernando
        </h1>
        <h1
          className="fade-up fade-up-2"
          style={{
            fontSize: "clamp(42px, 8vw, 88px)",
            fontWeight: 300,
            lineHeight: 1.0,
            letterSpacing: "-0.03em",
            color: "var(--text-muted)",
            marginBottom: 32,
          }}
        >
          {/* CG */}
        </h1>

        <div
          className="fade-up fade-up-3"
          style={{color: "var(--text-muted)", maxWidth: 560, marginBottom: 48, lineHeight: 1.7 }}
        >
          <p>
            Estudiante de Ingeniería de Sistemas en la UNMSM. Me muevo entre datos, código y automatización, aprendiendo en el camino.
          </p>
        </div>

        <div className="fade-up fade-up-4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
          <Link
            href="/projects"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              background: "var(--accent)",
              color: "#0a0a0a",
              borderRadius: "var(--radius)",
              fontWeight: 500,
              fontSize: 15,
              transition: "opacity 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Ver proyectos →
          </Link>
          <a
            href="mailto:cgfernando.4799@gmail.com"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              border: "1px solid var(--border)",
              borderRadius: "var(--radius)",
              fontWeight: 400,
              fontSize: 15,
              color: "var(--text-muted)",
              transition: "border-color 0.2s, color 0.2s",
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.borderColor = "var(--border-hover)";
              e.currentTarget.style.color = "var(--text)";
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--text-muted)";
            }}
          >
            Contacto
          </a>
        </div>

        {/* stat row */}
        <div
          className="fade-up fade-up-5"
          style={{ display: "flex", gap: 40, marginTop: 80, flexWrap: "wrap" }}
        >
          {[
            // { n: "9°", label: "semestre UNMSM" },
            { n: "3+", label: "años de experiencia" },
            { n: "6+", label: "proyectos personales" },
          ].map((s) => (
            <div key={s.n}>
              <div style={{ fontSize: 32, fontWeight: 600, letterSpacing: "-0.02em", color: "var(--accent)" }}>{s.n}</div>
              <div style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}