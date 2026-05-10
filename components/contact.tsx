"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github, Phone, MapPin, ArrowUpRight } from "lucide-react"

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "devkane2343@gmail.com",
    href: "mailto:devkane2343@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+63 920 519 6661",
    href: "tel:+639205196661",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "in/kane-dev",
    href: "https://www.linkedin.com/in/kane-dev-424590374/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "@devkane2343",
    href: "https://github.com/devkane2343",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Minglanilla, Cebu · PH",
    href: null,
  },
] as const

export function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [isLoading, setIsLoading] = useState(false)
  const [status, setStatus] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setStatus("")

    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await res.json()
      if (data.success) {
        setStatus("✅ Message sent successfully")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("❌ Failed to send. Please try again.")
        console.error("API error:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("⚠️ Something went wrong. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <section id="contact" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-3">// 06 · contact</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Let&apos;s build something.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Available for full-stack engagements, automation projects, and systems-architecture
            consulting. Drop a line — I respond within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10">
          <div className="space-y-2">
            {channels.map((c) => {
              const Icon = c.icon
              const inner = (
                <div className="group flex items-center gap-4 p-4 rounded-lg border border-border bg-card hover:border-primary/40 transition-colors">
                  <div className="rounded-md border border-border bg-background p-2 group-hover:border-primary/40 transition-colors">
                    <Icon className="h-4 w-4 text-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-mono text-[10px] tracking-wide text-muted-foreground mb-0.5">
                      {c.label.toUpperCase()}
                    </p>
                    <p className="text-sm text-foreground truncate">{c.value}</p>
                  </div>
                  {c.href && (
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-primary group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
                  )}
                </div>
              )
              return c.href ? (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" className="block">
                  {inner}
                </a>
              ) : (
                <div key={c.label}>{inner}</div>
              )
            })}
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-lg border border-border bg-card p-6 space-y-4"
          >
            <div>
              <label htmlFor="name" className="block font-mono text-[10px] tracking-wide text-muted-foreground mb-2">
                NAME
              </label>
              <Input
                id="name"
                type="text"
                placeholder="Your name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block font-mono text-[10px] tracking-wide text-muted-foreground mb-2">
                EMAIL
              </label>
              <Input
                id="email"
                type="email"
                placeholder="your.email@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-[10px] tracking-wide text-muted-foreground mb-2">
                MESSAGE
              </label>
              <Textarea
                id="message"
                placeholder="Tell me about your project, timeline, and what you're trying to solve."
                rows={5}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                required
              />
            </div>

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? "Sending..." : "Send message"}
            </Button>

            {status && <p className="text-center text-sm text-muted-foreground">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
