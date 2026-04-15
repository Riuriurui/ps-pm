"use client"

import { useEffect, useState } from "react"
import { ChevronDown } from "lucide-react"
import content from "@/content/content.json"

export function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-svh flex flex-col items-center justify-center px-6 md:px-12 lg:px-20">
      {/* Subtle background gradient accent */}
      <div
        className="absolute inset-0 pointer-events-none overflow-hidden"
        aria-hidden="true"
      >
        <div
          className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[40vh] rounded-full blur-3xl opacity-[0.04] dark:opacity-[0.06]"
          style={{ backgroundColor: "var(--purple)" }}
        />
      </div>

      <div
        className={`max-w-4xl mx-auto text-center transition-all duration-1000 ease-out ${
          visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        }`}
      >
        {/* The quote — EB Garamond */}
        <blockquote
          className="text-[clamp(1.6rem,4vw,3rem)] leading-[1.25] tracking-[-0.01em] text-foreground font-serif font-normal italic"
          style={{ fontFamily: "var(--font-garamond), Georgia, serif" }}
        >
          {content.hero.quote}
        </blockquote>

        {/* Accent line */}
        <div className="mt-10 flex items-center justify-center gap-3">
          <div
            className="h-px w-12"
            style={{ backgroundColor: "var(--purple)" }}
          />
          <div
            className="h-px w-12"
            style={{ backgroundColor: "var(--orange)" }}
          />
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#work"
        className={`absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-700 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        style={{ transitionDelay: "0.8s" }}
        aria-label="Scroll to work section"
      >
        <span className="text-xs tracking-widest uppercase">
          {content.hero.scrollLabel}
        </span>
        <ChevronDown
          size={16}
          strokeWidth={1.5}
          className="animate-bounce"
          style={{ animationDuration: "2s" }}
        />
      </a>
    </section>
  )
}
