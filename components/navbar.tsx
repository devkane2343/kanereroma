"use client"

import { useState, useEffect } from "react"
import { Moon, Sun, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetClose, SheetHeader, SheetTitle } from "@/components/ui/sheet"
import ProfileViews from "./profile-views"
import { CvModal } from "./cv-modal"

export function Navbar() {
  // ✅ Default mode is now dark
  const [isDark, setIsDark] = useState(true)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    // ✅ Apply dark mode by default
    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [isDark])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Mobile - Hamburger Menu */}
          <div className="md:hidden flex items-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-full">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="w-[280px] sm:w-80">
                <div className="flex flex-col h-full">
                  <SheetHeader className="pb-6 border-b border-border">
                    <SheetTitle className="text-2xl font-bold text-primary">Portfolio</SheetTitle>
                  </SheetHeader>
                  <nav className="flex-1 py-6">
                    <div className="flex flex-col gap-1">
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection("about")}
                          className="flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all rounded-lg w-full justify-start group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">About</span>
                        </button>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection("projects")}
                          className="flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all rounded-lg w-full justify-start group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">Projects</span>
                        </button>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection("experience")}
                          className="flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all rounded-lg w-full justify-start group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">Experience</span>
                        </button>
                      </SheetClose>
                      <SheetClose asChild>
                        <CvModal>
                          <button className="flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all rounded-lg w-full justify-start group">
                            <span className="group-hover:translate-x-1 transition-transform">CV</span>
                          </button>
                        </CvModal>
                      </SheetClose>
                      <SheetClose asChild>
                        <button
                          onClick={() => scrollToSection("contact")}
                          className="flex items-center px-4 py-3 text-base font-medium text-foreground/80 hover:text-foreground hover:bg-accent transition-all rounded-lg w-full justify-start group"
                        >
                          <span className="group-hover:translate-x-1 transition-transform">Contact</span>
                        </button>
                      </SheetClose>
                    </div>
                  </nav>
                  <div className="pt-6 border-t border-border">
                    <p className="text-xs text-muted-foreground text-center">
                      Navigate through my portfolio
                    </p>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          {/* Desktop - Portfolio button and navigation */}
          <button
            onClick={() => scrollToSection("hero")}
            className="text-xl font-bold text-primary hover:text-primary/80 transition-colors hidden md:block"
          >
            Portfolio
          </button>

          <div className="flex items-center gap-4 md:gap-8">
            <div className="hidden md:flex items-center gap-8">
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("projects")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Projects
              </button>
              <button
                onClick={() => scrollToSection("experience")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Experience
              </button>
              <CvModal>
                <button className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors">
                  CV
                </button>
              </CvModal>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground/70 hover:text-foreground transition-colors"
              >
                Contact
              </button>
            </div>

            <ProfileViews />

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsDark(!isDark)}
              className="rounded-full"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
