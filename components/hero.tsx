"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Code2, Sparkles } from "lucide-react"
import { ThreeScene } from "./three-scene"

export function Hero() {
  const scrollToProjects = () => {
    const element = document.getElementById("projects")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <ThreeScene />

      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/80 to-background -z-5" />

      <div className="container mx-auto text-center animate-fade-in-up relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6 animate-fade-in-up">
          <Sparkles className="h-4 w-4 text-primary" />
          <span className="text-sm font-medium text-primary">Available for new opportunities</span>
        </div>

        <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-foreground mb-6 text-balance">
          Jan Kane T. Reroma
        </h1>

        <div className="flex items-center justify-center gap-3 mb-8">
          <Code2 className="h-6 w-6 text-primary" />
          <p className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground text-balance">
            Front-End Developer | Systems Developer
          </p>
        </div>

        <p className="text-lg sm:text-xl text-foreground/70 max-w-2xl mx-auto mb-12 leading-relaxed">
          Crafting immersive digital experiences with cutting-edge technologies and pixel-perfect precision
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" onClick={scrollToProjects} className="group min-w-[180px]">
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="min-w-[180px]"
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </section>
  )
}
