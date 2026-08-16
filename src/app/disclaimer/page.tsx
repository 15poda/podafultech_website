import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Disclaimer | PODAfultech",
  description: "General disclaimer for the Podaful Technologies website, covering informational content, business recommendations, and third-party services.",
}

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Disclaimer</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Disclaimer</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            The content on this website, including blog posts, articles, case studies, recommendations, and service descriptions, is provided for general informational and educational purposes only. It is not intended to be a substitute for independent business analysis, professional advice, or a decision-making framework specific to any particular company or context.
          </p>

          <p>
            Recommendations regarding software, automation tools, workflows, integrations, or business systems are educational and may not apply to every business. A business should evaluate the suitability of any tool or approach based on its own operations, risk profile, staff, and goals.
          </p>

          <p>
            Technical and business recommendations on this website are not guarantees of a particular result, outcome, performance improvement, revenue impact, or operational success. Actual results may vary depending on business context, implementation quality, team adoption, and other factors.
          </p>

          <p>
            Third-party products, tools, and services discussed on this website are controlled by their respective providers. We do not control their pricing, features, availability, security, support, or performance, and these details may change without notice.
          </p>

          <p>
            Content may become outdated as businesses, software, and technology evolve. We make reasonable efforts to keep information current, but we cannot guarantee that all information remains fully accurate, complete, or current at all times.
          </p>

          <p>
            Nothing on this website should be interpreted as legal, financial, tax, accounting, regulatory, or professional advice unless explicitly stated otherwise in a separate written agreement or specific content. If you require specialist advice for a legal, financial, or compliance matter, you should consult appropriate professionals.
          </p>

          <p>
            If you have questions about the information on this website, please contact us at <a href="mailto:emmanuel@podafultech.com" className="text-primary underline underline-offset-4 hover:text-primary/80">emmanuel@podafultech.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
