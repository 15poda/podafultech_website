"use client"

/**
 * @fileOverview ShipSense Case Study Page
 * Detailed breakdown of the logistics automation project.
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function ShipSenseCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="ShipSense Case Study" />

      <main className="flex-grow p-4 md:p-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <header className="mb-16 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Automation System</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl font-headline">
              ShipSense: Automating Customer Operations for a Logistics Company
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              How we eliminated manual customer support workload by building an automated system that provides real-time shipment updates via WhatsApp.
            </p>
          </header>

          <div className="space-y-16">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Challenge: High-Volume Inquiries and Manual Workload</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company handled a large number of shipment inquiries daily. Their process relied heavily on staff:
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Constant phone calls from customers requesting updates</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Employees manually logging into admin systems to check shipment status</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Staff balancing customer support with core operational duties</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Slow response times during busy periods</span>
                </li>
              </ul>
              <p className="mt-8 text-muted-foreground leading-relaxed text-lg font-semibold">This created:</p>
              <ul className="mt-4 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>Overwhelmed staff</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>Delayed responses to customers</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>Inefficient use of time</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-red-500 shrink-0" />
                  <span>Poor scalability as demand increased</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Solution: Automated WhatsApp-Based System</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-12">
                We developed a system that connects directly to the company&apos;s shipment database and responds to customer inquiries automatically via WhatsApp.
              </p>

              <div className="grid gap-8">
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Shipment Lookup</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Customers can request updates instantly, and the system retrieves accurate shipment data directly from internal databases.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Automated WhatsApp Responses</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The system handles multiple inquiries simultaneously, providing immediate responses without human intervention.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Seamless Integration with Existing Systems</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    No need for staff to log in and check manually, the system handles it all in the background.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 border-t border-white/5">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">The Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">80%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Less Manual Status Checking</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">∞</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Instant Automated Responses</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">∞</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Scale to High Volumes</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">✓</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Staff Focused on Core Work</div>
                </div>
              </div>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Result</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company moved from a reactive, manual customer support process to an automated, scalable system, freeing up staff to focus on core business operations while improving customer experience.
              </p>
            </section>

            <section className="p-12 bg-primary rounded-3xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4 font-headline">Ready to automate your customer operations?</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                If repetitive customer inquiries are draining your team, let us build an automated system that scales with your business.
              </p>
              <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold gap-2" asChild>
                <a href="/free-operations-audit">
                  <MessageSquare className="h-5 w-5" />
                  Get Your Free System Audit
                </a>
              </Button>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
