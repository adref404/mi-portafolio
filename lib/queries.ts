import { supabase } from "./supabase";
import { Project } from "./types";

const SELECT = `
  *,
  project_tags (
    tag: tags ( id, name )
  )
`;

export async function getProjects(
  tag?: string,
  search?: string,
  featuredOnly = false
): Promise<Project[]> {
  let query = supabase
    .from("projects")
    .select(SELECT)
    .eq("published", true)
    .order("created_at", { ascending: false });

  if (featuredOnly) {
    query = query.eq("featured", true);
  }

  if (search && search.trim()) {
    query = query.or(
      `title.ilike.%${search}%,description.ilike.%${search}%`
    );
  }

  const { data, error } = await query;

  if (error) {
    console.error("getProjects error:", error);
    return [];
  }

  // filter by tag client-side (join filtering in Supabase requires RPC)
  if (tag && tag !== "todos") {
    return (data as Project[]).filter((p) =>
      p.project_tags?.some((pt) => pt.tag?.name === tag)
    );
  }

  return (data as Project[]) ?? [];
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from("projects")
    .select(SELECT)
    .eq("slug", slug)
    .eq("published", true)
    .single();

  if (error) return null;
  return data as Project;
}

export async function getAllSlugs(): Promise<string[]> {
  const { data } = await supabase
    .from("projects")
    .select("slug")
    .eq("published", true);
  return (data ?? []).map((r: any) => r.slug);
}