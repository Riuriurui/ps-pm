import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Card, CardContent } from "@/components/ui/card";
import { Calendar, MapPin } from "lucide-react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface ArticlePageProps {
  title: string;
  subtitle?: string;
  meta?: {
    period?: string;
    location?: string;
    tags?: string[];
  };
  content: string;
  backHref: string;
  backLabel: string;
}

export function ArticlePage({ title, subtitle, meta, content, backHref, backLabel }: ArticlePageProps) {
  return (
    <article className="min-h-screen py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <Link
          href={backHref}
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to {backLabel}
        </Link>
        
        <header className="mb-12">
          <div className="flex flex-wrap gap-2 mb-4">
            {meta?.tags?.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-sm rounded-full bg-accent/10 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
          
          <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
          
          {subtitle && (
            <p className="text-xl text-muted-foreground mb-4">{subtitle}</p>
          )}
          
          <div className="flex flex-wrap items-center gap-4 text-muted-foreground">
            {meta?.period && (
              <span className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                {meta.period}
              </span>
            )}
            {meta?.location && (
              <span className="flex items-center gap-2">
                <MapPin className="w-5 h-5" />
                {meta.location}
              </span>
            )}
          </div>
        </header>
        
        <Card>
          <CardContent className="p-8 md:p-12">
            <div className="prose prose-lg dark:prose-invert max-w-none
                          prose-headings:font-semibold
                          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-4
                          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-3
                          prose-p:leading-relaxed
                          prose-ul:my-4
                          prose-li:my-1
                          prose-strong:text-accent
                          prose-code:text-accent prose-code:bg-muted prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:text-sm
                          prose-a:text-accent prose-a:underline hover:prose-a:opacity-80">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {content}
              </ReactMarkdown>
            </div>
          </CardContent>
        </Card>
      </div>
    </article>
  );
}
