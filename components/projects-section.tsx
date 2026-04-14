"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"
import content from "@/content/content.json"

export function ProjectsSection() {
  const ref = useFadeIn()

  return (
    <section
      id="projects"
      className="py-28 md:py-36 px-6 md:px-12 lg:px-20"
      style={{ backgroundColor: "var(--card)" }}
    >
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="fade-up mb-16">
          <span
            className="text-xs uppercase tracking-[0.18em] font-medium"
            style={{ color: "var(--orange)" }}
          >
            Personal Work
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Projects
          </h2>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {content.projects.map((project, index) => (
            <div key={project.id} className={`fade-up delay-${index + 1}`}>
              <Link
                href={`/projects/${project.id}`}
                className="group flex flex-col h-full rounded-xl border border-border bg-background p-6 md:p-8 hover:border-orange/40 hover:shadow-sm transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-2">
                  <h3 className="text-lg font-semibold text-foreground group-hover:text-orange transition-colors duration-200" style={{ color: "inherit" }}>
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={18}
                    strokeWidth={1.5}
                    className="flex-shrink-0 text-muted-foreground group-hover:text-orange group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1"
                  />
                </div>

                <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                  {project.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
