import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { AlertTriangle } from "lucide-react"

export const metadata: Metadata = {
  title: "Disclaimer",
  description: "Disclaimer for Calligraphy Generator AI. Important information about AI-generated calligraphy and legacy font conversion accuracy.",
  openGraph: {
    title: "Disclaimer | Calligraphy Generator AI",
    description: "Important disclaimers about our font converters and AI calligraphy generators.",
    type: "website",
    url: "https://calligraphygeneratorai.com/disclaimer",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/disclaimer",
  },
}

export default function DisclaimerPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Disclaimer</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-yellow-500/20">
                <AlertTriangle className="h-6 w-6 text-yellow-500" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Disclaimer
              </h1>
            </div>
            <p className="max-w-3xl text-muted-foreground">
              Important information about using our font converters and AI calligraphy generators.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>AI-Generated Content</h2>
              <p>
                Our AI calligraphy generators create stylized text using algorithms and 
                pattern recognition. Please be aware that:
              </p>
              <ul>
                <li>
                  <strong>Artistic Interpretation:</strong> AI-generated calligraphy is an 
                  artistic interpretation and may not perfectly replicate traditional 
                  calligraphy techniques or styles.
                </li>
                <li>
                  <strong>Variation in Results:</strong> Output quality and style may vary 
                  depending on the input text, length, and character combinations.
                </li>
                <li>
                  <strong>Cultural Considerations:</strong> While we strive for cultural 
                  accuracy, AI-generated calligraphy should be verified by experts for 
                  important cultural, religious, or formal applications.
                </li>
              </ul>

              <h2>Font Conversion Accuracy</h2>
              <p>
                Our font converters handle standard character mappings between Unicode and 
                legacy font formats. However:
              </p>
              <ul>
                <li>
                  <strong>Complex Conjuncts:</strong> Some complex character combinations, 
                  especially rare conjuncts in Indic scripts, may not convert perfectly. 
                  Always proofread converted text.
                </li>
                <li>
                  <strong>Font Availability:</strong> Converted text requires the target 
                  font to be installed on your system to display correctly.
                </li>
                <li>
                  <strong>Encoding Variations:</strong> Different versions of legacy fonts 
                  may have slightly different character mappings. Our converters use the 
                  most common mappings.
                </li>
                <li>
                  <strong>Professional Use:</strong> For critical professional publications, 
                  we recommend having converted text reviewed by a DTP professional or 
                  language expert.
                </li>
              </ul>

              <h2>No Warranty</h2>
              <p>
                All tools and services provided by Calligraphy Generator AI are offered 
                &quot;as is&quot; without warranty of any kind, express or implied. We do not 
                guarantee:
              </p>
              <ul>
                <li>100% accuracy in font conversions</li>
                <li>Suitability of output for any particular purpose</li>
                <li>Uninterrupted availability of the service</li>
                <li>Error-free operation</li>
              </ul>

              <h2>User Responsibility</h2>
              <p>
                By using our services, you acknowledge and agree that:
              </p>
              <ul>
                <li>
                  You are responsible for verifying the accuracy of converted text before 
                  use in professional or formal contexts
                </li>
                <li>
                  You will not hold us liable for any errors, omissions, or issues arising 
                  from the use of our tools
                </li>
                <li>
                  You will ensure that your use of generated content complies with 
                  applicable laws and respects intellectual property rights
                </li>
              </ul>

              <h2>External Links</h2>
              <p>
                Our website may contain links to external websites. We are not responsible 
                for the content, privacy practices, or accuracy of external sites.
              </p>

              <h2>Updates to This Disclaimer</h2>
              <p>
                We may update this disclaimer from time to time. Continued use of our 
                services constitutes acceptance of any changes.
              </p>

              <h2>Contact</h2>
              <p>
                If you have questions about this disclaimer or need clarification about 
                our tools, please <Link href="/contact" className="text-primary hover:underline">contact us</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
