import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjectBySlug, getAllSlugs } from "@/lib/queries";
import BackLink from "@/components/BackLink"

export async function generateStaticParams() {
  const slugs = await getAllSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Fernando Celadita`,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const tags = project.project_tags?.map((pt) => pt.tag?.name).filter(Boolean) ?? [];

  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, minHeight: "100vh" }}>
      <div className="container" style={{ maxWidth: 780 }}>
        {/* back */}
        <BackLink />
        
        {/* tags */}
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginBottom: 20 }}>
          {tags.map((t: string) => (
            <span key={t} className={`tag-pill tag-${t}`}>{t}</span>
          ))}
        </div>

        {/* title */}
        <h1
          style={{
            fontSize: "clamp(28px, 5vw, 48px)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            lineHeight: 1.15,
            marginBottom: 16,
          }}
        >
          {project.title}
        </h1>

        {project.description && (
          <p style={{ fontSize: 18, color: "var(--text-muted)", lineHeight: 1.7, marginBottom: 32 }}>
            {project.description}
          </p>
        )}

        {/* action links */}
        <div style={{ display: "flex", gap: 14, marginBottom: 48, flexWrap: "wrap" }}>
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                background: "var(--accent)",
                color: "#0a0a0a",
                borderRadius: "var(--radius)",
                fontWeight: 500,
                fontSize: 14,
              }}
            >
              Ver demo ↗
            </a>
          )}
          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                padding: "10px 24px",
                border: "1px solid var(--border)",
                borderRadius: "var(--radius)",
                fontSize: 14,
                color: "var(--text-muted)",
              }}
            >
              Repositorio ↗
            </a>
          )}
        </div>

        {/* cover image */}
        {project.image_url && (
          <div
            style={{
              position: "relative",
              height: 400,
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              marginBottom: 48,
              border: "1px solid var(--border)",
            }}
          >
            <Image
              src={project.image_url}
              alt={project.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        )}

        {/* content */}
        {project.content && (
          <div
            style={{
              color: "var(--text-muted)",
              lineHeight: 1.8,
              fontSize: 16,
              whiteSpace: "pre-wrap",
            }}
          >
            {project.content}
          </div>
        )}

        {/* meta */}
        <div
          style={{
            marginTop: 64,
            padding: "20px 24px",
            background: "var(--bg2)",
            borderRadius: "var(--radius)",
            border: "1px solid var(--border)",
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-dim)",
          }}
        >
          Publicado el{" "}
          {new Date(project.created_at).toLocaleDateString("es-PE", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      </div>
    </div>
  );
}