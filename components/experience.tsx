import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "I.T. Systems Developer (AI) / NTTC Staff",
    organization: "Tech Solutions Inc.",
    period: "2023 - Present",
    description:
      "Developed various Web Applications for TESDA Regional Office VII",
    skills: ["TESDA VII - DMS", "TESDA VII - Online NTTC Application System", "TESDA VII - Website", "TESDA VII - Regional Dashboard"],
  },
  {
    type: "work",
    title: "IT Support Staff",
    organization: "Provincial Training Center - Minglanilla",
    period: "March 2023",
    description:
      "Developed responsive websites and web applications for various clients, focusing on Inventory",
    skills: ["Vanilla JS", "HTML", "SCSS", "Webpack"],
  },
  {
    type: "education",
    title: "Bachelor of Science in Information Technology",
    organization: "St. Cecilia's College Inc.",
    period: "2019-2023",
    description:
      "Graduated with honors. Focused on web technologies, software engineering, and human-computer interaction.",
    skills: ["CSS NC II ", "Web Development", "UI/UX, ", "E-Commerce Capstone",],
  },
]

const certifications = [
  "National TVET Trainer's Certificate",
  "Javascript Essentials 1",
  "Computer Systems Servicing NC II",
  "Trainer's Methodology I",
]

export function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in-up">
          Experience & Credentials
        </h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="space-y-6 mb-12">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-lg transition-all duration-300 animate-fade-in-up border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/10 text-primary">
                  {exp.type === "work" ? <Briefcase className="h-6 w-6" /> : <GraduationCap className="h-6 w-6" />}
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-semibold text-foreground">{exp.title}</h3>
                    <span className="text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-primary font-medium mb-3">{exp.organization}</p>
                  <p className="text-foreground/70 mb-4 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-6 animate-fade-in-up border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-3 rounded-lg bg-primary/10 text-primary">
              <Award className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-semibold text-foreground">Certifications</h3>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {certifications.map((cert, index) => (
              <li key={index} className="flex items-center gap-2 text-foreground/80">
                <div className="h-2 w-2 rounded-full bg-primary" />
                {cert}
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
