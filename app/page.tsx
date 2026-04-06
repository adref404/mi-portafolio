import Link from "next/link";
import { getProjects } from "@/lib/queries";
import ProjectCard from "@/components/ProjectCard";
import HomeHero from "@/components/HomeHero";
import { color } from "framer-motion";

const SKILLS = [
  { label: "Python", tag: "data" },
  { label: "React / Next.js", tag: "web" },
  { label: "PostgreSQL", tag: "backend" },
  { label: "Machine Learning", tag: "ia" },
  { label: "Power BI", tag: "data" },
  { label: "Kotlin / Android", tag: "mobile" },
  { label: "Node.js", tag: "backend" },
  { label: "TensorFlow", tag: "ia" },
  { label: "Docker", tag: "backend" },
  { label: "BigQuery / GCP", tag: "data" },
  { label: "Java / Spring Boot", tag: "backend" },
  { label: "R + Shiny", tag: "data" },
];

const EXPERIENCE = [
  {
    role: "Practicante Mejora Continua",
    company: "Latam Airlines",
    period: "Oct 2025 — Actualidad",
    desc: "Automatización de procesos y reportes con Google Cloud (BigQuery, Looker Studio, AppSheet). Análisis y visualización de datos para indicadores operativos.",
    tag: "data",
  },
  {
    role: "Voluntariado - Desarrollador Full Stack",
    company: "Superlearner Perú",
    period: "Jun 2025 — Actualidad",
    desc:"Platforma para la adminitración de cursos online, control de asitencia alumnos, gestion de voluntarios y dashboards de metricas realizado con django, react y postgres.",
    tag: "web",
  },
  {
    role: "Desarrollador Web Freelance",
    company: "Independiente",
    period: "Feb 2025 — Actualidad",
    desc: "Sistema de gestión de contenidos con bots para posgrado, stack MERN. Despliegue multi-servidor.",
    tag: "web",
  },
  {
    role: "Asistente TI",
    company: "Posgrado UNMSM",
    period: "Jun 2024 — Oct 2024",
    desc: "Migración de portal institucional con Docker y WordPress. Módulos de visualización de datos y documentación en LaTeX.",
    tag: "backend",
  },
];

export default async function Home() {
  const featured = await getProjects(undefined, undefined, true);

  return (
    <>
      <HomeHero />

      {/* ABOUT */}
      <section id="about" style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 80, alignItems: "start" }}>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
                {"// sobre mí"}
              </p>
              <h2 style={{ fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 600, letterSpacing: "-0.02em", lineHeight: 1.2, marginBottom: 24 }}>
                Construyo cosas con datos y código
              </h2>
              <p style={{ color: "var(--text-muted)", lineHeight: 1.8, marginBottom: 16 }}>
                Estudio Ingeniería de Sistemas en la UNMSM. He trabajado en datos, desarrollo web y automatización; 
                como practicante en <b style={{color: "white"}}>Latam Airlines</b> con Google Cloud, desarrollador
                <b style={{color: "white"}}> full stack</b> en <b style={{color: "white"}}> Superlearner Perú</b> y freelance en proyectos web. 
                Cada rol me fue sumando herramientas y criterio.
              </p>
            </div>
            <div>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 16 }}>
                {"// stack"}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {SKILLS.map((s) => (
                  <span key={s.label} className={`tag-pill tag-${s.tag}`} style={{ fontSize: 13 }}>
                    {s.label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experiencia" style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 40 }}>
            {"// experiencia"}
          </p>
          <div style={{ display: "flex", flexDirection: "column" }}>
            {EXPERIENCE.map((e, i) => (
              <div key={i} style={{ display: "grid", gridTemplateColumns: "minmax(160px, 200px) 1fr", gap: 32, padding: "32px 0", borderBottom: "1px solid var(--border)", alignItems: "start" }}>
                <div>
                  <div style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--text-dim)", marginBottom: 6 }}>{e.period}</div>
                  <span className={`tag-pill tag-${e.tag}`}>{e.tag}</span>
                </div>
                <div>
                  <div style={{ fontWeight: 500, marginBottom: 4 }}>{e.role}</div>
                  <div style={{ fontSize: 13, color: "var(--accent)", fontFamily: "var(--font-mono)", marginBottom: 10 }}>{e.company}</div>
                  <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7 }}>{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED PROJECTS */}
      {featured && featured.length > 0 && (
        <section style={{ padding: "80px 0", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 40 }}>
              <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em" }}>
                {"// proyectos destacados"}
              </p>
              <Link href="/projects" style={{ fontSize: 13, color: "var(--text-muted)", fontFamily: "var(--font-mono)" }}>
                ver todos →
              </Link>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 20 }}>
              {featured.map((p: any) => (
                <ProjectCard key={p.id} project={p} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section style={{ padding: "100px 0", borderTop: "1px solid var(--border)" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: 12, color: "var(--accent)", letterSpacing: "0.1em", marginBottom: 20 }}>
            {"// hablemos"}
          </p>
          <h2 style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 600, letterSpacing: "-0.03em", marginBottom: 16 }}>
            ¿Tienes un proyecto en mente?
          </h2>
          <p style={{ color: "var(--text-muted)", maxWidth: 400, margin: "0 auto 40px" }}>
            Estoy abierto a colaboraciones, freelance y oportunidades. Escríbeme.
          </p>
          <a
            href="mailto:cgfernando.4799@gmail.com"
            style={{ display: "inline-block", padding: "14px 36px", background: "var(--accent)", color: "#0a0a0a", borderRadius: "var(--radius)", fontWeight: 500, fontSize: 16 }}
          >
            cgfernando.4799@gmail.com
          </a>
        </div>
      </section>
    </>
  );
}