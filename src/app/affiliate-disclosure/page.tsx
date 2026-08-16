import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Affiliate Disclosure | PODAfultech",
  description: "Affiliate disclosure for Podaful Technologies, explaining how affiliate relationships may affect recommendations and content.",
}

export default function AffiliateDisclosurePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Affiliate Disclosure</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Affiliate Disclosure</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            Podaful Technologies may occasionally recommend software, services, or tools that are relevant to a business need discussed on this website or in our content. In some cases, we may participate in affiliate programs and may receive a commission, referral fee, or other compensation if a reader purchases or signs up for a service through an affiliate link.
          </p>

          <p>
            This does not necessarily increase the customer’s cost, and the price paid by the customer may remain the same or may be unchanged. However, the business may compensate Podaful Technologies if a purchase is made through the affiliate link.
          </p>

          <p>
            Affiliate relationships do not mean that every recommendation is appropriate for every business. A recommendation should be evaluated based on the reader’s own needs, business context, requirements, and risk tolerance.
          </p>

          <p>
            We aim to use affiliate relationships only where they may be genuinely useful and relevant to the topic being discussed. We do not accept payment in exchange for guaranteed positive reviews or endorsements of products that we have not reasonably assessed.
          </p>

          <p>
            The software, pricing, features, and availability of third-party tools may change without notice. Readers should review the latest details directly with the provider before making a purchase or commitment.
          </p>

          <p>
            If you have questions about our affiliate relationships, please contact us at <a href="mailto:emmanuel@podafultech.com" className="text-primary underline underline-offset-4 hover:text-primary/80">emmanuel@podafultech.com</a>.
          </p>
        </div>
      </div>
      <Footer />
    </main>
  )
}
