import { notFound } from "next/navigation";
import { getProjectEntry, getProjectEntries } from "@/lib/content";
import { ArticlePage } from "@/components/article-page";

export async function generateStaticParams() {
  const entries = getProjectEntries();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function ProjectEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getProjectEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <ArticlePage
      title={entry.title}
      subtitle={entry.description}
      meta={{
        period: entry.period,
        tags: entry.tags,
      }}
      content={entry.content}
      backHref="/#projects"
      backLabel="Projects"
    />
  );
}
