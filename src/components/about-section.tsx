import { siteConfig } from "@/content/config";

export function AboutSection() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8">About Me</h2>
        
        <div className="prose prose-lg dark:prose-invert max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            {siteConfig.description}
          </p>
          
          <p className="text-muted-foreground leading-relaxed mt-4">
            With years of experience in product management across startups and enterprises,
            I specialize in building products that matter. My approach combines rigorous
            user research with modern AI tools to deliver solutions that truly resonate
            with users.
          </p>
          
          <p className="text-muted-foreground leading-relaxed mt-4">
            When I&apos;m not working on products, you can find me exploring Berlin&apos;s
            tech scene, experimenting with creative coding, or working on my own
            passion projects.
          </p>
        </div>
      </div>
    </section>
  );
}
