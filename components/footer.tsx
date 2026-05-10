"use client"

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()
  const scroll = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })

  return (
    <footer className="border-t border-border py-10 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <p className="font-mono text-xs text-muted-foreground mb-1">// © {currentYear}</p>
            <p className="text-sm text-foreground">
              Jan Kane T. Reroma · Built with{" "}
              <span className="font-mono text-primary">Next.js</span> &{" "}
              <span className="font-mono text-primary">Tailwind</span>
            </p>
          </div>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {links.map((l) => (
              <button
                key={l.id}
                onClick={() => scroll(l.id)}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                {l.label}
              </button>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
