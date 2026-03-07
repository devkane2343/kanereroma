"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Briefcase, GraduationCap, Award, Calendar, MapPin, Sparkles } from "lucide-react"

const experiences = [
  {
    type: "work",
    title: "API Integration Developer",
    organization: "Simple.biz / Gridline Analytics USA",
    period: "November 2025 - Present",
    location: "Remote",
    description: "Created a comprehensive billing system for their fleet of trucks, automating invoice generation and financial management",
    highlights: ["Python API Integrations", "Gridline Billing System", "n8n Automation", "Next.JS FullStack Development"],
    icon: "/gridlinelogo.png",
    achievements: [
      "Automated invoice generation process",
      "Streamlined financial management workflows",
    ],
  },
  {
    type: "work",
    title: "IT Systems Developer",
    organization: "Regional Office VII, TESDA",
    period: "March 2023 - November 2025",
    location: "Cebu, Philippines",
    description: "Developed responsive web applications with focus on inventory management",
    highlights: ["TESDA VII - Website", "Document Manage System", "Trainor Application System", "Regional Dashboard"],
    icon: "/tesda.png",
    timeline: [
      { role: "Intern", period: "March 2023 - June 2023" },
      { role: "Full time Employee", period: "June 2023 - November 2025" },
    ],
    achievements: [
      "Built responsive web applications",
      "Improved inventory management systems",
    ],
  },
  {
    type: "education",
    title: "BS in Information Technology",
    organization: "St. Cecilia's College Inc.",
    period: "",
    location: "Cebu, Philippines",
    description: "Graduated with honors • Web technologies & software engineering",
    highlights: ["CSS NC II", "Web Development", "UI/UX", "E-Commerce"],
    achievements: [
      "Graduated with honors",
      "Specialized in web technologies",
    ],
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
    <section id="experience" className="min-h-screen flex items-center py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Sparkles className="h-6 w-6 text-primary" />
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground">
              Experience & Credentials
            </h2>
            <Sparkles className="h-6 w-6 text-primary" />
          </div>
          <p className="text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto">
            A journey of growth, innovation, and professional excellence
          </p>
          <div className="w-24 h-1.5 bg-gradient-to-r from-transparent via-primary to-transparent mx-auto mt-4 rounded-full" />
        </div>

        {/* Work Experience & Education */}
        <div className="grid lg:grid-cols-3 gap-6 mb-10">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group relative overflow-hidden p-6 hover:shadow-2xl transition-all duration-500 border-border/50 flex flex-col bg-card/50 backdrop-blur-sm hover:border-primary/30 hover:-translate-y-1"
            >
              {/* Gradient overlay on hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Header with Icon */}
                <div className="flex items-start gap-4 mb-4">
                  <div
                    className={`rounded-xl shrink-0 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                      exp.icon
                        ? "size-16 bg-white border-2 border-border/50 shadow-sm group-hover:shadow-md group-hover:border-primary/30"
                        : "size-16 p-3 bg-gradient-to-br from-primary/20 to-primary/10 text-primary border-2 border-primary/20 group-hover:border-primary/40"
                    }`}
                  >
                    {exp.icon ? (
                      <img
                        src={exp.icon}
                        alt={exp.organization}
                        className="h-12 w-12 object-contain mix-blend-multiply"
                      />
                    ) : exp.type === "work" ? (
                      <Briefcase className="h-7 w-7" />
                    ) : (
                      <GraduationCap className="h-7 w-7" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between gap-2 mb-1">
                      <h3 className="text-xl font-bold text-foreground leading-tight group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      {exp.type === "work" && (
                        <Badge variant="secondary" className="shrink-0 text-xs">
                          {exp.type}
                        </Badge>
                      )}
                    </div>
                    <p className="text-sm font-semibold text-primary mb-2 flex items-center gap-1.5">
                      <MapPin className="h-3.5 w-3.5" />
                      {exp.organization}
                    </p>
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      {exp.period && (
                        <>
                          <Calendar className="h-3.5 w-3.5" />
                          <span>{exp.period}</span>
                        </>
                      )}
                      {exp.location && (
                        <>
                          {exp.period && <span>•</span>}
                          <span>{exp.location}</span>
                        </>
                      )}
                    </div>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-foreground/80 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                {exp.achievements && (
                  <div className="mb-4 space-y-2">
                    {exp.achievements.map((achievement, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0 mt-1.5" />
                        <p className="text-xs text-foreground/70 leading-relaxed">{achievement}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Timeline */}
                {exp.timeline && (
                  <div className="mb-4 pl-3 border-l-2 border-primary/30 space-y-3">
                    {exp.timeline.map((item, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[11px] top-1.5 h-2.5 w-2.5 rounded-full bg-primary border-2 border-background" />
                        <div className="pl-4">
                          <span className="text-xs font-semibold text-foreground block mb-0.5">{item.role}</span>
                          <p className="text-xs text-muted-foreground">{item.period}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Skills/Tech Stack */}
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-border/50">
                  {exp.highlights.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="outline"
                      className="text-xs font-medium bg-primary/5 text-primary border-primary/20 hover:bg-primary/10 hover:border-primary/30 transition-colors"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Certifications Section */}
        <Card className="p-8 border-border/50 bg-gradient-to-br from-card/80 to-card/50 backdrop-blur-sm hover:shadow-xl transition-all duration-300">
          <div className="flex items-center gap-4 mb-6">
            <div className="p-3 rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 text-primary border-2 border-primary/20">
              <Award className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground">Professional Certifications</h3>
              <p className="text-sm text-muted-foreground mt-1">Validated expertise and qualifications</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group flex items-start gap-3 p-4 rounded-lg bg-muted/30 hover:bg-muted/50 border border-border/50 hover:border-primary/30 transition-all duration-300 cursor-default"
              >
                <div className="h-2 w-2 rounded-full bg-primary shrink-0 mt-2 group-hover:scale-125 transition-transform" />
                <span className="text-sm font-medium text-foreground/90 leading-relaxed">{cert}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </section>
  )
}
