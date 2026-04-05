"use client";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useTransition, useState, useEffect } from "react";

export default function SearchBar() {
  const router = useRouter();
  const pathname = usePathname();
  const params = useSearchParams();
  const [isPending, startTransition] = useTransition();
  const [value, setValue] = useState(params.get("q") ?? "");

  // sync when URL changes externally (e.g. tag click clears q)
  useEffect(() => {
    setValue(params.get("q") ?? "");
  }, [params]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const q = e.target.value;
    setValue(q);
    const current = new URLSearchParams(Array.from(params.entries()));
    if (q) {
      current.set("q", q);
    } else {
      current.delete("q");
    }
    startTransition(() => {
      router.push(`${pathname}?${current.toString()}`);
    });
  }

  return (
    <div style={{ position: "relative" }}>
      <span style={{ position: "absolute", left: 14, top: "50%", transform: "translateY(-50%)", color: "var(--text-dim)", fontSize: 16, pointerEvents: "none" }}>
        ⌕
      </span>
      <input
        type="text"
        placeholder="Buscar proyectos..."
        value={value}
        onChange={handleChange}
        style={{
          width: "100%",
          padding: "11px 14px 11px 38px",
          background: "var(--bg2)",
          border: "1px solid var(--border)",
          borderRadius: "var(--radius)",
          color: "var(--text)",
          fontSize: 14,
          fontFamily: "var(--font-sans)",
          outline: "none",
          transition: "border-color 0.2s",
          opacity: isPending ? 0.7 : 1,
        }}
        onFocus={(e) => (e.currentTarget.style.borderColor = "var(--border-hover)")}
        onBlur={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
      />
    </div>
  );
}