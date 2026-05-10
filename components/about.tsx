const stats = [
  { value: "3+", label: "yrs production" },
  { value: "10+", label: "systems shipped" },
  { value: "3", label: "countries served" },
  { value: "2", label: "concurrent roles" },
] as const

export function About() {
  return (
    <section id="about" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <p className="eyebrow mb-3">// 01 · about</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground max-w-3xl">
            I immerse myself in a client&apos;s business before a single line of code is written.
          </h2>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.5fr] gap-12 items-start mb-16">
          <div className="relative">
            <div className="aspect-[4/5] rounded-lg overflow-hidden border border-border bg-card max-w-xs">
              <img
                src="/ProfP.png"
                alt="Jan Kane T. Reroma"
                className="w-full h-full object-cover"
                width={300}
                height={400}
              />
            </div>
            <div className="mt-4 space-y-1 max-w-xs">
              <p className="font-mono text-xs text-muted-foreground">based in</p>
              <p className="text-sm text-foreground">Minglanilla, Cebu · Philippines</p>
            </div>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-muted-foreground leading-relaxed">
            <p className="animate-about-para">
              I&apos;m a <span className="text-foreground">Full-Stack Web Developer and Systems Architect</span> specializing in
              Next.js, React, Node.js, Supabase, n8n, and AI Automation. I design and deploy scalable, production-grade
              systems that streamline operations through advanced API integrations, automated workflows, and intelligent
              data pipelines.
            </p>
            <p className="animate-about-para-delayed">
              What sets me apart is cross-domain thinking — spanning <span className="text-foreground">development, business
              logic, and systems architecture</span>. I deliver end-to-end solutions that don&apos;t just work technically,
              but drive real operational change: enhanced efficiency, reduced costs, and measurable business impact.
            </p>
            <p className="animate-about-para-delayed">
              Currently working two concurrent roles — automation infrastructure at Powerhouse Ventures (Sydney, AU) by
              day, and AI/API systems at Simple.biz / Gridline Analytics (New York, US) by night.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border rounded-lg overflow-hidden border border-border">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-background p-6 sm:p-8 hover:bg-card transition-colors"
            >
              <p className="text-3xl sm:text-4xl font-semibold tracking-tight text-foreground mb-1">{s.value}</p>
              <p className="font-mono text-xs text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
