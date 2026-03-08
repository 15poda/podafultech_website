"use client"

import Image from "next/image"
import Link from "next/link"
import { PlaceHolderImages } from "@/app/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, ArrowRight } from "lucide-react"

const projects = [
  {
    id: "portfolio-loan-tracking",
    title: "LendFlow: Loan-Tracking System",
    category: "Financial Automation",
    description: "We revolutionized a Microfinance company's operations by replacing manual spreadsheets with a high-velocity business engine. The system automates bulk repayment processing, tracks customer data with precision, and triggers intelligent WhatsApp reminders. It even fosters long-term client relationships with automated personalized messages for birthdays and holidays.",
    metrics: "100% Accuracy"
  },
  {
    id: "portfolio-fabrication-pm",
    title: "NexusBuild: Project Operations Portal",
    category: "Operations Management",
    description: "For a leading Aluminium & Glass Fabricator, we developed a centralized executive hub that synchronizes multi-site operations across Zimbabwe. Teams update progress via dedicated portals, while administrators gain real-time visibility into inventory usage, project profitability, and automated Profit and Loss statements, eliminating the need for constant manual coordination.",
    metrics: "Real-time P&L"
  },
  {
    id: "portfolio-shipping-ai",
    title: "ShipSense: Cargo Concierge AI",
    category: "AI Integration",
    description: "We built an intelligent WhatsApp-based AI agent for a China-to-Zimbabwe logistics firm to handle the high volume of shipment inquiries. The agent autonomously accesses status databases to provide instant, simultaneous updates on cargo location and arrival times, drastically reducing customer service overhead and wait times.",
    metrics: "24/7 AI Support"
  },
  {
    id: "portfolio-hr-geofence",
    title: "GeoSync: Geofenced HR Intelligence",
    category: "Workforce Automation",
    description: "A sophisticated remote workforce management system utilizing Google Maps geofencing. Employees register presence via a secure portal, with validation restricted to a 50m radius of the workplace. The platform integrates real-time timesheets with automated payroll and leave management modules, giving leadership complete visibility from anywhere.",
    metrics: "Geofenced Precise"
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
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {project.description}
                    </p>
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
