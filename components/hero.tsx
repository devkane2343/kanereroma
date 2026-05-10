"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, ArrowUpRight } from "lucide-react"
import { ThreeScene } from "./three-scene"

const techStack = [
  { src: "https://cdn.simpleicons.org/nextdotjs/FFFFFF", alt: "Next.js" },
  { src: "https://cdn.simpleicons.org/typescript/3178C6", alt: "TypeScript" },
  { src: "https://cdn.simpleicons.org/react/61DAFB", alt: "React" },
  { src: "https://cdn.simpleicons.org/nodedotjs/5FA04E", alt: "Node.js" },
  { src: "https://cdn.simpleicons.org/python/3776AB", alt: "Python" },
  { src: "https://cdn.simpleicons.org/supabase/3ECF8E", alt: "Supabase" },
  { src: "https://cdn.simpleicons.org/n8n/EA4B71", alt: "n8n" },
  { src: "https://cdn.simpleicons.org/tailwindcss/06B6D4", alt: "Tailwind CSS" },
  { src: "https://cdn.simpleicons.org/vercel/FFFFFF", alt: "Vercel" },
  { src: "https://cdn.simpleicons.org/cloudflare/F38020", alt: "Cloudflare" },
]

export function Hero() {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 overflow-hidden"
    >
      <div className="absolute inset-0 -z-10 opacity-40 motion-reduce:hidden">
        <ThreeScene />
      </div>
      <div className="absolute inset-0 -z-10 bg-grid opacity-[0.15]" />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/0 via-background/60 to-background" />

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="flex flex-col items-center text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border bg-card/40 backdrop-blur-sm mb-8">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full rounded-full bg-primary opacity-75 animate-ping" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary" />
            </span>
            <span className="font-mono text-[11px] tracking-wide text-muted-foreground">
              available for new projects
            </span>
          </div>

          <p className="eyebrow mb-4">// full-stack developer · systems architect</p>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-semibold tracking-tight text-foreground mb-6 text-balance">
            Jan Kane T. <span className="bg-gradient-to-r from-foreground via-foreground to-primary bg-clip-text text-transparent">Reroma</span>
          </h1>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mb-4 leading-relaxed text-balance">
            I design and deploy <span className="text-foreground">production-grade systems</span> that streamline operations through advanced API integrations, automated workflows, and intelligent data pipelines.
          </p>

          <p className="text-sm sm:text-base text-muted-foreground/80 max-w-2xl mb-10 leading-relaxed">
            Currently building automation infrastructure at{" "}
            <span className="font-mono text-foreground/90">Powerhouse Ventures</span> (Sydney) and{" "}
            <span className="font-mono text-foreground/90">Simple.biz / Gridline Analytics</span> (New York).
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-16">
            <Button size="lg" onClick={scrollToProjects} className="group min-w-[180px]">
              View my work
              <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="group min-w-[180px]"
            >
              Get in touch
              <ArrowUpRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>
          </div>

          <div className="w-full max-w-3xl">
            <p className="eyebrow mb-4">// stack</p>
            <div className="flex flex-wrap items-center justify-center gap-x-7 gap-y-4 opacity-70 hover:opacity-100 transition-opacity">
              {techStack.map((t) => (
                <img
                  key={t.alt}
                  src={t.src}
                  alt={t.alt}
                  title={t.alt}
                  className="h-6 w-auto grayscale hover:grayscale-0 transition-all"
                  loading="lazy"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
