import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "Document Management System",
    description:
      "A web-based platform that automates document tracking and numbering, streamlining communication and improving efficiency in administrative processes.",
    image: "/tesdaviidms.png",
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Application System",
    description:
      "A web-based platform that allows trainers to apply for NTTC online, with real-time tracking, monitoring, and automated certificate generation to simplify the application process.",
    image: "/onaf.png",
    tags: ["Vanilla JS", "Firebase/JSON", "Tailwind", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TESDA VII - Website",
    description:
      "A responsive web platform that provides clients with information about TESDA’s programs and services, allowing them to browse updates, access resources, and send inquiries online.",
    image: "/tesdaviiwebsite.png",
    tags: ["Nextjs", "Typescript", "React", "Firebase"],
    liveUrl: "https://tesda-region-vii.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Regional Dashboard",
    description: "A centralized web dashboard that allows TESDA executives to view, analyze, and monitor real-time regional data for improved decision-making and performance tracking.",
    image: "/tesdaviimis.png",
    tags: ["Vanilla JS", "HTML/CSS", "JSON", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in-up">Featured Projects</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-2 animate-fade-in-up group border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button variant="default" size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
