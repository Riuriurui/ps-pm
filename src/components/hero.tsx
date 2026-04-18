import { siteConfig } from "@/content/config";

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-4xl text-center">
        <p className="hero-quote text-2xl md:text-3xl lg:text-4xl xl:text-5xl leading-relaxed md:leading-relaxed lg:leading-relaxed">
          Hi, I&apos;m a Berlin-based Product Manager combining user-centric discovery
          and AI-leveraged workflows to build products that solve real problems
          and drive positive change.
        </p>
        <div className="mt-12 flex items-center justify-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition-opacity"
          >
            View my work
          </a>
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-border hover:bg-muted transition-colors"
          >
            See projects
          </a>
        </div>
      </div>
    </section>
  );
}
