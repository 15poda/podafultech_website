import Link from "next/link"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Cookie Policy | PODAfultech",
  description: "Podaful Technologies cookie policy with information about cookies, analytics, marketing technologies, and how users can manage preferences.",
}

export default function CookiePolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Cookie Policy</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Cookie Policy</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            This Cookie Policy explains how cookies and similar technologies may be used on the Podaful Technologies website. Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences, understand how visitors use the site, and improve the experience over time.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">What cookies may be used for</h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>Essential or necessary functionality, such as keeping the site operating properly.</li>
              <li>Analytics to understand website traffic and the performance of content.</li>
              <li>Marketing or measurement tools used to understand user behavior and campaign effectiveness.</li>
              <li>Preference-related cookies that help remember choices such as language or site settings.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Necessary and functional cookies</h2>
            <p>
              Some cookies are necessary for the website to function properly. These may help maintain a consistent experience, store information needed for navigation, or support security and basic site operations. Without these cookies, parts of the website may not work as intended.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Analytics cookies</h2>
            <p>
              We may use analytics tools such as Google Analytics and Google Tag Manager to understand how users reach the site, which pages are most useful, and how visitors navigate the website. This helps us improve content and functionality. These analytics tools may collect technical and usage-related information, subject to their own settings and policies.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Advertising and marketing cookies</h2>
            <p>
              We may also use advertising or measurement technologies where they are actually configured and used for business purposes. This may include tools such as Meta Pixel or similar services, which help us understand advertising effectiveness and user engagement. Cookie usage may change as our marketing stack evolves.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Third-party cookies</h2>
            <p>
              Third-party cookies may be placed by analytics, marketing, or embedded service providers. These providers may process information on our behalf or on their own in accordance with their privacy and cookie policies. We do not control all such technologies directly, but we aim to use them responsibly and only where relevant to our business or website operations.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">How to manage cookies</h2>
            <p>
              You can usually manage or disable cookies through your browser settings. Many browsers allow you to block cookies, delete stored cookies, or notify you when a cookie is placed. Please note that disabling certain cookies may affect your ability to use some features of the website or may limit measurement and analytics data collection.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Updates to our cookie use</h2>
            <p>
              The specific cookies used on this website may change as our services, analytics, marketing tools, and website features evolve. We may update this page when new technologies are added or when existing ones are modified.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Contact</h2>
            <p>
              If you have questions about our cookie use, please contact us at <a href="mailto:emmanuel@podafultech.com" className="text-primary underline underline-offset-4 hover:text-primary/80">emmanuel@podafultech.com</a>.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
