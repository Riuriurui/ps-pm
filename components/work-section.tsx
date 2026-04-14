"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { useFadeIn } from "@/hooks/use-fade-in"
import content from "@/content/content.json"

export function WorkSection() {
  const ref = useFadeIn()

  return (
    <section id="work" className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-5xl mx-auto" ref={ref}>
        {/* Section header */}
        <div className="fade-up mb-16">
          <span
            className="text-xs uppercase tracking-[0.18em] font-medium"
            style={{ color: "var(--purple)" }}
          >
            Experience
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-semibold tracking-tight text-foreground">
            Work
          </h2>
        </div>

        {/* Work cards */}
        <div className="space-y-4">
          {content.work.map((job, index) => (
            <div key={job.id} className={`fade-up delay-${index + 1}`}>
              <Link
                href={`/work/${job.id}`}
                className="group block rounded-xl border border-border bg-card p-6 md:p-8 hover:border-purple/40 hover:shadow-sm transition-all duration-300"
                style={
                  {
                    "--hover-border": "rgba(113, 50, 202, 0.3)",
                  } as React.CSSProperties
                }
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground group-hover:text-purple transition-colors duration-200" style={{ color: "inherit" }}>
                          {job.role}
                        </h3>
                        <p
                          className="mt-0.5 text-sm font-medium"
                          style={{ color: "var(--purple)" }}
                        >
                          {job.company}
                        </p>
                      </div>
                      <ArrowUpRight
                        size={18}
                        strokeWidth={1.5}
                        className="flex-shrink-0 text-muted-foreground group-hover:text-purple group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200 mt-1"
                      />
                    </div>

                    <p className="mt-3 text-sm text-muted-foreground leading-relaxed">
                      {job.summary}
                    </p>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-3">
                  <span className="text-xs text-muted-foreground tabular-nums">
                    {job.period}
                  </span>
                  <span className="text-muted-foreground/40 text-xs">·</span>
                  <div className="flex flex-wrap gap-1.5">
                    {job.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-secondary text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
