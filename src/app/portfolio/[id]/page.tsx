
"use client"

import { useParams } from "next/navigation"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { ArrowLeft, MessageSquare } from "lucide-react"
import Link from "next/link"
import { ContactDialog } from "@/components/ContactDialog"

export default function ProjectPage() {
  const { id } = useParams()
  
  return (
    <main className="min-h-screen">
      <Navbar />
      
      <div className="pt-32 pb-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <Link href="/#portfolio" className="inline-flex items-center text-muted-foreground hover:text-primary transition-colors mb-8 group">
          <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>
        
        <h1 className="text-4xl md:text-6xl font-extrabold font-headline mb-6">
          Project <span className="text-primary italic">Case Study</span>
        </h1>
        
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 md:p-12 mb-12">
          <h2 className="text-2xl font-bold mb-4">Content Coming Soon</h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            We are currently documenting the technical details, implementation process, and full impact of this project. Check back soon for the full breakdown of how <span className="text-primary font-bold">PODAfultech</span> built this custom automation engine.
          </p>
          
          <div className="p-6 bg-primary/10 border border-primary/20 rounded-2xl">
            <p className="text-primary font-medium mb-4">Interested in a similar solution for your business?</p>
            <ContactDialog>
              <Button className="gap-2">
                <MessageSquare className="h-4 w-4" />
                Schedule a Consultation
              </Button>
            </ContactDialog>
          </div>
        </div>
        
        <div className="text-center py-12 border-t border-white/5">
          <p className="text-muted-foreground mb-4">Project Identifier: <code className="text-accent font-mono">{id}</code></p>
        </div>
      </div>

      <Footer />
    </main>
  )
}
