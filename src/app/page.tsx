"use client"

import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ProblemIdentifier } from "@/components/ProblemIdentifier"
import { Portfolio } from "@/components/Portfolio"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { MessageSquare } from "lucide-react"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <Hero />
      
      <ProblemIdentifier />

      <section id="solutions" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">
              We replace the chaos with systems that fit your business
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Instead of forcing your operations into rigid software, we design and build systems tailored to your exact workflows.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Internal dashboards for different departments</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Inventory and stock tracking systems</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Sales and order management systems</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6">Financial and operational tracking tools</div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:col-span-2">End-to-end business workflow automation</div>
          </div>

          <p className="text-center text-muted-foreground text-lg max-w-3xl mx-auto">
            Everything is built around how your business already operates - just faster, clearer, and more reliable.
          </p>
        </div>
      </section>

      <section id="process" className="py-24 bg-black/40 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-6">A simple, proven process</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">1. System Audit</h3>
              <p className="text-muted-foreground">We map how your business actually runs and identify bottlenecks.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">2. System Blueprint</h3>
              <p className="text-muted-foreground">You get a clear breakdown of what your system will do before we build.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">3. Build &amp; Iterate</h3>
              <p className="text-muted-foreground">We develop your system with feedback from your real operations.</p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-3">4. Launch &amp; Support</h3>
              <p className="text-muted-foreground">We ensure your team adopts it and everything runs smoothly.</p>
            </div>
          </div>
        </div>
      </section>
      
      <section id="benefits" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-8">
              Built for businesses that need more than generic tools
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left">
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">1</div>
                  Custom-Tailored Systems
                </h3>
                <p className="text-muted-foreground">Every system is designed around your business - not forced templates.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">2</div>
                  Operational Focus
                </h3>
                <p className="text-muted-foreground">We understand workflows, not just code.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">3</div>
                  Scalable Solutions
                </h3>
                <p className="text-muted-foreground">Your system grows as your business grows.</p>
              </div>
              <div className="space-y-4">
                <h3 className="text-xl font-bold flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary">4</div>
                  Direct Collaboration
                </h3>
                <p className="text-muted-foreground">You work directly with the developer building your system.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Portfolio />

      <section id="testimonials" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-14">
            <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
              Trusted by Businesses Like Yours
            </h2>
            <p className="text-muted-foreground text-lg">
              What clients say after replacing manual work with systems built around their operations.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="rounded-3xl border border-primary/20 bg-primary/5 p-8">
              <div className="border-b border-white/10 pb-5 mb-6">
                <p className="font-bold">Ruth M</p>
                <p className="text-sm text-muted-foreground">Director, Realz Credit</p>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                "Before Lendflow, we were managing everything in spreadsheets and it was becoming difficult to keep track as we grew. The system has made things much easier, everything is now in one place, and we don't have to worry about errors or missed updates. It's improved how we manage our operations."
              </p>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
              <div className="border-b border-white/10 pb-5 mb-6">
                <p className="font-bold">Emmanuel T</p>
                <p className="text-sm text-muted-foreground">Founder, Manloc Glass And Aluminium</p>
              </div>
              <p className="text-lg leading-relaxed text-foreground">
                "Project flows are now smoother because this system makes one source of truth for all departments, cutting out errors and the need for too many reconciliation meetings that we used to have before we had this."
              </p>
            </div>


          </div>
        </div>
      </section>

      <section className="py-24 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-extrabold text-white font-headline mb-6">
            Ready to replace spreadsheets with a real system?
          </h2>
          <p className="text-primary-foreground/90 text-xl mb-10 max-w-2xl mx-auto">
            If your business is growing but your tools are holding you back, it's time to build something that actually fits.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Button size="lg" variant="secondary" className="h-16 px-10 text-xl font-bold gap-3 shadow-xl hover:scale-105 transition-transform" asChild>
              <a href="/free-operations-audit">
                <MessageSquare className="h-6 w-6" />
                Get Your Free System Audit
              </a>
            </Button>
          </div>
          <p className="mt-8 text-primary-foreground/70 text-sm">
            We'll review your current setup and show you exactly where a custom system can improve your operations.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  )
}
