"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight, RotateCcw, Sparkles, TrendingUp } from "lucide-react"

type Project = {
  id: string
  title: string
  category: string
  description: string
  metrics: string
  contextLine?: string
  before?: string
  after?: string
  beforePoints?: string[]
  afterPoints?: string[]
  impactMetrics?: string[]
}

const projects: Project[] = [
  {
    id: "portfolio-loan-tracking",
    title: "LendFlow: Loan-Tracking System",
    category: "Financial Automation",
    description: "Replaced spreadsheet-based loan tracking for a growing microfinance business.",
    metrics: "95% Less Manual Work",
    contextLine: "Replaced spreadsheet-based loan tracking for a growing microfinance business.",
    before: "Manual calculations, missed payments, inconsistent reminders",
    after: "Automated loan tracking, WhatsApp reminders, and real-time reporting",
    beforePoints: ["Manual calculations", "Missed payments", "Inconsistent reminders"],
    afterPoints: ["Automated loan tracking", "WhatsApp reminders", "Real-time reporting"],
    impactMetrics: ["95% less manual work", "40% increase in collections", "100% data accuracy"]
  },
  {
    id: "portfolio-fabrication-pm",
    title: "NexusBuild: Operations Management System",
    category: "Operations Management",
    description: "Replaced disconnected workflows and failed QuickBooks integration for a growing fabrication company.",
    metrics: "2x Faster Workflow",
    contextLine: "Replaced disconnected workflows and failed QuickBooks integration for a growing fabrication company.",
    beforePoints: ["Manual coordination between departments", "Data inconsistencies", "Limited visibility"],
    afterPoints: ["Centralized system with real-time tracking across sales, inventory, procurement, and production"],
    impactMetrics: ["60-80% less manual coordination", "2x faster workflow progression", "Significant reduction in errors"]
  },
  {
    id: "portfolio-shipping-ai",
    title: "ShipSense: Logistics Automation System",
    category: "Automation System",
    description: "Replaced manual customer inquiries and status lookups for a high-volume logistics company.",
    metrics: "Instant Responses",
    contextLine: "Replaced manual customer inquiries and status lookups for a high-volume logistics company.",
    beforePoints: ["Staff overwhelmed with calls and chats", "Manually checking shipment status across systems"],
    afterPoints: ["Automated WhatsApp system providing instant shipment updates directly from internal databases"],
    impactMetrics: ["Hugely reduced customer service workload", "Instant responses to multiple clients simultaneously", "Eliminated manual status checking"]
  },
  {
    id: "portfolio-hr-geofence",
    title: "WorkTrack: Workforce Accountability System",
    category: "Workforce Automation",
    description: "Replaced manual employee supervision with a location-based system for tracking attendance and work hours.",
    metrics: "90% Less Supervision",
    contextLine: "Replaced manual employee supervision with a location-based system for tracking attendance and work hours.",
    beforePoints: ["Management manually verifying attendance", "Limited visibility", "Accountability concerns"],
    afterPoints: ["Automated attendance tracking with geofencing and real-time visibility from anywhere"],
    impactMetrics: ["90% reduction in manual supervision", "Real-time attendance tracking across all employees", "Improved accountability and reporting accuracy"]
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
            <Badge variant="secondary" className="px-4 py-2 text-sm">{projects.length} Projects Delivered</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id)
            return (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500">
                <Link href={`/portfolio/${project.id}`}>
                  <div className="aspect-[16/10] relative overflow-hidden">
                    {imageData?.imageUrl && (
                      <Image 
                        src={imageData.imageUrl} 
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100"
                        data-ai-hint={imageData.imageHint}
                      />
                    )}
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

                    {project.beforePoints && project.afterPoints && project.impactMetrics ? (
                      <div className="mb-6">
                        <p className="text-muted-foreground leading-relaxed mb-4">{project.contextLine}</p>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p className="text-xs font-bold tracking-widest text-muted-foreground uppercase inline-flex items-center gap-2">
                              <RotateCcw className="h-3.5 w-3.5" />
                              Before
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                              {project.beforePoints.map((item) => (
                                <li key={item} className="leading-snug">- {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-white/10 bg-black/20 p-4">
                            <p className="text-xs font-bold tracking-widest text-accent uppercase inline-flex items-center gap-2">
                              <Sparkles className="h-3.5 w-3.5" />
                              After
                            </p>
                            <ul className="mt-3 space-y-1.5 text-sm text-muted-foreground">
                              {project.afterPoints.map((item) => (
                                <li key={item} className="leading-snug">- {item}</li>
                              ))}
                            </ul>
                          </div>

                          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-4">
                            <p className="text-xs font-bold tracking-widest text-primary uppercase inline-flex items-center gap-2">
                              <TrendingUp className="h-3.5 w-3.5" />
                              Impact
                            </p>
                            <div className="mt-2 divide-y divide-white/10">
                              {project.impactMetrics?.slice(0, 2).map((metric) => {
                                const [value, ...rest] = metric.split(" ")
                                return (
                                  <div key={metric} className="py-2">
                                    <p className="text-2xl font-bold leading-tight break-words max-w-[120px]">{value}</p>
                                    <p className="text-[10px] tracking-[0.18em] text-muted-foreground uppercase mt-1">{rest.join(" ")}</p>
                                  </div>
                                )
                              })}
                            </div>
                            {project.impactMetrics?.[2] && (
                              <p className="text-xs text-muted-foreground mt-2">+ {project.impactMetrics[2]}</p>
                            )}
                          </div>
                        </div>
                      </div>
                    ) : (
                      <p className="text-muted-foreground leading-relaxed mb-6">
                        {project.description}
                      </p>
                    )}

                    <div className="flex items-center text-accent text-sm font-bold gap-1 group-hover:gap-2 transition-all">
                      View Case Study <ArrowRight className="h-4 w-4" />
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
