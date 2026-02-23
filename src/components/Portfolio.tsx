
"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "portfolio-loan-tracking",
    title: "LendFlow: Microfinance Engine",
    category: "Financial Automation",
    description: "Transformed manual spreadsheets into a high-velocity loan management ecosystem. Features bulk repayment processing and automated WhatsApp collection reminders.",
    metrics: "100% Repayment Sync"
  },
  {
    id: "portfolio-fabrication-pm",
    title: "NexusBuild: Site Operations",
    category: "Operations Management",
    description: "Synchronized multi-site fabrication reports into a central executive dashboard. Features inventory tracking, geofenced portals, and real-time profitability analysis.",
    metrics: "Real-time P&L"
  },
  {
    id: "portfolio-shipping-ai",
    title: "CargoAI: Logistics Concierge",
    category: "AI Experience",
    description: "An intelligent WhatsApp AI agent that handles complex shipment inquiries instantly. Reduced support desk load by providing real-time ETA and status updates via chat.",
    metrics: "Instant Support"
  },
  {
    id: "portfolio-hr-geofence",
    title: "HR-Sense: Workforce Intel",
    category: "HR Automation",
    description: "Remote attendance tracking utilizing Google Maps geofencing. Automatically reconciles timesheets with payroll and leave management modules.",
    metrics: "Geofenced Accuracy"
  }
]

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Our <span className="text-accent">Success</span> Stories
            </h2>
            <p className="text-muted-foreground text-lg">
              We don't just write code; we build business engines. See how we've transformed operations for companies across various industries.
            </p>
          </div>
          <div>
            <Badge variant="secondary" className="px-4 py-2 text-sm">5 Projects Delivered</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id)
            return (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500">
                <Link href={`/portfolio/${project.id}`}>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    <Image 
                      src={imageData?.imageUrl || ""} 
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                      data-ai-hint={imageData?.imageHint}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-8 relative">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-primary font-semibold text-sm tracking-widest uppercase">{project.category}</span>
                      <Badge variant="outline" className="border-accent text-accent">{project.metrics}</Badge>
                    </div>
                    <h3 className="text-2xl font-bold mb-4 flex items-center gap-2 group-hover:text-primary transition-colors">
                      {project.title}
                      <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
                    <div className="flex items-center text-accent text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      View Project Details <ArrowRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
