import Link from "next/link"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "About | PODAfultech",
  description: "Learn about Podaful Technologies, our custom software and automation services, and how we help business teams reduce operational friction.",
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">About PODAfultech</p>
          <h1 className="text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">We help businesses replace operational friction with practical systems.</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            Podaful Technologies helps businesses improve how they operate by building custom software, internal business systems, and process automation that fit the way a company already works. We support teams that are struggling with disconnected tools, manual coordination, spreadsheets, queueing, delayed reporting, and inconsistent day-to-day operations.
          </p>

          <p>
            In many businesses, the real issue is not only a missing app or a software tool. It is the lack of a workflow that connects the people, data, and process steps behind the business. We work with those realities to design systems that bring clarity, reduce handoff delays, and make operational decisions easier to act on.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">What we do</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Custom business software and internal tools</li>
              <li>Business process automation and workflow design</li>
              <li>AI automation for operational tasks and decision support</li>
              <li>Integrations between business systems and data sources</li>
              <li>Technology consulting and operational system audits</li>
              <li>Implementation support and recommendations for suitable software tools</li>
              <li>Business operations education and practical guidance</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Problems we help solve</h2>
            <p>
              We work with organizations that are dealing with repetitive manual work, inconsistent reporting, poor visibility across teams, outdated processes, and technology that does not match their actual operations. These challenges often get worse as the business grows, and the result can be lost time, missed opportunities, and avoidable operational stress.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Why custom systems matter</h2>
            <p>
              Off-the-shelf tools can be useful, but they do not always fit the exact workflow, approval process, reporting need, or operational nuance of a business. Custom internal systems allow a company to align software to its real processes, reduce workarounds, and create a more reliable operational foundation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">How we work</h2>
            <p>
              Our approach starts with understanding the business before recommending or building a solution. We look at the workflow, the bottlenecks, the people involved, the data in use, and the operational goals that matter most. This helps us avoid building something technically impressive but operationally mismatched.
            </p>
            <p className="mt-4">
              Where relevant, we may recommend existing software, integrations, or services that are a better fit for a business need. We also recognize that not every problem requires a custom system. Sometimes the right move is a focused process improvement, a better workflow, or a thoughtful recommendation about which tools to adopt.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Our position</h2>
            <p>
              Podaful Technologies is focused on helping businesses run more clearly, efficiently, and effectively through software, automation, and practical operational thinking. We believe that better systems are not only about technology; they are about making work easier to manage and easier to grow with.
            </p>
          </section>
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-primary">Need help with a business system?</p>
          <div className="mt-4 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link href="/contact" className="inline-flex items-center justify-center rounded-md bg-primary px-5 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Contact Podaful Technologies
            </Link>
            <Link href="/free-operations-audit" className="inline-flex items-center justify-center rounded-md border border-white/10 px-5 py-3 font-medium text-foreground transition-colors hover:border-primary/50 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background">
              Request a system audit
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  )
}
