"use client";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/lib/types";

interface Props {
  project: Project;
}

export default function ProjectCard({ project }: Props) {
  const tags = project.project_tags?.map((pt: any) => pt.tag?.name).filter(Boolean) ?? [];

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={{
        display: "flex",
        flexDirection: "column",
        background: "var(--bg2)",
        border: "1px solid var(--border)",
        borderRadius: "var(--radius-lg)",
        overflow: "hidden",
        transition: "border-color 0.2s, transform 0.2s",
        textDecoration: "none",
      }}
      onMouseOver={(e) => {
        e.currentTarget.style.borderColor = "var(--border-hover)";
        e.currentTarget.style.transform = "translateY(-2px)";
      }}
      onMouseOut={(e) => {
        e.currentTarget.style.borderColor = "var(--border)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* image */}
      {project.image_url ? (
        <div style={{ position: "relative", height: 200, background: "var(--bg3)", overflow: "hidden" }}>
          <Image
            src={project.image_url}
            alt={project.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      ) : (
        <div
          style={{
            height: 160,
            background: "var(--bg3)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontFamily: "var(--font-mono)",
            fontSize: 32,
            color: "var(--text-dim)",
          }}
        >
          {project.title[0].toUpperCase()}
        </div>
      )}

      {/* content */}
      <div style={{ padding: "20px 24px 24px", flex: 1, display: "flex", flexDirection: "column" }}>
        {/* tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
          {tags.map((t: string) => (
            <span key={t} className={`tag-pill tag-${t}`}>{t}</span>
          ))}
        </div>

        <h3
          style={{
            fontSize: 17,
            fontWeight: 500,
            letterSpacing: "-0.01em",
            marginBottom: 10,
            lineHeight: 1.3,
          }}
        >
          {project.title}
        </h3>

        {project.description && (
          <p
            style={{
              fontSize: 14,
              color: "var(--text-muted)",
              lineHeight: 1.6,
              flex: 1,
              display: "-webkit-box",
              WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
            }}
          >
            {project.description}
          </p>
        )}

        {/* links */}
        <div style={{ display: "flex", gap: 16, marginTop: 20 }}>
          {project.demo_url && (
            <a
              href={project.demo_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--accent)",
                transition: "opacity 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = "0.7")}
              onMouseOut={(e) => (e.currentTarget.style.opacity = "1")}
            >
              demo ↗
            </a>
          )}
          {project.repo_url && (
            <a
              href={project.repo_url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: 12,
                color: "var(--text-muted)",
                transition: "color 0.2s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.color = "var(--text)")}
              onMouseOut={(e) => (e.currentTarget.style.color = "var(--text-muted)")}
            >
              repo ↗
            </a>
          )}
        </div>
      </div>
    </Link>
  );
}