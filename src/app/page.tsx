"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProblemIdentifier } from "@/components/ProblemIdentifier"
import { Portfolio } from "@/components/Portfolio"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { MessageSquare, Rocket } from "lucide-react"
import { ContactDialog } from "@/components/ContactDialog"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <ProblemIdentifier />
      
      <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8">
              Why Choose <span className="text-primary">PODAfultech</span>?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</div>
                  Custom Tailored
                </h3>
                <p className="text-muted-foreground">We don't do cookie-cutter. Every workflow is built specifically for your business logic and existing tech stack.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</div>
                  No-Code & Pro-Code
                </h3>
                <p className="text-muted-foreground">We use the best tool for the job. From simple Make/Zapier automations to custom Python microservices.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</div>
                  Support & Scaling
                </h3>
                <p className="text-muted-foreground">We don't just ship and dip. We provide ongoing support to ensure your systems evolve as you grow.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">4</div>
                  Security First
                </h3>
                <p className="text-muted-foreground">Your data is precious. We implement enterprise-grade security protocols for every integration.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white font-headline mb-6">
            Ready to <span className="italic">accelerate</span>?
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            Stop losing time to manual work. Our experts are ready to build the automation engine your business deserves.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <ContactDialog>
              <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold gap-3 shadow-xl hover:scale-105 transition-transform">
                <MessageSquare className="h-6 w-6" />
                Start Free Consultation
              </Button>
            </ContactDialog>
            <ContactDialog>
              <Button size="lg" variant="outline" className="h-16 px-10 text-xl font-bold bg-white/10 text-white border-white/20 hover:bg-white/20 gap-3">
                <Rocket className="h-6 w-6" />
                Chat With An Expert
              </Button>
            </ContactDialog>
          </div>
          <p className="mt-8 text-primary-foreground/70 text-sm">
            Avg. response time: Under 15 minutes during business hours.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
