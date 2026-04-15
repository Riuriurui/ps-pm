"use client"

import { useState } from "react"
import Link from "next/link"
import { DarkModeToggle } from "./dark-mode-toggle"
import { Menu, X } from "lucide-react"
import content from "@/content/content.json"

export function Nav() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-12 py-5">
      <Link
        href="/"
        className="text-sm font-medium tracking-wide text-foreground hover:text-purple transition-colors duration-200"
        style={{ color: "var(--foreground)" }}
      >
        ✶✶ — Homepage.com
      </Link>

      {/* Desktop Nav */}
      <div className="hidden md:flex items-center gap-6">
        <nav className="flex items-center gap-6">
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
            href="https://linkedin.com/in/philipp"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${content.meta.email}`}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            Email
          </a>
        </nav>
        <DarkModeToggle />
      </div>

      {/* Mobile: Burger + Darkmode */}
      <div className="flex md:hidden items-center gap-3">
        <DarkModeToggle />
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-1 text-muted-foreground hover:text-foreground transition-colors"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-background border-t border-border md:hidden">
          <nav className="flex flex-col px-6 py-4 gap-4">
            <a
              href="#work"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Work
            </a>
            <a
              href="#projects"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </a>
            <a
              href="https://linkedin.com/in/philipp"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              LinkedIn
            </a>
            <a
              href={`mailto:${content.meta.email}`}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Email
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
