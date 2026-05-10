"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import ProfileViews from "./profile-views"
import { CvModal } from "./cv-modal"

const navLinks = [
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Projects" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const

export function Navbar() {
  const [isDark, setIsDark] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    document.documentElement.classList.toggle("dark", isDark)
  }, [isDark])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/70 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-md">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-80 p-0">
                <div className="flex flex-col h-full">
                  <SheetHeader className="p-6 border-b border-border">
                    <SheetTitle className="text-left">
                      <span className="font-mono text-sm text-muted-foreground">// menu</span>
                      <p className="text-lg font-semibold mt-1">Jan Kane Reroma</p>
                    </SheetTitle>
                  </SheetHeader>
                  <nav className="flex-1 p-4 space-y-1">
                    {navLinks.map((l) => (
                      <SheetClose asChild key={l.id}>
                        <button
                          onClick={() => scrollToSection(l.id)}
                          className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors group"
                        >
                          <span>{l.label}</span>
                          <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                            →
                          </span>
                        </button>
                      </SheetClose>
                    ))}
                    <SheetClose asChild>
                      <CvModal>
                        <button className="flex items-center justify-between w-full px-3 py-2.5 text-sm font-medium text-foreground/80 hover:text-foreground hover:bg-muted rounded-md transition-colors group">
                          <span>CV</span>
                          <span className="font-mono text-xs text-muted-foreground group-hover:text-primary transition-colors">
                            →
                          </span>
                        </button>
                      </CvModal>
                    </SheetClose>
                  </nav>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Brand */}
          <button
            onClick={() => scrollToSection("hero")}
            className="hidden md:flex items-center gap-2 group"
          >
            <span className="h-7 w-7 rounded-md border border-border bg-card grid place-items-center font-mono text-xs font-semibold text-foreground group-hover:border-primary/40 transition-colors">
              KR
            </span>
            <span className="font-mono text-sm text-foreground/80 group-hover:text-foreground transition-colors">
              kane.reroma
            </span>
          </button>

          {/* Desktop nav */}
          <div className="flex items-center gap-2 md:gap-1">
            <div className="hidden md:flex items-center">
              {navLinks.map((l) => (
                <button
                  key={l.id}
                  onClick={() => scrollToSection(l.id)}
                  className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                >
                  {l.label}
                </button>
              ))}
              <CvModal>
                <button className="px-3 py-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted">
                  CV
                </button>
              </CvModal>
            </div>

            <div className="ml-2 hidden sm:block">
              <ProfileViews />
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-md"
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
