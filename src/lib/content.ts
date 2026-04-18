import fs from "fs";
import path from "path";
import matter from "gray-matter";

const contentDirectory = path.join(process.cwd(), "src/content");

export interface WorkEntry {
  slug: string;
  title: string;
  company: string;
  period: string;
  location: string;
  tags: string[];
  featured: boolean;
  image: string;
  content: string;
}

export interface ProjectEntry {
  slug: string;
  title: string;
  description: string;
  period: string;
  tags: string[];
  featured: boolean;
  image: string;
  content: string;
}

export function getWorkEntries(): WorkEntry[] {
  const workDir = path.join(contentDirectory, "work");
  const fileNames = fs.readdirSync(workDir).filter(f => f.endsWith(".md"));

  const entries = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(workDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      company: data.company || "",
      period: data.period || "",
      location: data.location || "",
      tags: data.tags || [],
      featured: data.featured ?? true,
      image: data.image || "",
      content,
    } as WorkEntry;
  });

  return entries.filter(e => e.featured).sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getProjectEntries(): ProjectEntry[] {
  const projectsDir = path.join(contentDirectory, "projects");
  const fileNames = fs.readdirSync(projectsDir).filter(f => f.endsWith(".md"));

  const entries = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.md$/, "");
    const fullPath = path.join(projectsDir, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      period: data.period || "",
      tags: data.tags || [],
      featured: data.featured ?? true,
      image: data.image || "",
      content,
    } as ProjectEntry;
  });

  return entries.filter(e => e.featured).sort((a, b) => a.slug.localeCompare(b.slug));
}

export function getWorkEntry(slug: string): WorkEntry | null {
  try {
    const fullPath = path.join(contentDirectory, "work", `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      company: data.company || "",
      period: data.period || "",
      location: data.location || "",
      tags: data.tags || [],
      featured: data.featured ?? true,
      image: data.image || "",
      content,
    };
  } catch {
    return null;
  }
}

export function getProjectEntry(slug: string): ProjectEntry | null {
  try {
    const fullPath = path.join(contentDirectory, "projects", `${slug}.md`);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const { data, content } = matter(fileContents);

    return {
      slug,
      title: data.title || "",
      description: data.description || "",
      period: data.period || "",
      tags: data.tags || [],
      featured: data.featured ?? true,
      image: data.image || "",
      content,
    };
  } catch {
    return null;
  }
}
