"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { MessageCircle, MessageSquare } from "lucide-react"

interface ContactDialogProps {
  children: React.ReactNode
}

export function ContactDialog({ children }: ContactDialogProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-background border-white/10">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">Choose your preferred channel</DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-1 gap-4 py-4">
          <Button 
            variant="outline" 
            className="h-20 text-lg font-bold flex items-center justify-start gap-4 px-6 border-white/10 hover:bg-primary/10 hover:border-primary/50 transition-all"
            onClick={() => window.open("https://wa.link/zaaabr", "_blank")}
          >
            <div className="w-12 h-12 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
              <MessageCircle className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-white">WhatsApp</div>
              <div className="text-sm font-normal text-muted-foreground">Chat with us on WhatsApp</div>
            </div>
          </Button>
          
          <Button 
            variant="outline" 
            className="h-20 text-lg font-bold flex items-center justify-start gap-4 px-6 border-white/10 hover:bg-blue-500/10 hover:border-blue-500/50 transition-all"
            onClick={() => window.open("https://m.me/537466229454348", "_blank")}
          >
            <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500">
              <MessageSquare className="h-6 w-6" />
            </div>
            <div className="text-left">
              <div className="text-white">Messenger</div>
              <div className="text-sm font-normal text-muted-foreground">Reach out via Facebook Messenger</div>
            </div>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}
