"use client"

/**
 * @fileOverview WorkTrack Case Study Page
 * Detailed breakdown of the workforce accountability automation project.
 */

import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/Footer'
import { Button } from '@/components/ui/button'
import { ArrowLeft, MessageSquare } from 'lucide-react'
import Link from 'next/link'

export default function WorkTrackCaseStudyPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header title="WorkTrack Case Study" />

      <main className="flex-grow p-4 md:p-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-12 group">
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </Link>

          <header className="mb-16 text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Workforce Automation</p>
            <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-foreground sm:text-6xl font-headline">
              WorkTrack: Automating Workforce Accountability with Geofencing
            </h1>
            <p className="mt-8 text-xl leading-relaxed text-muted-foreground max-w-3xl mx-auto">
              How we replaced manual supervision with a system that ensures employee accountability and real-time attendance tracking.
            </p>
          </header>

          <div className="space-y-16">
            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Challenge: Manual Supervision and Lack of Accountability</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company relied on physical oversight to ensure employees were reporting for duty on time and leaving appropriately.
              </p>
              <p className="mt-8 text-muted-foreground leading-relaxed text-lg font-semibold">This created several challenges:</p>
              <ul className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-6 text-muted-foreground">
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Management had to be physically present to verify attendance</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Limited visibility into actual employee working hours</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Concerns about employee accountability and accuracy of reported time</span>
                </li>
                <li className="flex gap-3">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Inefficient use of management time</span>
                </li>
                <li className="flex gap-3 md:col-span-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-red-500/20 flex items-center justify-center shrink-0">
                    <div className="h-2 w-2 rounded-full bg-red-500" />
                  </div>
                  <span>Difficulty balancing oversight with other responsibilities</span>
                </li>
              </ul>
              <p className="mt-8 text-muted-foreground leading-relaxed text-lg">
                This approach was not scalable and restricted management flexibility.
              </p>
            </section>

            <section>
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Solution: Location-Based Workforce System</h2>
              <p className="text-muted-foreground leading-relaxed text-lg mb-12">
                We developed a system that automates attendance tracking using geofencing and real-time data capture.
              </p>

              <div className="grid gap-8">
                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">01</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Geofenced Attendance Validation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Employees can only register attendance within a defined 50m radius of the workplace, ensuring accurate location-based validation.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">02</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Automated Check-In and Check-Out</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    The system records exact times employees arrive and leave, eliminating manual tracking.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-primary/5 border border-primary/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-primary">03</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Real-Time Management Visibility</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Management can monitor attendance and working hours remotely, without needing to be physically present.
                  </p>
                </div>

                <div className="p-8 rounded-3xl bg-accent/5 border border-accent/20 relative overflow-hidden group">
                  <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                    <span className="text-8xl font-black text-accent">04</span>
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Integrated Timesheets and Payroll Support</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Attendance data feeds directly into timesheets and payroll calculations, improving accuracy and efficiency.
                  </p>
                </div>
              </div>
            </section>

            <section className="py-12 border-t border-white/5">
              <h2 className="text-3xl font-bold text-foreground mb-8 font-headline text-center">The Impact</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10 lg:col-span-2">
                  <div className="text-4xl font-bold text-primary mb-2">90%</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Less Manual Supervision</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">Live</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Attendance Tracking</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-primary mb-2">High</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Reporting Accuracy</div>
                </div>
                <div className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                  <div className="text-4xl font-bold text-accent mb-2">+Time</div>
                  <div className="text-sm text-muted-foreground uppercase tracking-widest">Freed Management Capacity</div>
                </div>
              </div>
              <ul className="mt-8 space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Real-time attendance tracking across all employees
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Improved accountability and reporting accuracy
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Freed up management time for higher-value tasks
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  Accurate, automated records for payroll and reporting
                </li>
              </ul>
            </section>

            <section className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12">
              <h2 className="text-3xl font-bold text-foreground mb-6 font-headline">The Result</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                The company transitioned from manual oversight to a system-driven approach, allowing management to maintain control, improve accountability, and operate more efficiently without being physically present.
              </p>
            </section>

            <section className="p-12 bg-primary rounded-3xl text-center text-white">
              <h2 className="text-3xl font-bold mb-4 font-headline">Want better workforce visibility without manual oversight?</h2>
              <p className="text-primary-foreground/90 text-lg mb-8 max-w-2xl mx-auto">
                We can build a location-aware workforce system tailored to your operations so your team stays accountable at scale.
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
