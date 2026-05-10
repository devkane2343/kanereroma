import { Code2, Workflow, Network, Boxes } from "lucide-react"

const services = [
  {
    num: "01",
    icon: Code2,
    title: "Full-Stack Web Development",
    description:
      "End-to-end web applications with Next.js, React, Node.js, and Supabase — from architecture and database design to deployment and observability.",
    tags: ["Next.js", "React", "Node.js", "TypeScript"],
  },
  {
    num: "02",
    icon: Workflow,
    title: "AI & Workflow Automation",
    description:
      "Self-hosted n8n workflows, Zapier-to-n8n migrations, and AI-assisted automations that eliminate manual processes and scale operations.",
    tags: ["n8n", "Zapier", "Claude", "Cursor"],
  },
  {
    num: "03",
    icon: Network,
    title: "Systems Architecture",
    description:
      "HIPAA-compliant infrastructure, scalable backends, and technical frameworks that turn business operations into reliable, auditable systems.",
    tags: ["Supabase", "PostgreSQL", "HIPAA", "Vercel"],
  },
  {
    num: "04",
    icon: Boxes,
    title: "API Integration & Data Pipelines",
    description:
      "Reliable data pipelines and SaaS integrations across Attio, Softr, and internal systems — keeping workflows synced and data accurate.",
    tags: ["Python", "REST", "Webhooks", "Attio"],
  },
] as const

export function Services() {
  return (
    <section id="services" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-3">// 02 · services</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            What I build.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Four overlapping disciplines I combine on every engagement — from solo systems
            to client production environments.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {services.map((s) => {
            const Icon = s.icon
            return (
              <div
                key={s.num}
                className="group relative bg-background p-8 lg:p-10 hover:bg-card transition-colors"
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="rounded-md border border-border bg-card p-2.5 group-hover:border-primary/40 transition-colors">
                    <Icon className="h-5 w-5 text-foreground" />
                  </div>
                  <span className="font-mono text-xs text-muted-foreground">{s.num}</span>
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {s.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                  {s.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {s.tags.map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
