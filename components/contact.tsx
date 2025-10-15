"use client"

import type React from "react"
import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Linkedin, Github } from "lucide-react"

const socialLinks = [
  {
    icon: Mail,
    label: "Email",
    href: "mailto:devkane2343@gmail.com",
    username: "devkane2343@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kane-dev-424590374/",
    username: "kane-dev",
  },
  {
    icon: Github,
    label: "GitHub",
    href: "https://github.com/devkane2343",
    username: "devkane2343",
  },
]

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
        setStatus("✅ Message sent successfully!")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus("❌ Failed to send. Check console for details.")
        console.error("API error:", data.error)
      }
    } catch (error) {
      console.error("Error:", error)
      setStatus("⚠️ Something went wrong. Please try again.")
    }

    setIsLoading(false)
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center animate-fade-in-up">Get In Touch</h2>
        <div className="w-20 h-1 bg-primary mx-auto mb-12 rounded-full" />

        <div className="grid md:grid-cols-2 gap-8">
          {/* --- Left Section --- */}
          <div className="animate-fade-in-up">
            <p className="text-lg text-foreground/80 mb-8 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out!
            </p>

            <div className="space-y-4">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors group"
                >
                  <div className="p-2 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <link.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-medium text-foreground">{link.label}</p>
                    <p className="text-sm text-muted-foreground">{link.username}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* --- Right Section: Contact Form --- */}
          <Card className="p-6 animate-fade-in-up border-border/50">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Name
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
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email
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
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  placeholder="Your message..."
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </Button>

              {status && <p className="text-center text-sm mt-2">{status}</p>}
            </form>
          </Card>
        </div>
      </div>
    </section>
  )
}
