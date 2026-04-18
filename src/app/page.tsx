import { Hero } from "@/components/hero";
import { WorkSection } from "@/components/work-section";
import { ProjectsSection } from "@/components/projects-section";
import { AboutSection } from "@/components/about-section";

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ProjectsSection />
      <AboutSection />
    </>
  );
}
