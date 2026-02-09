"use client"

import Image from "next/image"
import { PlaceHolderImages } from "@/lib/placeholder-images"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"

const projects = [
  {
    id: "portfolio-ecommerce",
    title: "E-Commerce Velocity",
    category: "Fulfillment Automation",
    description: "Automated order processing and inventory sync across 4 platforms, reducing delivery time by 48%.",
    metrics: "48% Faster Shipping"
  },
  {
    id: "portfolio-ai-support",
    title: "Omni-Support AI",
    category: "Customer Experience",
    description: "Implemented a multi-lingual AI bot that handles 85% of tier-1 support tickets with zero human intervention.",
    metrics: "85% Auto-Resolution"
  },
  {
    id: "portfolio-workflow",
    title: "Nexus Workflow",
    category: "Internal Operations",
    description: "A custom visual builder for internal marketing approvals, saving over 40 hours of meetings per month.",
    metrics: "40hrs/mo Saved"
  },
  {
    id: "portfolio-analytics",
    title: "Vision Analytics",
    category: "Data Intelligence",
    description: "Real-time KPI dashboard that aggregates data from 12 different sources for executive decision making.",
    metrics: "Real-time Insights"
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
            <Badge variant="secondary" className="px-4 py-2 text-sm">40+ Projects Delivered</Badge>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => {
            const imageData = PlaceHolderImages.find(img => img.id === project.id)
            return (
              <div key={project.id} className="group relative overflow-hidden rounded-3xl bg-white/5 border border-white/10 hover:border-primary/30 transition-all duration-500">
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
                  <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                    {project.title}
                    <ExternalLink className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}