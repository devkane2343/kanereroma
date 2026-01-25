import { Card } from "@/components/ui/card"
import { Briefcase, GraduationCap, Award } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "API Integration Developer",
    organization: "Gridline Analytics USA",
    period: "2023 - Present",
    description: "Created a comprehensive billing system for their fleet of trucks, automating invoice generation and financial management",
    highlights: ["n8n", "Gridline API", "Duda", "Automation"],
    icon: "/gridlinelogo.png",
  },
  {
    type: "work",
    title: "IT Systems Developer",
    organization: "Regional Office VII, TESDA",
    period: "March 2023",
    description: "Developed responsive web applications with focus on inventory management",
    highlights: ["Next.JS, Vanilla JS", "HTML", "SCSS", "Webpack"],
    icon: "/tesda.png",
    timeline: [
      { role: "Intern", period: "Jan 2023 - Feb 2023" },
      { role: "IT Support Staff", period: "March 2023" },
    ],
  },
  {
    type: "education",
    title: "BS in Information Technology",
    organization: "St. Cecilia's College Inc.",
    period: "2019-2023",
    description: "Graduated with honors • Web technologies & software engineering",
    highlights: ["CSS NC II", "Web Development", "UI/UX", "E-Commerce"],
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
    <section id="experience" className="min-h-screen flex items-center py-12 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
            Experience & Credentials
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-4 mb-6">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="p-4 hover:shadow-lg transition-all duration-300 border-border/50 flex flex-col"
            >
              <div className="flex items-start gap-3 mb-3">
                <div
                  className={`rounded-lg shrink-0 flex items-center justify-center overflow-visible ${
                    exp.icon
                      ? "size-12 bg-white border border-border/50"
                      : "p-2 bg-primary/10 text-primary"
                  }`}
                >
                  {exp.icon ? (
                    <img
                      src={exp.icon}
                      alt={exp.organization}
                      className="h-10 w-10 object-contain mix-blend-multiply"
                    />
                  ) : exp.type === "work" ? (
                    <Briefcase className="h-5 w-5" />
                  ) : (
                    <GraduationCap className="h-5 w-5" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-semibold text-foreground leading-tight mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-sm text-primary font-medium mb-1">
                    {exp.organization}
                  </p>
                  <p className="text-xs text-muted-foreground mb-2">{exp.period}</p>
                </div>
              </div>
              <p className="text-sm text-foreground/70 mb-3 leading-snug">
                {exp.description}
              </p>
              {exp.timeline && (
                <div className="mb-3 pl-1 border-l-2 border-primary/20">
                  {exp.timeline.map((item, idx) => (
                    <div key={idx} className="mb-2 last:mb-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 -ml-[5px]" />
                        <span className="text-xs font-medium text-foreground">{item.role}</span>
                      </div>
                      <p className="text-xs text-muted-foreground ml-3">{item.period}</p>
                    </div>
                  ))}
                </div>
              )}
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {exp.highlights.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-2 py-0.5 text-xs font-medium bg-primary/10 text-primary rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <Card className="p-5 border-border/50">
          <div className="flex items-center gap-3 mb-4">
            <div className="p-2 rounded-lg bg-primary/10 text-primary">
              <Award className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-semibold text-foreground">Certifications</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm text-foreground/80"
              >
                <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
