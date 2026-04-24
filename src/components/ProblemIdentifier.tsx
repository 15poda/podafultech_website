"use client"

import { Card, CardContent } from "@/components/ui/card"
import { AlertTriangle, Clock, TrendingDown, Users, Database } from "lucide-react"

const problems = [
  {
    title: "Lost or inconsistent data",
    description: "Data spread across spreadsheets, messages, and disconnected tools makes accuracy hard to maintain.",
    icon: <Database className="h-6 w-6" />,
    color: "text-red-400"
  },
  {
    title: "Slow reporting and decision-making",
    description: "Critical reports take too long to compile, delaying action and reducing your ability to respond quickly.",
    icon: <Clock className="h-6 w-6" />,
    color: "text-orange-400"
  },
  {
    title: "Manual errors costing you money",
    description: "Repetitive manual tracking creates avoidable mistakes that hurt margins and customer trust.",
    icon: <AlertTriangle className="h-6 w-6" />,
    color: "text-yellow-400"
  },
  {
    title: "Teams working out of sync",
    description: "Departments rely on different tools and versions of the truth, causing delays and misalignment.",
    icon: <TrendingDown className="h-6 w-6" />,
    color: "text-red-500"
  },
  {
    title: "No clear visibility across departments",
    description: "Without a shared operational view, leadership struggles to monitor performance end to end.",
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
            Is your business stuck in manual operations?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            As your business grows, spreadsheets, WhatsApp messages, and disconnected tools start breaking down.
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
              <p className="text-2xl font-bold text-primary">These issues don't fix themselves-they get worse as you grow.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
