"use client"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© {currentYear} John Doe. All rights reserved.</p>
          <div className="flex gap-6">
            <button
              onClick={() => {
                const element = document.getElementById("about")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              About
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("projects")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("experience")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Experience
            </button>
            <button
              onClick={() => {
                const element = document.getElementById("contact")
                if (element) element.scrollIntoView({ behavior: "smooth" })
              }}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
