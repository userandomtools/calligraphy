import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Calligraphy Generator AI. Read about the terms and conditions for using our font converters and AI calligraphy generators.",
  openGraph: {
    title: "Terms of Service | Calligraphy Generator AI",
    description: "Terms and conditions for using Calligraphy Generator AI.",
    type: "website",
    url: "https://calligraphygeneratorai.com/terms-of-service",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/terms-of-service",
  },
}

export default function TermsOfServicePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Terms of Service</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Terms of Service
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Agreement to Terms</h2>
              <p>
                By accessing or using Calligraphy Generator AI (&quot;the Service&quot;), you agree 
                to be bound by these Terms of Service. If you do not agree to these terms, 
                please do not use the Service.
              </p>

              <h2>Description of Service</h2>
              <p>
                Calligraphy Generator AI provides online tools for:
              </p>
              <ul>
                <li>Converting text between Unicode and legacy Indic font formats</li>
                <li>Generating calligraphy art using AI-powered algorithms</li>
                <li>Creating stylized text for creative purposes</li>
              </ul>

              <h2>Use License</h2>
              <p>
                We grant you a limited, non-exclusive, non-transferable, revocable license 
                to use the Service for personal and commercial purposes, subject to these 
                Terms.
              </p>
              <p>You may:</p>
              <ul>
                <li>Use the converted text and generated calligraphy in personal projects</li>
                <li>Use the output in commercial projects</li>
                <li>Share the output on social media and other platforms</li>
              </ul>
              <p>You may not:</p>
              <ul>
                <li>Attempt to reverse engineer or copy the Service</li>
                <li>Use automated tools to mass-scrape or overload the Service</li>
                <li>Use the Service for any illegal purpose</li>
                <li>Misrepresent the Service or claim ownership of our technology</li>
              </ul>

              <h2>Output and Intellectual Property</h2>
              <p>
                Text that you input into our tools remains your property. The converted 
                or generated output may be used freely by you for any purpose. However, 
                you acknowledge that:
              </p>
              <ul>
                <li>
                  Similar outputs may be generated for other users who input similar text
                </li>
                <li>
                  The underlying algorithms and technology remain our intellectual property
                </li>
                <li>
                  You are responsible for ensuring your use of the output does not 
                  infringe on others&apos; rights
                </li>
              </ul>

              <h2>Accuracy Disclaimer</h2>
              <p>
                While we strive for accuracy in our font conversions and calligraphy 
                generation:
              </p>
              <ul>
                <li>
                  We do not guarantee 100% accuracy in font conversions, especially for 
                  complex conjuncts and rare character combinations
                </li>
                <li>
                  AI-generated calligraphy is artistic interpretation and may not perfectly 
                  replicate traditional calligraphy styles
                </li>
                <li>
                  We recommend proofreading converted text before professional use
                </li>
              </ul>

              <h2>Limitation of Liability</h2>
              <p>
                The Service is provided &quot;as is&quot; without warranties of any kind. To the 
                fullest extent permitted by law:
              </p>
              <ul>
                <li>
                  We are not liable for any direct, indirect, incidental, or consequential 
                  damages arising from your use of the Service
                </li>
                <li>
                  We are not responsible for errors in converted text or generated content
                </li>
                <li>
                  We are not liable for any losses resulting from reliance on our tools
                </li>
              </ul>

              <h2>Indemnification</h2>
              <p>
                You agree to indemnify and hold harmless Calligraphy Generator AI, its 
                operators, and affiliates from any claims, damages, or expenses arising 
                from your use of the Service or violation of these Terms.
              </p>

              <h2>Modifications to Service</h2>
              <p>
                We reserve the right to modify, suspend, or discontinue any part of the 
                Service at any time without notice. We are not liable for any modification, 
                suspension, or discontinuation of the Service.
              </p>

              <h2>Changes to Terms</h2>
              <p>
                We may update these Terms from time to time. Continued use of the Service 
                after changes constitutes acceptance of the new Terms.
              </p>

              <h2>Governing Law</h2>
              <p>
                These Terms are governed by applicable laws. Any disputes shall be resolved 
                in accordance with applicable legal procedures.
              </p>

              <h2>Contact</h2>
              <p>
                For questions about these Terms, please contact us through 
                our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
