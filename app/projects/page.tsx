import { Suspense } from "react";
import { getProjects } from "@/lib/queries";
import ProjectCard from "@/components/ProjectCard";
import SearchBar from "@/components/SearchBar";
import TagFilter from "@/components/TagFilter";

interface Props {
  searchParams: Promise<{ tag?: string; q?: string }>;
}

export const metadata = {
  title: "Proyectos — Fernando Celadita",
};

export default async function ProjectsPage({ searchParams }: Props) {
  const { tag, q } = await searchParams;
  const projects = await getProjects(tag, q);

  return (
    <div style={{ paddingTop: 100, paddingBottom: 100, minHeight: "100vh" }}>
      <div className="container">
        {/* header */}
        <div style={{ marginBottom: 60 }}>
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              color: "var(--accent)",
              letterSpacing: "0.1em",
              marginBottom: 16,
            }}
          >
            {"// proyectos"}
          </p>
          <h1
            style={{
              fontSize: "clamp(32px, 5vw, 56px)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Lo que he construido
          </h1>
          <p style={{ color: "var(--text-muted)", maxWidth: 500, lineHeight: 1.7 }}>
            Proyectos personales y profesionales — IA, datos, web y mobile.
            Usa los filtros para encontrar lo que te interesa.
          </p>
        </div>

        {/* filters */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 16,
            marginBottom: 48,
            padding: "20px 24px",
            background: "var(--bg2)",
            border: "1px solid var(--border)",
            borderRadius: "var(--radius-lg)",
          }}
        >
          <Suspense>
            <SearchBar />
            <TagFilter />
          </Suspense>
        </div>

        {/* results count */}
        <p
          style={{
            fontFamily: "var(--font-mono)",
            fontSize: 12,
            color: "var(--text-dim)",
            marginBottom: 28,
          }}
        >
          {projects.length} proyecto{projects.length !== 1 ? "s" : ""}
          {tag ? ` · tag: ${tag}` : ""}
          {q ? ` · búsqueda: "${q}"` : ""}
        </p>

        {/* grid */}
        {projects.length > 0 ? (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
              gap: 20,
            }}
          >
            {projects.map((p) => (
              <ProjectCard key={p.id} project={p} />
            ))}
          </div>
        ) : (
          <div
            style={{
              textAlign: "center",
              padding: "80px 0",
              color: "var(--text-dim)",
              fontFamily: "var(--font-mono)",
              fontSize: 14,
            }}
          >
            No se encontraron proyectos
            {tag ? ` con el tag "${tag}"` : ""}
            {q ? ` para "${q}"` : ""}.
          </div>
        )}
      </div>
    </div>
  );
}