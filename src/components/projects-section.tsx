import { Card, CardContent } from "@/components/ui/card";
import { getProjectEntries } from "@/lib/content";
import { Calendar } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  const entries = getProjectEntries();

  return (
    <section id="projects" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {entries.map((entry) => (
            <Link key={entry.slug} href={`/projects/${entry.slug}`}>
              <Card className="h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300 cursor-pointer group overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-accent/10 text-accent"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-2xl font-semibold mb-2 group-hover:text-accent transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {entry.description}
                  </p>
                  
                  <span className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    {entry.period}
                  </span>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
