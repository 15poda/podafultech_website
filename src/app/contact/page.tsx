import Link from "next/link"
import { Mail, MapPin } from "lucide-react"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Contact | PODAfultech",
  description: "Contact Podaful Technologies about custom software, automation, system audits, and business technology consulting.",
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Let’s talk about the systems your business needs.</h1>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr]">
          <section className="rounded-2xl border border-white/10 bg-white/5 p-8">
            <h2 className="mb-4 text-2xl font-bold text-foreground">Start a conversation</h2>
            <p className="text-base leading-8 text-muted-foreground">
              Whether you are reviewing your current operations, exploring automation opportunities, or looking for a custom internal system, Podaful Technologies is happy to hear about your business challenge. We can discuss what is working, what is slowing things down, and which approach may be a practical fit.
            </p>

            <div className="mt-8 space-y-4">
              <div className="flex items-start gap-3 text-muted-foreground">
                <Mail className="mt-1 h-5 w-5 text-primary" />
                <a href="mailto:emmanuel@podafultech.com" className="text-base hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
                  emmanuel@podafultech.com
                </a>
              </div>
              <div className="flex items-start gap-3 text-muted-foreground">
                <MapPin className="mt-1 h-5 w-5 text-primary" />
                <span>Harare, Zimbabwe</span>
              </div>
            </div>
          </section>

          <aside className="rounded-2xl border border-white/10 bg-black/20 p-8">
            <h2 className="mb-4 text-xl font-bold text-foreground">Common conversations</h2>
            <ul className="space-y-3 text-sm leading-7 text-muted-foreground">
              <li>Custom software for internal operations</li>
              <li>Workflow and process automation</li>
              <li>Business system audits and recommendations</li>
              <li>Integration between existing software tools</li>
              <li>AI and automation opportunities</li>
            </ul>
          </aside>
        </div>

        <div className="mt-10 rounded-2xl border border-primary/20 bg-primary/5 p-6">
          <p className="text-muted-foreground">
            If you are interested in a system audit, a software recommendation, or a custom solution, you can reach out by email and we will respond as appropriate.
          </p>
          <div className="mt-4">
            <Link href="/free-operations-audit" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Request a free system audit
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
