import { ExternalLink } from "lucide-react"
import content from "@/content/content.json"

export function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 lg:px-20 border-t border-border">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-muted-foreground">
          © {content.footer.year} {content.meta.name} · {content.footer.text}
        </p>

        <div className="flex items-center gap-5">
          <a
            href={content.meta.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            LinkedIn
            <ExternalLink size={11} strokeWidth={1.5} />
          </a>
          <a
            href={content.meta.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            GitHub
            <ExternalLink size={11} strokeWidth={1.5} />
          </a>
          <a
            href={`mailto:${content.meta.email}`}
            className="text-xs text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {content.meta.email}
          </a>
        </div>
      </div>
    </footer>
  )
}
