"use client"

import { Cpu, Mail, MapPin, Twitter, Linkedin, Github } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-black/80 border-t border-white/5 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Cpu className="text-primary-foreground h-5 w-5" />
              </div>
              <span className="text-2xl font-bold tracking-tight font-headline">
                Automation<span className="text-primary">Ace</span>
              </span>
            </div>
            <p className="text-muted-foreground text-lg max-w-sm mb-8">
              Empowering businesses through custom automation and sophisticated engineering. Building the autonomous future, one workflow at a time.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-primary/20 transition-colors">
                <Github className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#problems" className="text-muted-foreground hover:text-primary transition-colors">Problems</a></li>
              <li><a href="#portfolio" className="text-muted-foreground hover:text-primary transition-colors">Portfolio</a></li>
              <li><a href="#benefits" className="text-muted-foreground hover:text-primary transition-colors">Benefits</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-primary transition-colors">Process</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                hello@automationace.io
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                Innovation Hub, San Francisco
              </li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Automation Ace. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-xs text-muted-foreground hover:text-white">Privacy Policy</a>
            <a href="#" className="text-xs text-muted-foreground hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}