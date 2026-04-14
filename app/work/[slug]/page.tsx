import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import content from "@/content/content.json"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return content.work.map((job) => ({ slug: job.id }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const job = content.work.find((j) => j.id === slug)
  if (!job) return {}
  return {
    title: `${job.role} at ${job.company} — ${content.meta.name}`,
  }
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params
  const job = content.work.find((j) => j.id === slug)

  if (!job) notFound()

  const paragraphs = job.content
    .split("\n\n")
    .filter(Boolean)
    .map((p) => p.trim())

  return (
    <div className="min-h-svh">
      {/* Header */}
      <div
        className="pt-32 pb-16 px-6 md:px-12 lg:px-20 border-b border-border"
        style={{ backgroundColor: "var(--card)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#work"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back
          </Link>

          <div className="space-y-2">
            <p
              className="text-sm font-medium"
              style={{ color: "var(--purple)" }}
            >
              {job.company}
            </p>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {job.role}
            </h1>
            <p className="text-sm text-muted-foreground">{job.period} · {job.location}</p>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {job.tags.map((tag) => (
              <span
                key={tag}
                className="inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-3xl mx-auto">
          <div className="prose prose-neutral dark:prose-invert max-w-none">
            {paragraphs.map((paragraph, i) => {
              // Check if it's a list item block
              if (paragraph.startsWith("-")) {
                const items = paragraph
                  .split("\n")
                  .filter((line) => line.startsWith("-"))
                  .map((line) => line.replace(/^-\s*/, ""))
                return (
                  <ul
                    key={i}
                    className="mt-4 space-y-2 list-none pl-0"
                  >
                    {items.map((item, j) => (
                      <li
                        key={j}
                        className="flex items-start gap-2 text-muted-foreground text-[0.95rem] leading-relaxed"
                      >
                        <span
                          className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                          style={{ backgroundColor: "var(--orange)" }}
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p
                  key={i}
                  className={`text-[0.95rem] leading-relaxed text-foreground/80 ${i > 0 ? "mt-5" : ""}`}
                >
                  {paragraph}
                </p>
              )
            })}
          </div>

          {/* Images placeholder */}
          {job.images && job.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {job.images.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={img}
                  alt={`${job.company} ${i + 1}`}
                  className="rounded-xl w-full object-cover aspect-video border border-border"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
