"use client"

import { Button } from "@/components/ui/button"
import { Cpu, MessageSquare } from "lucide-react"
import Link from "next/link"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center shadow-lg shadow-primary/20">
              <Cpu className="text-primary-foreground h-6 w-6" />
            </div>
            <span className="text-xl font-bold tracking-tight font-headline">
              PODAful<span className="text-primary">tech</span>
            </span>
          </div>
          
          <div className="hidden md:flex items-center gap-8">
            <Link href="#problems" className="text-sm font-medium hover:text-primary transition-colors">Problems</Link>
            <Link href="#portfolio" className="text-sm font-medium hover:text-primary transition-colors">Portfolio</Link>
            <Link href="#benefits" className="text-sm font-medium hover:text-primary transition-colors">Benefits</Link>
          </div>

          <div>
            <Button className="font-semibold gap-2">
              <MessageSquare className="h-4 w-4" />
              Chat With Us
            </Button>
          </div>
        </div>
      </div>
    </nav>
  )
}
