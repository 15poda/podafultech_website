import Link from "next/link"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Terms of Service | PODAfultech",
  description: "Website terms of service for Podaful Technologies, covering website use, acceptable conduct, and legal information.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Terms of Service</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Terms of Service</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            These Terms of Service (“Terms”) govern your access to and use of the Podaful Technologies website and related digital content. By using this website, you agree to these Terms. If you do not agree, please do not use the site.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Use of the website</h2>
            <p>
              You may use this website for lawful purposes and in a manner consistent with these Terms. You agree not to misuse the website, interfere with normal operation, attempt unauthorized access, or use the site in a way that could harm other users, our business, or third-party services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Intellectual property</h2>
            <p>
              Unless otherwise stated, the content on this website—including text, design, graphics, logos, images, and written materials—is the intellectual property of Podaful Technologies or its licensors. You may view, read, and share publicly available pages for personal or informational use, but you may not reproduce, redistribute, or commercially exploit them without appropriate permission.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Content, information, and recommendations</h2>
            <p>
              The website may include educational content, business insights, recommendations, descriptions of services, and commentary about workflows, tools, and software. Such content is provided for general informational purposes and should not be treated as a guarantee of business results or a substitute for professional advice in a specific situation.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Third-party links and services</h2>
            <p>
              Our website may link to third-party websites, tools, software providers, or business resources. These third-party websites are maintained by their respective providers, and we are not responsible for their content, practices, accuracy, or availability. We encourage you to review the terms and privacy policies of any third-party site before using it.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Acceptable use</h2>
            <p>
              You agree not to use the website to transmit harmful, unlawful, abusive, or deceptive content; to attempt to compromise the site; or to misuse any communications, forms, or contact channels. We reserve the right to restrict or remove access to anyone who engages in misuse or harmful activity.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Availability and no warranties</h2>
            <p>
              We make reasonable efforts to keep the website available and accurate, but we do not guarantee uninterrupted access, error-free performance, or the suitability of the website for any particular purpose. The website is provided on an “as is” and “as available” basis, and we disclaim warranties to the extent permitted by applicable law.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Limitation of liability</h2>
            <p>
              To the extent permitted by applicable law, Podaful Technologies and its representatives shall not be liable for any indirect, incidental, consequential, or special damages arising out of or relating to the use of the website or the content contained on it. This includes damages arising from loss of data, loss of business opportunity, or reliance on information provided here.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Changes to the website or these Terms</h2>
            <p>
              We may update the website, content, and these Terms from time to time. Continued use of the website after changes are posted indicates your acceptance of those changes. We encourage you to review this page periodically.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Governing law</h2>
            <p>
              These Terms are governed by the laws of Zimbabwe, without regard to conflict-of-laws principles, and apply to the extent permitted by applicable law. Any dispute arising from or relating to the website or these Terms will be subject to the courts of Zimbabwe, unless another applicable law or agreement requires a different forum.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Contact</h2>
            <p>
              If you have questions about these Terms, please contact us at <a href="mailto:emmanuel@podafultech.com" className="text-primary underline underline-offset-4 hover:text-primary/80">emmanuel@podafultech.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
