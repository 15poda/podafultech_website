"use client"

import { Navbar } from "@/components/Navbar"

interface HeaderProps {
  title: string
}

export function Header({ title }: HeaderProps) {
  return (
    <>
      <Navbar />
      <div className="pt-32 pb-12 bg-primary/5 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4">
            <div className="h-8 w-1 bg-primary rounded-full" />
            <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
          </div>
        </div>
      </div>
    </>
  )
}
