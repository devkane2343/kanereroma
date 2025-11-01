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
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">About Me</h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center mb-8">
          <div>
            <div className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center max-w-xs mx-auto">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="rounded-xl w-full h-full object-cover"
                width={300}
                height={300}
              />
            </div>
          </div>

          <div className="space-y-4">
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              I&apos;m a <strong>full stack developer</strong> with proven experience building and deploying production web applications. 
              Rather than memorizing syntax, I leverage <strong>AI-powered tools</strong> to work efficiently and stay current with 
              modern development practices.
            </p>
            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              With 3+ years of hands-on experience, I&apos;ve designed and developed systems for government institutions and 
              organizations. I focus on creating clean, functional solutions that solve real-world problems.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {skills.map((skill, index) => {
            const IconComponent = skill.icon
            return (
              <Card
                key={`${skill.title}-${index}`}
                className="p-4 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 text-center"
              >
                <IconComponent className="h-8 w-8 text-primary mb-3 mx-auto" />
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
