const groups = [
  {
    label: "Back-End",
    items: ["Next.js", "Node.js", "Python", "PHP", "Laravel", "Supabase", "Firebase"],
  },
  {
    label: "Front-End",
    items: ["React", "Next.js", "Vite", "TailwindCSS"],
  },
  {
    label: "Languages",
    items: ["TypeScript", "JavaScript", "Python", "PHP", "SQL"],
  },
  {
    label: "Deployment",
    items: ["Vercel", "Cloudflare", "Azure"],
  },
  {
    label: "Automation",
    items: ["n8n", "Zapier", "Docsautomator"],
  },
  {
    label: "AI Tools",
    items: ["Cursor", "Claude CLI", "Claude API"],
  },
  {
    label: "Productivity",
    items: ["Monday.com", "Microsoft Teams", "Google Workspace", "Bitrix24"],
  },
  {
    label: "Platforms",
    items: ["Attio", "Softr", "Duda", "WordPress"],
  },
] as const

export function Skills() {
  return (
    <section id="skills" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-3">// 05 · skills</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Tools of the trade.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            The stack I reach for, grouped by what they actually do.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {groups.map((g) => (
            <div key={g.label} className="bg-background p-6 hover:bg-card transition-colors">
              <p className="eyebrow mb-4">// {g.label.toLowerCase()}</p>
              <ul className="space-y-2">
                {g.items.map((item) => (
                  <li
                    key={item}
                    className="text-sm text-foreground/90 flex items-center gap-2 font-mono"
                  >
                    <span className="text-primary/60 text-xs">▍</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
