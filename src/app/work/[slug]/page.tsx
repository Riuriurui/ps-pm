import { notFound } from "next/navigation";
import { getWorkEntry, getWorkEntries } from "@/lib/content";
import { ArticlePage } from "@/components/article-page";

export async function generateStaticParams() {
  const entries = getWorkEntries();
  return entries.map((entry) => ({
    slug: entry.slug,
  }));
}

export default async function WorkEntryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const entry = getWorkEntry(slug);

  if (!entry) {
    notFound();
  }

  return (
    <ArticlePage
      title={entry.title}
      subtitle={entry.company}
      meta={{
        period: entry.period,
        location: entry.location,
        tags: entry.tags,
      }}
      content={entry.content}
      backHref="/#work"
      backLabel="Work Experience"
    />
  );
}
