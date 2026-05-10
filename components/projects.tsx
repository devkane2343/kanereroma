"use client"

import { useState, useEffect, useRef } from "react"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { ExternalLink, Github, ChevronLeft, ChevronRight, ArrowUpRight, X } from "lucide-react"

type CaseStudy = {
  role: string
  timeline?: string
  overview: string
  challenge: string
  approach: string[]
  features: { title: string; detail: string }[]
  impact: string[]
  techStack: { label: string; items: string[] }[]
}

type Project = {
  title: string
  description: string
  image: string
  logo?: string
  gallery?: string[]
  tags: string[]
  liveUrl: string
  githubUrl: string
  client?: string
  featured?: boolean
  details?: CaseStudy
}

const projects: Project[] = [
  {
    title: "Gridline Billing System",
    client: "Built at Simple.biz · for Gridline Analytics (NY)",
    description:
      "End-to-end billing platform for a truck fleet company. Replaced a manual, error-prone process with automated invoice generation, trip-based billing logic, and fleet-wide payment tracking. Required deep immersion into the client's taxation, accounting, and fleet-management workflows — not just shipping code, but reflecting real-world business logic.",
    image: "/projects/Gridline Analytics/GA - 1.png",
    logo: "/gline-logo.png",
    gallery: [
      "/projects/Gridline Analytics/GA - 1.png",
      "/projects/Gridline Analytics/GA - 2.png",
      "/projects/Gridline Analytics/GA - 3.png",
      "/projects/Gridline Analytics/GA - 4.png",
      "/projects/Gridline Analytics/GA - 5.png",
    ],
    tags: ["Next.js", "n8n", "Duda", "Automation"],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      role: "Lead Full-Stack Developer & Systems Architect",
      timeline: "Nov 2025 — Present · Ongoing",
      overview:
        "An end-to-end billing platform for a truck fleet operator — replacing a manual, spreadsheet-driven invoicing process with an automated digital workflow that calculates trip-based charges, generates invoices, and tracks fleet-wide payments. Built within Simple.biz's agency model and delivered to their client Gridline Analytics.",
      challenge:
        "The client's billing process was spreadsheet-bound, error-prone, and impossible to audit at scale. Trip data, fuel costs, taxes, and per-route rates were calculated by hand, leading to lost revenue and reconciliation headaches. The system needed to encode taxation rules, accounting principles, and fleet-management logic — not just digitize the spreadsheet.",
      approach: [
        "Embedded with the client's operations team to map every step of the existing billing flow before writing code.",
        "Modeled trip-based billing logic — distance, fuel, tax brackets, per-route rates, and exception handling — into a deterministic calculation engine.",
        "Architected a Next.js front-end backed by Supabase for real-time fleet, trip, and invoice data with role-based access.",
        "Wired n8n automations to sync trip events from upstream systems and trigger invoice generation, status updates, and payment notifications.",
        "Integrated Duda for client-facing portals and document delivery, keeping a single source of truth across all surfaces.",
      ],
      features: [
        { title: "Automated invoice generation", detail: "One-click invoicing with trip-based line items, tax breakdown, and PDF export." },
        { title: "Trip-based billing engine", detail: "Deterministic calculation across distance, fuel, route rates, and tax rules." },
        { title: "Fleet-wide payment tracking", detail: "Live status of every truck, route, and outstanding invoice across the fleet." },
        { title: "Client billing portal", detail: "Branded portal where customers view invoices, statements, and payment history." },
        { title: "Audit-ready logs", detail: "Full history of invoice changes, approvals, and payment events for compliance." },
        { title: "Workflow automation", detail: "n8n flows handle invoice triggers, reminders, and cross-system sync." },
      ],
      impact: [
        "Eliminated manual invoice preparation — invoices now generate from trip data automatically.",
        "Removed reconciliation errors that previously caused lost revenue and customer disputes.",
        "Gave operations real-time visibility into fleet billing status across every truck and route.",
        "Reduced billing turnaround from days to minutes per cycle.",
      ],
      techStack: [
        { label: "Frontend", items: ["Next.js", "React", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", items: ["Node.js", "Supabase (Postgres)", "REST APIs"] },
        { label: "Automation", items: ["n8n (self-hosted)", "Webhooks"] },
        { label: "Integration", items: ["Duda", "Gridline platform", "Email/PDF pipelines"] },
        { label: "Domain logic", items: ["Trip-based billing", "Taxation rules", "Fleet accounting"] },
      ],
    },
  },
  {
    title: "Custom HRIS Platform",
    client: "Built for Simple.biz (internal)",
    description:
      "Internal HRIS for the agency — handling payroll, attendance, employee profiles, rates, orphanage budget tracking, and a gift tracker. Replaced fragmented spreadsheets with a single source of truth across the company.",
    featured: true,
    image: "/projects/Simple.biz/HRIS - 1.png",
    gallery: [
      "/projects/Simple.biz/HRIS - 1.png",
      "/projects/Simple.biz/HRIS - 2.png",
      "/projects/Simple.biz/HRIS - 3.png",
      "/projects/Simple.biz/HRIS - 4.png",
      "/projects/Simple.biz/HRIS - 5.png",
      "/projects/Simple.biz/HRIS - 6.png",
      "/projects/Simple.biz/HRIS - 7.png",
      "/projects/Simple.biz/HRIS - 8.png",
      "/projects/Simple.biz/HRIS - 9.png",
    ],
    tags: ["Next.js", "Supabase", "TypeScript", "HRIS"],
    liveUrl: "#",
    githubUrl: "#",
    details: {
      role: "Sole Full-Stack Developer & Systems Architect",
      timeline: "Nov 2025 — Present · Production",
      overview:
        "A custom Human Resource Information System built for Simple.biz to replace a sprawl of spreadsheets, ad-hoc trackers, and manual payroll calculations. Designed to be the agency's single source of truth for everything people-related — from payroll runs to attendance, rates, and even the company's orphanage-budget and gift-tracking initiatives.",
      challenge:
        "Operations relied on disconnected spreadsheets for payroll, attendance, employee rates, and internal initiatives. Data drift between sheets caused payroll errors, missed leave records, and zero auditability. Leadership needed one system that reflected how the agency actually operates — not a generic HR SaaS.",
      approach: [
        "Audited every existing spreadsheet and process, then re-modeled them as relational schemas in Supabase.",
        "Designed role-based access so HR, finance, and management each see exactly what they need.",
        "Built a payroll engine with configurable employee rates, deductions, and pay-period logic.",
        "Implemented attendance tracking with leave balances, schedule rules, and approval flows.",
        "Added domain-specific modules requested by leadership — orphanage budget tracker and a gift tracker — instead of forcing them into generic categories.",
        "Shipped iteratively and embedded with HR/finance to refine flows based on real usage.",
      ],
      features: [
        { title: "Payroll engine", detail: "Per-period payroll runs with configurable rates, deductions, and history." },
        { title: "Attendance & leave", detail: "Real-time attendance, leave balances, and approval workflows." },
        { title: "Employee profiles", detail: "Centralized profiles with rates, role history, and documents." },
        { title: "Gift tracker", detail: "Custom module for tracking company gift programs end-to-end." },
        { title: "Orphanage budget tracker", detail: "Dedicated budget tracking for the agency's orphanage initiative." },
        { title: "Role-based dashboards", detail: "Distinct views for HR, finance, and leadership — no over-sharing." },
      ],
      impact: [
        "Replaced ~10 fragmented spreadsheets with one unified, auditable system.",
        "Eliminated payroll calculation errors caused by manual sheet updates.",
        "Gave leadership a real-time pulse on headcount, attendance, and payroll cost.",
        "Made the agency's mission-driven programs (orphanage, gifts) trackable as first-class data.",
      ],
      techStack: [
        { label: "Frontend", items: ["Next.js (App Router)", "React", "TypeScript", "Tailwind CSS"] },
        { label: "Backend", items: ["Supabase (Postgres + Auth)", "Row-level security", "Server Actions"] },
        { label: "Tooling", items: ["Vercel", "Cursor", "Claude CLI"] },
        { label: "Modules", items: ["Payroll", "Attendance", "Profiles", "Gift Tracker", "Orphanage Budget"] },
      ],
    },
  },
  {
    title: "Investment & Bidding CRM",
    client: "Powerhouse Ventures · Sydney",
    description:
      "Custom CRM platform for investment tracking, bidder management, and workflow automation. Built to replace SaaS sprawl with a tailored system that mirrors the firm's actual bidding operations.",
    image: "/powerhouse-crm.svg",
    gallery: ["/powerhouse-crm.svg"],
    tags: ["Next.js", "Attio", "Softr", "n8n"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Bid Tracking Automation",
    client: "Powerhouse Ventures",
    description:
      "Self-hosted n8n workflows for bid tracking, notifications, and operational processes. Integrates Attio CRM, Softr dashboards, Slack alerts, and document automation pipelines.",
    image: "/bid-tracking.svg",
    gallery: ["/bid-tracking.svg"],
    tags: ["n8n", "Attio", "Softr", "Docsautomator"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Financial Tracker",
    description:
      "A personal-finance tracker with insights into spending and planning. Roadmap: integrate an LLM for personalized financial advice and automated categorization.",
    image: "/1.png",
    gallery: ["/1.png", "/2.png", "/3.png"],
    tags: ["Next.js", "TypeScript", "Tailwind"],
    liveUrl: "https://ktr-financial-tracker.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Document Management System",
    client: "TESDA Region VII",
    description:
      "Cloud-based document tracking, numbering, approvals, digital signatures, and full audit logging — streamlining communication across regional offices.",
    image: "/tesdaviidms.png",
    gallery: ["/tesdaviidms.png", "/cms-dashboard-interface.jpg", "/task-management-dashboard.png"],
    tags: ["Next.js", "TypeScript", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Online Application System",
    client: "TESDA Region VII",
    description:
      "Web platform for trainers to apply for NTTC online with real-time tracking, automated certificate generation, and live status notifications.",
    image: "/onaf.png",
    gallery: ["/onaf.png"],
    tags: ["Vanilla JS", "Firebase", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "TESDA Region VII Website",
    client: "TESDA Region VII",
    description:
      "Public-facing institutional site with SEO optimization, dynamic content management, and inquiry handling.",
    image: "/tesdaviiwebsite.png",
    gallery: ["/tesdaviiwebsite.png", "/tesdaviidms.png"],
    tags: ["Next.js", "TypeScript", "React", "Firebase"],
    liveUrl: "https://tesda-region-vii.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Regional Performance Dashboard",
    client: "TESDA Region VII",
    description:
      "Centralized dashboard for executives to view, analyze, and monitor real-time regional data with role-based access for performance tracking.",
    image: "/tesdaviimis.png",
    gallery: ["/tesdaviimis.png", "/cms-dashboard-interface.jpg"],
    tags: ["Vanilla JS", "JSON", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "n8n × Duda Automation",
    description:
      "Automated content publishing to Duda — image uploads, content sync, and SEO metadata optimization across multiple sites.",
    image: "/n8ntoduda.png",
    gallery: ["/n8ntoduda.png"],
    tags: ["n8n", "Duda", "Automation", "SEO"],
    liveUrl: "#",
    githubUrl: "#",
  },
]

const defaultFeatured = projects.find((p) => p.featured) ?? projects[0]

export function Projects() {
  const [featuredTitle, setFeaturedTitle] = useState<string>(defaultFeatured.title)
  const [selected, setSelected] = useState<Project | null>(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const [featuredImageIndex, setFeaturedImageIndex] = useState(0)
  const featuredRef = useRef<HTMLDivElement>(null)

  const featured = projects.find((p) => p.title === featuredTitle) ?? defaultFeatured
  const rest = projects.filter((p) => p.title !== featured.title)
  const featuredImages = featured.gallery?.length ? featured.gallery : [featured.image]

  useEffect(() => {
    setGalleryIndex(0)
  }, [selected])

  useEffect(() => {
    setFeaturedImageIndex(0)
  }, [featuredTitle])

  const handleCardClick = (p: Project) => {
    setFeaturedTitle(p.title)
    requestAnimationFrame(() => {
      featuredRef.current?.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  }

  return (
    <section id="projects" className="py-28 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-14 max-w-3xl">
          <p className="eyebrow mb-3">// 03 · projects</p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Selected work.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            Click any card to feature it. A few are NDA — these are the ones I can show.
          </p>
        </div>

        {/* Featured */}
        <div ref={featuredRef} className="mb-16 scroll-mt-24">
          <div className="grid lg:grid-cols-[1.2fr_1fr] gap-8 items-stretch">
            <div className="relative rounded-lg overflow-hidden border border-border bg-card group">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity z-10 pointer-events-none" />
              <img
                key={featured.title + featuredImageIndex}
                src={featuredImages[featuredImageIndex] || featured.image}
                alt={featured.title}
                className="w-full h-full object-cover aspect-video lg:aspect-auto animate-fade-in-up"
              />
              {featuredImages.length > 1 && (
                <>
                  <button
                    onClick={() =>
                      setFeaturedImageIndex(
                        (i) => (i - 1 + featuredImages.length) % featuredImages.length,
                      )
                    }
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/70 backdrop-blur border border-border hover:bg-background transition-colors flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() =>
                      setFeaturedImageIndex((i) => (i + 1) % featuredImages.length)
                    }
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/70 backdrop-blur border border-border hover:bg-background transition-colors flex items-center justify-center z-20 opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                  <div className="absolute bottom-3 left-3 flex gap-1.5 z-20">
                    {featuredImages.map((src, idx) => (
                      <button
                        key={src}
                        onClick={() => setFeaturedImageIndex(idx)}
                        className={`h-1.5 rounded-full transition-all ${
                          featuredImageIndex === idx
                            ? "w-6 bg-primary"
                            : "w-1.5 bg-foreground/30 hover:bg-foreground/50"
                        }`}
                        aria-label={`Image ${idx + 1}`}
                      />
                    ))}
                  </div>
                  <div className="absolute bottom-3 right-3 z-20 font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-border bg-background/70 backdrop-blur text-muted-foreground">
                    {featuredImageIndex + 1} / {featuredImages.length}
                  </div>
                </>
              )}
            </div>

            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 mb-4 flex-wrap">
                <span className="font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-primary/30 bg-primary/5 text-primary">
                  FEATURED
                </span>
                {featured.client && (
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {featured.client}
                  </span>
                )}
              </div>
              <h3 className="text-2xl sm:text-3xl font-semibold tracking-tight text-foreground mb-4">
                {featured.title}
              </h3>
              <p className="text-base text-muted-foreground leading-relaxed mb-6">
                {featured.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-6">
                {featured.tags.map((t) => (
                  <span
                    key={t}
                    className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-border text-muted-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <Button onClick={() => setSelected(featured)} className="group">
                  View case study
                  <ArrowUpRight className="ml-1.5 h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
                {featured.liveUrl !== "#" && (
                  <Button variant="outline" asChild>
                    <a href={featured.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Live
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="hairline mb-12" />

        <div className="flex items-center justify-between mb-6">
          <p className="eyebrow">// all projects · click to feature</p>
          <span className="font-mono text-[10px] text-muted-foreground">
            {rest.length} more
          </span>
        </div>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((p) => (
            <button
              key={p.title}
              onClick={() => handleCardClick(p)}
              className="group text-left flex flex-col rounded-lg border border-border bg-card overflow-hidden hover:border-primary/40 hover:-translate-y-0.5 transition-all"
            >
              <div className="aspect-[16/10] overflow-hidden bg-muted relative">
                <img
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-end p-3">
                  <span className="font-mono text-[10px] tracking-wide px-2 py-1 rounded border border-primary/40 bg-background/80 backdrop-blur text-primary">
                    feature this →
                  </span>
                </div>
              </div>
              <div className="p-5 flex flex-col flex-1">
                {p.client && (
                  <p className="font-mono text-[10px] text-muted-foreground mb-1.5 truncate">
                    {p.client}
                  </p>
                )}
                <h3 className="text-base font-semibold text-foreground mb-2 leading-tight">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-1.5">
                  {p.tags.slice(0, 3).map((t) => (
                    <span
                      key={t}
                      className="font-mono text-[10px] tracking-wide px-1.5 py-0.5 rounded border border-border text-muted-foreground"
                    >
                      {t}
                    </span>
                  ))}
                  {p.tags.length > 3 && (
                    <span className="font-mono text-[10px] text-muted-foreground">
                      +{p.tags.length - 3}
                    </span>
                  )}
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Modal — case study (split layout) */}
        <Dialog open={!!selected} onOpenChange={(open) => !open && setSelected(null)}>
          <DialogContent
            className="!max-w-[min(96vw,1400px)] w-[96vw] p-0 gap-0 overflow-hidden h-[92vh] flex flex-col"
            showCloseButton={false}
          >
            {selected && (() => {
              const galleryImages = selected.gallery?.length
                ? selected.gallery
                : [selected.image]
              const currentImage = galleryImages[galleryIndex] || selected.image
              const d = selected.details
              return (
                <div className="grid lg:grid-cols-[minmax(0,1.1fr)_minmax(0,1fr)] flex-1 min-h-0">
                  {/* LEFT — sticky image + meta */}
                  <aside className="relative bg-muted/40 border-b lg:border-b-0 lg:border-r border-border flex flex-col">
                    <div className="relative flex-1 min-h-[260px] lg:min-h-0 overflow-hidden bg-muted flex items-center justify-center">
                      <img
                        key={currentImage}
                        src={currentImage || "/placeholder.svg"}
                        alt={`${selected.title} screenshot ${galleryIndex + 1}`}
                        className="w-full h-full object-contain animate-fade-in-up"
                      />
                      {galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={() =>
                              setGalleryIndex(
                                (i) => (i - 1 + galleryImages.length) % galleryImages.length,
                              )
                            }
                            className="absolute left-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors flex items-center justify-center"
                            aria-label="Previous image"
                          >
                            <ChevronLeft className="h-4 w-4" />
                          </button>
                          <button
                            onClick={() =>
                              setGalleryIndex((i) => (i + 1) % galleryImages.length)
                            }
                            className="absolute right-3 top-1/2 -translate-y-1/2 h-9 w-9 rounded-full bg-background/80 backdrop-blur border border-border hover:bg-background transition-colors flex items-center justify-center"
                            aria-label="Next image"
                          >
                            <ChevronRight className="h-4 w-4" />
                          </button>
                          <div className="absolute top-3 right-3 font-mono text-[10px] tracking-wide px-2 py-0.5 rounded border border-border bg-background/80 backdrop-blur text-muted-foreground">
                            {galleryIndex + 1} / {galleryImages.length}
                          </div>
                        </>
                      )}
                    </div>

                    {/* Thumbnails strip */}
                    {galleryImages.length > 1 && (
                      <div className="flex-none border-t border-border bg-background/50 p-2.5 overflow-x-auto scrollbar-hide">
                        <div className="flex gap-2 min-w-max">
                          {galleryImages.map((src, idx) => (
                            <button
                              key={src + idx}
                              onClick={() => setGalleryIndex(idx)}
                              className={`relative h-14 w-20 flex-none rounded overflow-hidden border-2 transition-all ${
                                galleryIndex === idx
                                  ? "border-primary"
                                  : "border-transparent opacity-60 hover:opacity-100"
                              }`}
                              aria-label={`Image ${idx + 1}`}
                            >
                              <img src={src} alt="" className="h-full w-full object-cover" />
                            </button>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Meta footer (desktop only — mobile uses header) */}
                    <div className="hidden lg:block flex-none border-t border-border p-5 bg-background/50">
                      <div className="grid grid-cols-2 gap-x-4 gap-y-3">
                        {selected.client && (
                          <div className="col-span-2">
                            <p className="font-mono text-[10px] tracking-wide text-muted-foreground mb-0.5">
                              CLIENT
                            </p>
                            <p className="text-sm text-foreground/90 leading-snug">
                              {selected.client}
                            </p>
                          </div>
                        )}
                        {d?.role && (
                          <div className="col-span-2">
                            <p className="font-mono text-[10px] tracking-wide text-muted-foreground mb-0.5">
                              ROLE
                            </p>
                            <p className="text-sm text-foreground/90 leading-snug">{d.role}</p>
                          </div>
                        )}
                        {d?.timeline && (
                          <div className="col-span-2">
                            <p className="font-mono text-[10px] tracking-wide text-muted-foreground mb-0.5">
                              TIMELINE
                            </p>
                            <p className="text-sm text-foreground/90 leading-snug">
                              {d.timeline}
                            </p>
                          </div>
                        )}
                      </div>
                      <div className="flex flex-wrap gap-1.5 mt-4 pt-4 border-t border-border">
                        {selected.tags.map((t) => (
                          <Badge key={t} variant="outline" className="font-mono text-[10px]">
                            {t}
                          </Badge>
                        ))}
                      </div>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {selected.liveUrl !== "#" && (
                          <Button asChild size="sm" className="flex-1">
                            <a
                              href={selected.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                              Live
                            </a>
                          </Button>
                        )}
                        {selected.githubUrl !== "#" && (
                          <Button variant="outline" asChild size="sm" className="flex-1">
                            <a
                              href={selected.githubUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <Github className="h-3.5 w-3.5 mr-1.5" />
                              Code
                            </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </aside>

                  {/* RIGHT — scrollable case study */}
                  <div className="relative flex flex-col min-h-0">
                    {/* Sticky header bar */}
                    <div className="sticky top-0 z-10 flex items-start justify-between gap-3 border-b border-border bg-background/95 backdrop-blur px-6 sm:px-8 py-5">
                      <div className="min-w-0 flex-1">
                        {selected.client && (
                          <p className="font-mono text-[11px] text-muted-foreground mb-1 lg:hidden">
                            {selected.client}
                          </p>
                        )}
                        <DialogTitle className="text-xl sm:text-2xl tracking-tight leading-tight">
                          {selected.title}
                        </DialogTitle>
                        {d && (
                          <div className="flex flex-wrap gap-x-3 gap-y-0.5 mt-1.5 font-mono text-[11px] text-muted-foreground lg:hidden">
                            <span>{d.role}</span>
                            {d.timeline && (
                              <>
                                <span>·</span>
                                <span>{d.timeline}</span>
                              </>
                            )}
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => setSelected(null)}
                        className="flex-none h-8 w-8 rounded-md border border-border hover:bg-muted transition-colors flex items-center justify-center"
                        aria-label="Close"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>

                    <div className="flex-1 min-h-0 overflow-y-auto px-6 sm:px-8 py-6 space-y-7">
                      {!d && (
                        <p className="text-base text-muted-foreground leading-relaxed">
                          {selected.description}
                        </p>
                      )}

                      {d && (
                        <>
                          <div className="grid md:grid-cols-2 gap-5">
                            <div className="rounded-md border border-border bg-card/50 p-5">
                              <p className="eyebrow mb-2.5">// overview</p>
                              <p className="text-sm text-foreground/90 leading-relaxed">
                                {d.overview}
                              </p>
                            </div>
                            <div className="rounded-md border border-border bg-card/50 p-5">
                              <p className="eyebrow mb-2.5">// the challenge</p>
                              <p className="text-sm text-foreground/90 leading-relaxed">
                                {d.challenge}
                              </p>
                            </div>
                          </div>

                          <CaseSection label="// approach">
                            <ul className="space-y-2">
                              {d.approach.map((a, i) => (
                                <li
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed"
                                >
                                  <span className="font-mono text-xs text-primary/70 mt-1 shrink-0">
                                    {String(i + 1).padStart(2, "0")}
                                  </span>
                                  <span>{a}</span>
                                </li>
                              ))}
                            </ul>
                          </CaseSection>

                          <CaseSection label="// key features">
                            <div className="grid md:grid-cols-2 gap-px bg-border rounded-lg overflow-hidden border border-border">
                              {d.features.map((f) => (
                                <div
                                  key={f.title}
                                  className="bg-background p-4 hover:bg-card transition-colors"
                                >
                                  <p className="text-sm font-semibold text-foreground mb-1 leading-snug">
                                    {f.title}
                                  </p>
                                  <p className="text-xs text-muted-foreground leading-relaxed">
                                    {f.detail}
                                  </p>
                                </div>
                              ))}
                            </div>
                          </CaseSection>

                          <CaseSection label="// impact">
                            <div className="grid sm:grid-cols-2 gap-2.5">
                              {d.impact.map((line, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-3 text-sm text-foreground/90 leading-relaxed rounded-md border border-border bg-card/30 p-3"
                                >
                                  <span className="font-mono text-xs text-primary mt-0.5 shrink-0">
                                    ✓
                                  </span>
                                  <span>{line}</span>
                                </div>
                              ))}
                            </div>
                          </CaseSection>

                          <CaseSection label="// tech stack">
                            <div className="grid sm:grid-cols-2 gap-2.5">
                              {d.techStack.map((g) => (
                                <div
                                  key={g.label}
                                  className="rounded-md border border-border bg-card/50 p-3.5"
                                >
                                  <p className="font-mono text-[10px] tracking-wide text-muted-foreground mb-2">
                                    {g.label.toUpperCase()}
                                  </p>
                                  <div className="flex flex-wrap gap-1.5">
                                    {g.items.map((it) => (
                                      <span
                                        key={it}
                                        className="font-mono text-[11px] px-2 py-0.5 rounded border border-border bg-background text-foreground/90"
                                      >
                                        {it}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </CaseSection>
                        </>
                      )}

                      {/* Mobile-only meta + actions */}
                      <div className="lg:hidden pt-4 border-t border-border space-y-3">
                        <div className="flex flex-wrap gap-1.5">
                          {selected.tags.map((t) => (
                            <Badge key={t} variant="outline" className="font-mono text-[10px]">
                              {t}
                            </Badge>
                          ))}
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {selected.liveUrl !== "#" && (
                            <Button asChild size="sm">
                              <a
                                href={selected.liveUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <ExternalLink className="h-3.5 w-3.5 mr-1.5" />
                                Live
                              </a>
                            </Button>
                          )}
                          {selected.githubUrl !== "#" && (
                            <Button variant="outline" asChild size="sm">
                              <a
                                href={selected.githubUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                <Github className="h-3.5 w-3.5 mr-1.5" />
                                Code
                              </a>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })()}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

function CaseSection({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) {
  return (
    <div>
      <p className="eyebrow mb-3">{label}</p>
      {children}
    </div>
  )
}
