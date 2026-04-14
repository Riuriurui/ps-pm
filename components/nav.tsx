"use client"

import Link from "next/link"
import { DarkModeToggle } from "./dark-mode-toggle"
import content from "@/content/content.json"

export function Nav() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      <Link
        href="/"
        className="text-sm font-medium tracking-wide text-foreground hover:text-purple transition-colors duration-200"
        style={{ color: "var(--foreground)" }}
      >
        {content.meta.name}
        <span className="ml-1.5 text-muted-foreground font-normal">
          — {content.meta.role}
        </span>
      </Link>

      <div className="flex items-center gap-4">
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#work"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Work
          </a>
          <a
            href="#projects"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Projects
          </a>
          <a
            href={`mailto:${content.meta.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Contact
          </a>
        </nav>
        <DarkModeToggle />
      </div>
    </header>
  )
}
