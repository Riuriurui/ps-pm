import { Card, CardContent } from "@/components/ui/card";
import { getWorkEntries } from "@/lib/content";
import { MapPin, Calendar } from "lucide-react";
import Link from "next/link";

export function WorkSection() {
  const entries = getWorkEntries();

  return (
    <section id="work" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12">Work Experience</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {entries.map((entry) => (
            <Link key={entry.slug} href={`/work/${entry.slug}`}>
              <Card className="h-full hover:shadow-lg hover:border-accent/50 transition-all duration-300 cursor-pointer group">
                <CardContent className="p-6">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {entry.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs rounded-full bg-secondary/10 text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <h3 className="text-xl font-semibold mb-1 group-hover:text-accent transition-colors">
                    {entry.title}
                  </h3>
                  <p className="text-muted-foreground font-medium mb-3">
                    {entry.company}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {entry.period}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {entry.location}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
