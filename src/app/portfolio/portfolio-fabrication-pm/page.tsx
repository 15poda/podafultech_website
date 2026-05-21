"use client"

/**
 * @fileOverview NexusBuild Case Study Page
 * Detailed breakdown of the fabrication operations system project.
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function NexusBuildCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="NexusBuild Case Study" />

      <main className="flex-grow p-4 md:p-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <header className="mb-16 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Operations Management</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl font-headline">
              NexusBuild: Centralized Operations System for Fabrication Company
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              How we replaced fragmented tools and failed QuickBooks integration with a fully centralized system managing sales, inventory, procurement, production, and accounting.
            </p>
          </header>

          <div className="space-y-16">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Challenge: Disconnected Systems and Operational Bottlenecks</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company relied on a combination of QuickBooks, manual processes, and internal communication to manage operations. As the business grew, this created major inefficiencies:
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Lack of visibility across departments</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Delays between sales, procurement, and production</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Data inconsistencies between QuickBooks and actual operations</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Heavy reliance on manual coordination</span>
                </li>
                <li className="flex gap-3 md:col-span-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>No centralized system for tracking projects end to end</span>
                </li>
              </ul>
              <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
                QuickBooks handled accounting, but failed to support real operational workflows.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Solution: A Fully Integrated Internal System</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-12">
                We redesigned and rebuilt the entire system from the ground up, removing dependency on QuickBooks and creating a centralized platform tailored to the company&apos;s operations.
              </p>

              <div className="grid gap-8">
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Department-Specific Dashboards</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Each department (Sales, Inventory, Procurement, Production, Accounting) operates within its own structured environment while remaining connected to the overall workflow.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">End-to-End Project Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    From initial sales to final production, every job is tracked within a single system, eliminating the need for manual coordination.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Inventory and Procurement</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Stock levels, material usage, and procurement requests are managed in real time, ensuring smoother production planning.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">04</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Operational Accounting Integration</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Financial tracking is aligned with actual operations, providing accurate and meaningful reporting beyond what QuickBooks could offer.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 border-t border-white/5">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">The Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 lg:col-span-2">
                  <div className="text-4xl font-bold text-primary mb-2">60-80%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Less Manual Coordination Time</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">2x</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Faster Workflow Progression</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">Low</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Operational Error Rate</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Cross-Team Visibility</div>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Significant reduction in operational errors and miscommunication
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Scalable system capable of supporting continued business growth
                </li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Result</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company transitioned from fragmented tools and manual processes to a fully integrated operational system, giving them complete control over their workflows, data, and growth.
              </p>
            </section>

            <section className="p-12 bg-primary rounded-3xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4 font-headline">Need a centralized system for your operations?</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                If disconnected tools are slowing down your teams, we can build a unified system tailored to how your business actually runs.
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
