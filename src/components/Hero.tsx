"use client"

import { Button } from "@/components/ui/button"
import { MessageSquare, ArrowRight, Zap, Shield, Sparkles } from "lucide-react"

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-bold uppercase tracking-wider mb-8 animate-fade-in">
          <Sparkles className="h-3 w-3" />
          The Future of Efficiency is Here
        </div>
        
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight font-headline mb-6 animate-fade-in [animation-delay:200ms]">
          Automate the <span className="text-primary">Ordinary</span>.<br />
          Achieve the <span className="text-accent italic">Extraordinary</span>.
        </h1>
        
        <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-10 animate-fade-in [animation-delay:400ms]">
          We build custom-tailored automation systems that eliminate manual bottlenecks, scale your operations, and free your team to focus on what truly matters.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in [animation-delay:600ms]">
          <Button size="lg" className="h-14 px-8 text-lg font-bold gap-2">
            <MessageSquare className="h-5 w-5" />
            Chat With Us
          </Button>
          <Button size="lg" variant="outline" className="h-14 px-8 text-lg font-semibold border-white/10 hover:bg-white/5 transition-all">
            Explore Portfolio
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 text-left animate-fade-in [animation-delay:800ms]">
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Zap className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
            <p className="text-muted-foreground">Reduce manual task time by up to 90% with integrated workflows.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
              <Shield className="text-accent h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Error Proof</h3>
            <p className="text-muted-foreground">Eliminate human error in data entry and repetitive processes.</p>
          </div>
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
            <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mb-4">
              <Sparkles className="text-primary h-6 w-6" />
            </div>
            <h3 className="text-xl font-bold mb-2">Infinite Scaling</h3>
            <p className="text-muted-foreground">Systems that grow with your business without increasing headcount.</p>
          </div>
        </div>
      </div>
    </section>
  )
}