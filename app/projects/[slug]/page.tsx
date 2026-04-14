import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import content from "@/content/content.json"

interface Props {
  params: Promise<{ slug: string }>
}

export function generateStaticParams() {
  return content.projects.map((project) => ({ slug: project.id }))
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params
  const project = content.projects.find((p) => p.id === slug)
  if (!project) return {}
  return {
    title: `${project.title} — ${content.meta.name}`,
  }
}

export default async function ProjectDetailPage({ params }: Props) {
  const { slug } = await params
  const project = content.projects.find((p) => p.id === slug)

  if (!project) notFound()

  // Parse content with **bold** and lists
  const blocks = project.content.split("\n\n").filter(Boolean)

  return (
    <div className="min-h-svh">
      {/* Header */}
      <div
        className="pt-32 pb-16 px-6 md:px-12 lg:px-20 border-b border-border"
        style={{ backgroundColor: "var(--card)" }}
      >
        <div className="max-w-3xl mx-auto">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 mb-10"
          >
            <ArrowLeft size={14} strokeWidth={1.5} />
            Back
          </Link>

          <div className="space-y-2">
            <span
              className="text-xs uppercase tracking-[0.18em] font-medium"
              style={{ color: "var(--orange)" }}
            >
              Project
            </span>
            <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
              {project.title}
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              {project.description}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
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
          <div className="space-y-5">
            {blocks.map((block, i) => {
              // List block
              if (block.split("\n").some((l) => l.startsWith("-"))) {
                const items = block
                  .split("\n")
                  .filter((l) => l.startsWith("- "))
                  .map((l) => l.replace(/^-\s*/, ""))

                return (
                  <ul key={i} className="space-y-2.5 list-none pl-0">
                    {items.map((item, j) => {
                      // Handle **bold** within list items
                      const parts = item.split(/(\*\*[^*]+\*\*)/)
                      return (
                        <li
                          key={j}
                          className="flex items-start gap-2.5 text-[0.95rem] leading-relaxed text-muted-foreground"
                        >
                          <span
                            className="mt-2 flex-shrink-0 w-1 h-1 rounded-full"
                            style={{ backgroundColor: "var(--orange)" }}
                          />
                          <span>
                            {parts.map((part, k) =>
                              part.startsWith("**") && part.endsWith("**") ? (
                                <strong
                                  key={k}
                                  className="font-semibold text-foreground"
                                >
                                  {part.slice(2, -2)}
                                </strong>
                              ) : (
                                part
                              )
                            )}
                          </span>
                        </li>
                      )
                    })}
                  </ul>
                )
              }

              // Regular paragraph — handle **bold**
              const parts = block.split(/(\*\*[^*]+\*\*)/)
              return (
                <p
                  key={i}
                  className="text-[0.95rem] leading-relaxed text-foreground/80"
                >
                  {parts.map((part, k) =>
                    part.startsWith("**") && part.endsWith("**") ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part.slice(2, -2)}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </p>
              )
            })}
          </div>

          {/* Images */}
          {project.images && project.images.length > 0 && (
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-4">
              {project.images.map((img, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={i}
                  src={img}
                  alt={`${project.title} ${i + 1}`}
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
