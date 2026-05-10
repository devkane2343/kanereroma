import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Jan Kane Reroma — Full-Stack Developer & Systems Architect",
  description:
    "Full-Stack Web Developer and Systems Architect specializing in Next.js, React, Node.js, Supabase, n8n, and AI Automation. I design and deploy scalable, production-grade systems that turn business operations into measurable outcomes.",
  keywords: [
    "Full-Stack Developer",
    "Systems Architect",
    "Next.js",
    "React",
    "Node.js",
    "Supabase",
    "n8n",
    "AI Automation",
    "API Integration",
    "Jan Kane Reroma",
    "Kane Reroma",
  ],
  authors: [{ name: "Jan Kane T. Reroma" }],
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Jan Kane Reroma — Full-Stack Developer & Systems Architect",
    description:
      "Production-grade web systems, AI automation, and scalable API integrations. Building end-to-end solutions that drive operational change.",
    url: "https://kanereroma.vercel.app",
    siteName: "Jan Kane Reroma",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jan Kane Reroma — Full-Stack Developer & Systems Architect",
    description:
      "Production-grade web systems, AI automation, and scalable API integrations.",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
