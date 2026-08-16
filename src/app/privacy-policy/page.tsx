import Link from "next/link"
import { Footer } from "@/components/Footer"

export const metadata = {
  title: "Privacy Policy | PODAfultech",
  description: "Podaful Technologies privacy policy explaining what information may be collected, how it is used, and how to contact us with privacy questions.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-4xl px-4 py-20 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary">Privacy Policy</p>
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">Privacy Policy</h1>
        </div>

        <div className="space-y-8 text-base leading-8 text-muted-foreground">
          <p>
            This Privacy Policy explains how Podaful Technologies (“Podafultech,” “we,” “our,” or “us”) collects, uses, stores, and protects information when you visit our website, interact with our content, contact us, or otherwise engage with our digital services.
          </p>

          <p>
            We encourage you to review this policy carefully. We may update it from time to time as our services, technologies, and business practices evolve. If we make material changes, we will update the date below and, where appropriate, revise the information on this page.
          </p>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Information we may collect</h2>
            <p>
              We may collect information you voluntarily provide directly to us, as well as certain technical information automatically generated through your interaction with our website.
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Contact information such as name, email address, company name, or business details you provide through forms or email.</li>
              <li>Information submitted through service inquiry forms, audit requests, or newsletter opt-ins.</li>
              <li>Website usage information such as pages visited, device type, browser type, time spent on pages, and referring website details.</li>
              <li>Diagnostic and performance information that helps us understand how the site is functioning.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Information you provide voluntarily</h2>
            <p>
              If you contact us, request a consultation, submit a form, or subscribe to communications, we may collect information such as your name, email address, company name, and the details of your inquiry. We use this information to respond to your request, understand your business needs, and provide the services or information you asked for.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Analytics and cookies</h2>
            <p>
              Our website may use analytics and similar technologies to understand traffic patterns, popular content, and how visitors use the site. This may include tools such as Google Analytics and Google Tag Manager, and may in some cases involve advertising or measurement technologies such as Meta Pixel or similar services, depending on what is configured and used at a given time.
            </p>
            <p className="mt-4">
              Cookies and similar technologies may be used for functionality, analytics, measurement, or marketing-related purposes. Some cookies are necessary for basic website operation, while others help us understand performance, improve the user experience, and measure how people engage with our content.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">How we use information</h2>
            <p>
              We may use information collected through the website to:
            </p>
            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Respond to inquiries and communicate with users about services, requests, or business questions.</li>
              <li>Provide website functionality and improve the user experience.</li>
              <li>Understand website performance, user flow, and content engagement.</li>
              <li>Assess marketing and outreach effectiveness.</li>
              <li>Improve our content, products, services, and recommendations.</li>
              <li>Manage subscriptions, follow-up communications, and opt-in marketing lists where the user has clearly agreed to receive them.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Third parties and service providers</h2>
            <p>
              We may use third-party service providers to help us operate the website, analyze traffic, send email communications, and support business operations. These providers may process information on our behalf in accordance with their own privacy practices and contractual obligations. Examples may include website analytics, marketing and measurement tools, email providers, and customer relationship management or automation tools where applicable.
            </p>
            <p className="mt-4">
              Where Google Analytics, Google Tag Manager, Meta Pixel, or similar technologies are used, those tools may collect device, browser, and usage information in line with their applicable settings and policies. We do not sell personal data in the ordinary course of our business, and this policy is intended to describe typical uses in a general way.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Data retention</h2>
            <p>
              We keep information only for as long as needed to fulfill the purpose for which it was collected, comply with legal or business obligations, resolve disputes, and maintain reasonable business records. Retention periods may vary depending on the type of information and the purpose for which it was gathered.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Security</h2>
            <p>
              We take reasonable administrative, technical, and organizational measures designed to protect information from unauthorized access, misuse, and loss. However, no method of transmission or storage is completely secure, and we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Your rights and choices</h2>
            <p>
              Where applicable under local law, you may have the right to access, correct, delete, or restrict the processing of your personal information, or to object to certain processing activities. If you are receiving marketing communications from us, you may unsubscribe at any time using the unsubscribe link in the communication or by contacting us directly.
            </p>
            <p className="mt-4">
              If you are using browser controls or privacy tools, you may be able to manage cookies and similar technologies in your browser or device settings. Please note that disabling some technologies may affect the functionality or analytics of the website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Contact for privacy questions</h2>
            <p>
              If you have questions about this Privacy Policy or how your information is handled, please contact us at <a href="mailto:emmanuel@podafultech.com" className="text-primary underline underline-offset-4 hover:text-primary/80">emmanuel@podafultech.com</a>.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-bold text-foreground">Updates to this policy</h2>
            <p>
              This policy may be updated from time to time as our services, tools, and compliance practices change. Continued use of the website after an update indicates your acceptance of the revised policy.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </main>
  )
}
