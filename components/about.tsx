import { Card } from "@/components/ui/card"
import { Code2, Sparkles, Zap, Rocket } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Full Stack",
    description: "React, Next.js, TypeScript, Node.js",
  },
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Leveraging AI for efficient development",
  },
  {
    icon: Zap,
    title: "Proven Experience",
    description: "3+ years in production systems",
  },
  {
    icon: Rocket,
    title: "Results-Driven",
    description: "Delivering impactful solutions",
  },
] as const

export function About() {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center py-8 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8 animate-fade-in-up">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div className="animate-fade-in-up">
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center max-w-xs mx-auto overflow-hidden transition-transform duration-500 hover:scale-[1.02]">
              <img
                src="/ProfP.png"
                alt="Profile"
                className="rounded-xl w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="space-y-5">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed animate-about-para">
              I&apos;m a <strong>full stack developer</strong> who bridges design and engineering—building web applications
              that are both robust and delightful to use. I thrive on turning complex requirements into intuitive, 
              scalable solutions that make a real impact.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed animate-about-para-delayed">
              With over three years of experience delivering production systems for government institutions and 
              private organizations, I combine <strong>modern tech stacks</strong> with <strong>AI-assisted workflows</strong> to 
              ship faster without compromising quality. My focus: clean architecture, thoughtful UX, and code that 
              stands the test of time.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <Card
                key={`${skill.title}-${index}`}
                className="about-skill-card group p-4 border-border/50 text-center cursor-default
                  transition-all duration-500 ease-out
                  hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5
                  hover:border-primary/30 hover:bg-card/80
                  [&:hover_svg]:scale-110 [&:hover_svg]:transition-transform [&:hover_svg]:duration-300"
              >
                <div className="rounded-lg bg-primary/5 p-3 w-fit mx-auto mb-3 transition-colors duration-300 group-hover:bg-primary/10">
                  <IconComponent className="h-8 w-8 text-primary" />
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-1.5">{skill.title}</h3>
                <p className="text-xs text-muted-foreground">{skill.description}</p>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
