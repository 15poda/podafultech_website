"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown, Users, Database } from "lucide-react"
import { ContactDialog } from "@/components/ContactDialog"

const problems = [
  {
    title: "Manual Data Entry",
    description: "Hours spent daily copying and pasting data between systems, leading to burnout and inevitable errors.",
    icon: <Database className="h-6 w-6" />,
    color: "text-red-400"
  },
  {
    title: "Slow Response Times",
    description: "Losing customers because inquiries sit in inboxes for hours or days instead of being handled instantly.",
    icon: <Clock className="h-6 w-6" />,
    color: "text-orange-400"
  },
  {
    title: "Inconsistent Workflows",
    description: "Processes that change depending on who's doing them, causing chaos and unpredictable outcomes.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-yellow-400"
  },
  {
    title: "High Operational Costs",
    description: "Expensive headcount spent on low-value tasks that should be handled by code, not people.",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "text-red-500"
  },
  {
    title: "Employee Burnout",
    description: "Talented team members wasting their potential on repetitive, mind-numbing administrative work.",
    icon: <Users className="h-6 w-6" />,
    color: "text-purple-400"
  }
]

export function ProblemIdentifier() {
  return (
    <section id="problems" className="py-20 bg-black/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold font-headline mb-4">
            Is your business <span className="text-primary">stuck</span> in manual gears?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Repetitive tasks are the silent killers of business growth. We identify these bottlenecks and clear the path for scale.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((problem, index) => (
            <Card key={index} className="bg-white/5 border-white/10 hover:border-primary/50 transition-all duration-300 group">
              <CardContent className="p-8">
                <div className={`mb-4 w-12 h-12 rounded-full bg-white/5 flex items-center justify-center ${problem.color}`}>
                  {problem.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{problem.title}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {problem.description}
                </p>
              </CardContent>
            </Card>
          ))}
          
          <Card className="bg-primary/5 border-primary/20 flex flex-col justify-center items-center text-center p-8 border-dashed">
            <CardContent className="p-0">
              <h3 className="text-2xl font-bold text-primary mb-2">Sound Familiar?</h3>
              <p className="text-muted-foreground mb-6">You're not alone. Let's fix it.</p>
              <ContactDialog>
                <button className="text-accent font-bold hover:underline inline-flex items-center gap-2">
                  Talk to an Expert <Clock className="h-4 w-4" />
                </button>
              </ContactDialog>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
