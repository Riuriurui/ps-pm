import { Hero } from "@/components/hero"
import { WorkSection } from "@/components/work-section"
import { ProjectsSection } from "@/components/projects-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Hero />
      <WorkSection />
      <ProjectsSection />
      <Footer />
    </>
  )
}
