export interface Tag {
  id: string;
  name: string;
}

export interface ProjectTag {
  tag: Tag;
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  description?: string;
  content?: string;
  image_url?: string;
  demo_url?: string;
  repo_url?: string;
  featured: boolean;
  published: boolean;
  created_at: string;
  project_tags?: ProjectTag[];
}