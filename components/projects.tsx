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
    <section id="projects" className="min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group border-border/50 flex flex-col"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-4 flex flex-col flex-1">
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-1">{project.title}</h3>
                <p className="text-sm text-muted-foreground mb-3 leading-snug line-clamp-2 flex-1">{project.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {project.tags.slice(0, 2).map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 2 && (
                    <span className="px-2 py-0.5 text-[10px] font-medium bg-primary/10 text-primary rounded-full">
                      +{project.tags.length - 2}
                    </span>
                  )}
                </div>
                <div className="flex gap-2 mt-auto">
                  <Button variant="default" size="sm" className="text-xs px-3 py-1.5 h-auto flex-1" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-3 w-3 mr-1.5" />
                      Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs px-3 py-1.5 h-auto flex-1" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-3 w-3 mr-1.5" />
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
