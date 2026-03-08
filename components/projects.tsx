"use client"

import { useRef, useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react"

type Project = {
  title: string
  description: string
  image: string
  gallery?: string[]
  tags: string[]
  liveUrl: string
  githubUrl: string
}

const projects: Project[] = [
  {
    title: "Financial Tracker",
    description:
      "A financial tracker app that provides insights into your financial status, helping you plan and manage your money. Planning to integrate an LLM to assist users with personalized financial advice and recommendations.",
    image: "/1.png",
    gallery: ["/1.png", "/2.png", "/3.png"],
    tags: ["Next.js", "TypeScript", "Tailwind", "LLM (planned)"],
    liveUrl: "https://ktr-financial-tracker.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Document Management System",
    description:
      "A web-based platform that automates document tracking and numbering, streamlining communication and improving efficiency in administrative processes.",
    image: "/tesdaviidms.png",
    gallery: ["/tesdaviidms.png", "/cms-dashboard-interface.jpg", "/task-management-dashboard.png"],
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Application System",
    description:
      "A web-based platform that allows trainers to apply for NTTC online, with real-time tracking, monitoring, and automated certificate generation to simplify the application process.",
    image: "/onaf.png",
    gallery: ["/onaf.png"],
    tags: ["Vanilla JS", "Firebase/JSON", "Tailwind", "HTML"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TESDA VII - Website",
    description:
      "A responsive web platform that provides clients with information about TESDA’s programs and services, allowing them to browse updates, access resources, and send inquiries online.",
    image: "/tesdaviiwebsite.png",
    gallery: ["/tesdaviiwebsite.png", "/tesdaviidms.png"],
    tags: ["Nextjs", "Typescript", "React", "Firebase"],
    liveUrl: "https://tesda-region-vii.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Regional Dashboard",
    description: "A centralized web dashboard that allows TESDA executives to view, analyze, and monitor real-time regional data for improved decision-making and performance tracking.",
    image: "/tesdaviimis.png",
    gallery: ["/tesdaviimis.png", "/cms-dashboard-interface.jpg"],
    tags: ["Vanilla JS", "HTML/CSS", "JSON", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "n8n Duda Automation Workflow",
    description: "An automated workflow that streamlines content publishing to Duda by automatically uploading images, managing content, and optimizing SEO metadata for improved search visibility.",
    image: "/n8ntoduda.png",
    gallery: ["/n8ntoduda.png"],
    tags: ["n8n", "Automation", "Duda", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Gridline Billing System",
    description: "An automated billing workflow that integrates n8n, Duda, and Gridline to streamline invoice creation, company tracking, and billing updates for efficient financial management.",
    image: "/gridline-billing-dashboard.png",
    gallery: ["/gridline-billing-dashboard.png", "/gridline.png", "/gridlinelogo.png"],
    tags: ["n8n", "Gridline", "Duda", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

export function Projects() {
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)

  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft + (direction === "left" ? -scrollAmount : scrollAmount)
      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      })
    }
  }

  const scrollToIndex = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth = 320 + 24 // card width + gap
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const scrollLeft = scrollContainerRef.current.scrollLeft
        const cardWidth = 320 + 24 // card width + gap
        const index = Math.round(scrollLeft / cardWidth)
        setCurrentIndex(index)
      }
    }

    const scrollContainer = scrollContainerRef.current
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll)
      return () => scrollContainer.removeEventListener("scroll", handleScroll)
    }
  }, [])

  useEffect(() => {
    setGalleryIndex(0)
  }, [selectedProject])

  return (
    <section id="projects" className="min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2 animate-fade-in-up">Featured Projects</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="relative">
          <button
            onClick={() => scroll("left")}
            className="absolute -left-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-200 flex items-center justify-center group shadow-lg hidden lg:flex"
            aria-label="Previous project"
          >
            <ChevronLeft className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </button>

          <div
            ref={scrollContainerRef}
            className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide scroll-smooth"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
          >
            {projects.map((project, index) => (
              <Card
                key={index}
                className="overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 animate-fade-in-up group border-border/50 flex flex-col min-w-[280px] sm:min-w-[320px] cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => setSelectedProject(project)}
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
                  <p className="text-sm text-muted-foreground mb-3 leading-snug line-clamp-2 flex-1">
                    {project.description}
                  </p>
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
                  <div className="flex gap-2 mt-auto" onClick={(e) => e.stopPropagation()}>
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

          <button
            onClick={() => scroll("right")}
            className="absolute -right-16 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full bg-background/80 backdrop-blur-sm border-2 border-primary/20 hover:border-primary hover:bg-primary/10 transition-all duration-200 flex items-center justify-center group shadow-lg hidden lg:flex"
            aria-label="Next project"
          >
            <ChevronRight className="h-6 w-6 text-primary group-hover:scale-110 transition-transform" />
          </button>
        </div>

        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                currentIndex === index
                  ? "w-8 h-2 bg-primary"
                  : "w-2 h-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
              }`}
              aria-label={`Go to project ${index + 1}`}
            />
          ))}
        </div>

        <Dialog open={!!selectedProject} onOpenChange={(open) => !open && setSelectedProject(null)}>
          <DialogContent className="max-w-5xl p-0 gap-0 overflow-hidden max-h-[90vh] flex flex-col">
            {selectedProject && (() => {
              const galleryImages = selectedProject.gallery?.length
                ? selectedProject.gallery
                : [selectedProject.image]
              const currentImage = galleryImages[galleryIndex] || selectedProject.image
              return (
                <>
                  <div className="flex-1 min-h-0 flex flex-col">
                    <div className="relative aspect-video w-full overflow-hidden bg-muted flex-shrink-0">
                      <img
                        src={currentImage || "/placeholder.svg"}
                        alt={`${selectedProject.title} - Screenshot ${galleryIndex + 1}`}
                        className="w-full h-full object-contain"
                      />
                      {galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setGalleryIndex((i) => (i - 1 + galleryImages.length) % galleryImages.length)
                            }}
                            className="absolute left-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="h-5 w-5" />
                          </button>
                          <button
                            onClick={(e) => {
                              e.stopPropagation()
                              setGalleryIndex((i) => (i + 1) % galleryImages.length)
                            }}
                            className="absolute right-2 top-1/2 -translate-y-1/2 h-10 w-10 rounded-full bg-background/80 backdrop-blur-sm border border-border hover:bg-background transition-colors flex items-center justify-center"
                            aria-label="Next image"
                          >
                            <ChevronRight className="h-5 w-5" />
                          </button>
                        </>
                      )}
                    </div>
                    {galleryImages.length > 1 && (
                      <div className="flex gap-2 p-3 overflow-x-auto border-b bg-muted/30">
                        {galleryImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setGalleryIndex(idx)}
                            className={`flex-shrink-0 w-16 h-12 rounded-md overflow-hidden border-2 transition-all ${
                              galleryIndex === idx
                                ? "border-primary ring-2 ring-primary/20"
                                : "border-transparent opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={img || "/placeholder.svg"}
                              alt=""
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="p-6 space-y-4 flex-shrink-0 overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-xl">{selectedProject.title}</DialogTitle>
                      <DialogDescription className="text-base">
                        {selectedProject.description}
                      </DialogDescription>
                    </DialogHeader>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <DialogFooter className="flex-row sm:flex-row gap-2">
                      <Button asChild>
                        <a
                          href={selectedProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          View Demo
                        </a>
                      </Button>
                      <Button variant="outline" asChild>
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2"
                        >
                          <Github className="h-4 w-4" />
                          View Code
                        </a>
                      </Button>
                    </DialogFooter>
                  </div>
                </>
              )
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}
