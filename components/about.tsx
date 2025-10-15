import { Card } from "@/components/ui/card"
import { Code2, Palette, Zap, Users } from "lucide-react"

const skills = [
  {
    icon: Code2,
    title: "Front-End Development",
    description: "React, Next.js, TypeScript, Tailwind CSS",
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Figma, Adobe XD, Responsive Design",
  },
  {
    icon: Zap,
    title: "Performance",
    description: "Web Vitals, Optimization, Accessibility",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "Git, Agile, Team Communication",
  },
]

export function About() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in-up">About Me</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="animate-fade-in-up">
            <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
              <img src="/profile.jpg" alt="Profile" className="rounded-2xl w-full h-full object-cover" />
            </div>
          </div>

          <div className="space-y-4 animate-fade-in-up">
            <p className="text-lg text-foreground/80 leading-relaxed">
              Hi! I'm a passionate full-stack web developer with 3 years of hands-on experience in designing, developing, and 
              improving web systems - particularly for government institutions. I specialize in building responsive, user-friendly, 
              and efficient web applications that make processes simpler and more accessible.
            </p>
            <p className="text-lg text-foreground/80 leading-relaxed">
              With a strong foundation in both front-end and back-end development, I enjoy turning complex ideas into clean, 
              functional solutions. I’m constantly exploring new technologies, refining my skills, and finding smarter ways 
              to build impactful digital experiences.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <skill.icon className="h-10 w-10 text-primary mb-4" />
              <h3 className="text-lg font-semibold text-foreground mb-2">{skill.title}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
