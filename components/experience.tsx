import { Award, GraduationCap, MapPin, Calendar } from "lucide-react"

type Experience = {
  role: string
  company: string
  location: string
  period: string
  status?: "current" | "completed"
  summary: string
  bullets: string[]
  tags: string[]
  icon?: string
  iconClassName?: string
}

const experiences: Experience[] = [
  {
    role: "Automation Workflow Specialist",
    company: "Powerhouse Ventures Ltd.",
    location: "Sydney, Australia",
    period: "April 2026 — Present",
    status: "current",
    summary:
      "Maintain and optimize automation-driven systems for an investment and bidding operations company. Currently leading the development of a custom CRM tailored for investment and bidding management.",
    bullets: [
      "Built and maintained n8n automation workflows for bid tracking, notifications, and operational processes.",
      "Managed integrations across Attio, Softr, and internal systems to improve workflow efficiency and data accuracy.",
      "Developed internal dashboards and workflow tools for bidding and investment operations management.",
      "Architecting a custom CRM platform for investment tracking, bidder management, and workflow automation.",
      "Leveraging AI-assisted development (Claude) to accelerate delivery and rapid prototyping.",
    ],
    tags: ["n8n", "Attio", "Softr", "Custom CRM", "Document Automation"],
    icon: "/powerhouse-logo.png",
    iconClassName: "bg-[#0a2f5e] p-1",
  },
  {
    role: "AI/API Automation Specialist (Full-Stack Developer)",
    company: "Simple.biz · client: Gridline Analytics",
    location: "New York, USA",
    period: "November 2025 — Present",
    status: "current",
    summary:
      "Employed by Simple.biz (a web design & automation agency) and embedded with their client Gridline Analytics. Architect and develop scalable web solutions and AI-driven automation systems for both — including an end-to-end Billing System for a Truck Fleet Company that replaced a manual, error-prone process with a streamlined digital workflow.",
    bullets: [
      "Advanced API integrations with Python — building reliable data pipelines that automate workflows and ensure data accuracy.",
      "Designed and built a Custom HRIS handling payroll, attendance, orphanage budget, gift tracker, and employee profiles.",
      "Implemented intelligent automation workflows in n8n for content generation, data processing, and system operations.",
      "Designed scalable infrastructure and technical frameworks supporting agency operations and client project delivery.",
      "Leading HIPAA-compliant migration of existing Zapier workflows — auditing each for data-handling risk before transition.",
      "Built a custom automation that scores all Zapier workflows by complexity, compliance risk, and migration priority before rebuilding them in self-hosted n8n.",
    ],
    tags: ["Next.js", "Python", "n8n", "HIPAA", "Custom HRIS", "Billing System"],
    icon: "/gridlinelogo.png",
  },
  {
    role: "I.T. Systems Developer",
    company: "TESDA Regional Operations Division",
    location: "Cebu, Philippines",
    period: "March 2023 — November 2025",
    status: "completed",
    summary:
      "Led full-stack development of large-scale internal systems — eliminating reliance on external contractors and delivering significant cost and time savings.",
    bullets: [
      "Performance Analytics Dashboard — real-time metrics and role-based access for organizational performance tracking.",
      "Document Management System — cloud-based approvals, digital signatures, and full audit logging.",
      "Online Application & Tracking System — workflow automation with live status notifications for applicants and staff.",
      "Official Organization Website — public-facing site with SEO optimization and dynamic content management.",
    ],
    tags: ["Next.js", "React", "Node.js", "Supabase"],
    icon: "/tesda.png",
  },
]

const certifications = [
  "National TVET Trainer's Certificate",
  "JavaScript Essentials 1",
  "Computer Systems Servicing NC II",
  "Trainer's Methodology I",
]

export function Experience() {
  return (
    <section id="experience" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14">
          <p className="eyebrow mb-3">// 04 · experience</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Career timeline.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
            Three years across government, fintech automation, and investment-ops — shipping
            production systems end-to-end.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="absolute left-0 sm:left-3 top-2 bottom-2 w-px bg-border" />
          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-8 sm:pl-12">
                <div className="absolute left-0 sm:left-3 top-2 -translate-x-1/2 h-2 w-2 rounded-full bg-primary ring-4 ring-background" />

                <div className="mb-3 flex flex-wrap items-center gap-x-3 gap-y-1">
                  <span className="font-mono text-xs text-muted-foreground inline-flex items-center gap-1.5">
                    <Calendar className="h-3 w-3" />
                    {exp.period}
                  </span>
                  {exp.status === "current" && (
                    <span className="inline-flex items-center gap-1.5 font-mono text-[10px] text-primary px-1.5 py-0.5 rounded border border-primary/30 bg-primary/5">
                      <span className="h-1 w-1 rounded-full bg-primary animate-pulse" />
                      current
                    </span>
                  )}
                </div>

                <div className="flex items-start gap-4 mb-2">
                  {exp.icon && (
                    <div
                      className={`hidden sm:flex shrink-0 h-12 w-12 rounded-md border border-border items-center justify-center overflow-hidden ${
                        exp.iconClassName ?? "bg-white"
                      }`}
                    >
                      <img
                        src={exp.icon}
                        alt={exp.company}
                        className="h-full w-full object-contain"
                      />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl sm:text-2xl font-semibold text-foreground tracking-tight leading-tight">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-foreground/80 mt-1 inline-flex items-center gap-1.5 flex-wrap">
                      <span className="font-medium">{exp.company}</span>
                      <span className="text-muted-foreground">·</span>
                      <span className="text-muted-foreground inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" />
                        {exp.location}
                      </span>
                    </p>
                  </div>
                </div>

                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed mb-4">
                  {exp.summary}
                </p>

                <ul className="space-y-2 mb-5">
                  {exp.bullets.map((b, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm text-foreground/80 leading-relaxed">
                      <span className="font-mono text-xs text-primary/70 mt-1 shrink-0">→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {exp.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}

            {/* Education */}
            <div className="relative pl-8 sm:pl-12">
              <div className="absolute left-0 sm:left-3 top-2 -translate-x-1/2 h-2 w-2 rounded-full bg-muted-foreground/40 ring-4 ring-background" />
              <div className="flex items-start gap-3">
                <GraduationCap className="h-5 w-5 text-muted-foreground mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-lg font-semibold text-foreground">Bachelor of Science in Information Technology</h3>
                  <p className="text-sm text-muted-foreground mt-1">St. Cecilia&apos;s College — Cebu, Philippines</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Certifications */}
        <div className="mt-20">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-5 w-5 text-muted-foreground" />
            <p className="eyebrow !text-foreground">// certifications</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
            {certifications.map((c) => (
              <div key={c} className="bg-background p-5 hover:bg-card transition-colors">
                <p className="text-sm text-foreground/90 leading-snug">{c}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
