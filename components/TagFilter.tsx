"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";

const TAGS = ["todos", "ia", "web", "data", "mobile", "backend"];

export default function TagFilter() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const active = params.get("tag") ?? "todos";

  function setTag(tag: string) {
    const current = new URLSearchParams(Array.from(params.entries()));
    // when switching tags, always clear the search query too
    current.delete("q");
    if (tag === "todos") {
      current.delete("tag");
    } else {
      current.set("tag", tag);
    }
    router.push(`${pathname}?${current.toString()}`);
  }

  return (
    <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
      {TAGS.map((tag) => {
        const isActive = active === tag;
        return (
          <button
            key={tag}
            onClick={() => setTag(tag)}
            style={{
              padding: "7px 16px",
              borderRadius: 20,
              border: "1px solid",
              borderColor: isActive
                ? tag === "todos" ? "var(--accent)" : `var(--tag-${tag})`
                : "var(--border)",
              background: isActive
                ? tag === "todos" ? "var(--accent-dim)" : `var(--tag-${tag}-bg)`
                : "transparent",
              color: isActive
                ? tag === "todos" ? "var(--accent)" : `var(--tag-${tag})`
                : "var(--text-muted)",
              fontFamily: "var(--font-mono)",
              fontSize: 12,
              cursor: "pointer",
              transition: "all 0.15s",
              letterSpacing: "0.02em",
            }}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}