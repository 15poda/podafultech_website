"use client"

/**
 * @fileOverview LendFlow Case Study Page
 * Detailed breakdown of the microfinance automation project.
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'
import { ContactDialog } from '@/components/ContactDialog'

export default function LendflowCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="LendFlow Case Study" />
      
      <main className="flex-grow p-4 md:p-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <header className="mb-16 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Financial Automation</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl font-headline">
              LendFlow: Revolutionizing Microfinance with Automation
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              How we transformed a microfinance company's manual operations into a high-velocity, automated business engine, achieving 100% accuracy and significant efficiency gains.
            </p>
          </header>

          <div className="space-y-16">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Challenge: The Limits of Manual Spreadsheets</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Our client, a thriving microfinance institution, was managing their entire loan portfolio using a complex system of Google Sheets. While functional in the early stages, this manual approach quickly became a bottleneck as their customer base grew. They faced several critical challenges:
              </p>
              <ul className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span><strong>Data Inaccuracy:</strong> Manual entry led to incorrect balances and missed payments.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span><strong>Inefficient Operations:</strong> Officers spent hours manually calculating interest.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span><strong>Poor Communication:</strong> Payment reminders were inconsistent and time-consuming.</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span><strong>Lack of Scalability:</strong> Spreadsheets couldn't handle increasing loan volumes.</span>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Solution: A Centralized, Automated System</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-12">
                We developed "LendFlow," a custom, web-based loan management system built on a modern tech stack (Next.js, Firebase, and ShadCN UI). The core solution focused on three pillars:
              </p>
              
              <div className="grid gap-8">
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Centralized Loan & Customer Tracking</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We replaced the scattered spreadsheets with a unified database, providing a single source of truth for total customers, applications, and portfolio status.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Detailed history and contact info accessible in seconds
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Automatic status tracking (Due Soon, Overdue, Paid)
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Intelligent WhatsApp Reminders</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    We integrated a powerful WhatsApp system to handle proactive communication autonomously.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Bulk templated reminders based on loan status
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-accent" />
                      Automated scheduling for payments and birthdays
                    </li>
                  </ul>
                </div>

                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Accounting & Reporting</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    A full-fledged accounting module that automates record-keeping and ensures 100% audit-ready data.
                  </p>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      Auto-generated journal entries for every disbursement
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      One-click Balance Sheets and Income Statements
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section className="py-12 border-t border-white/5">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">The Impact</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">95%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Manual Work Cut</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">40%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Collection Boost</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">100%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Data Accuracy</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">∞</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Scaling Ready</div>
                </div>
              </div>
            </section>

            <section className="p-12 bg-primary rounded-3xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4 font-headline">Ready for your own success story?</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                Stop fighting spreadsheets. Let us build the custom automation engine your business deserves.
              </p>
              <ContactDialog>
                <Button size="lg" variant="secondary" className="h-14 px-8 text-lg font-bold gap-2">
                  <MessageSquare className="h-5 w-5" />
                  Schedule a Consultation
                </Button>
              </ContactDialog>
            </section>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
