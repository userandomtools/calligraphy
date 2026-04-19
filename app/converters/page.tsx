import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { converterTools } from "@/config/tool-registry"
import { ArrowRight, Type, Zap, Shield, CheckCircle } from "lucide-react"

export const metadata: Metadata = {
  title: "Font Converters | Unicode to AMS, Shree Lipi, DevLys",
  description: "Free online font converters for DTP professionals. Convert Unicode to AMS, Shree Lipi, DevLys, Kruti Dev, and more legacy Indic fonts instantly.",
  keywords: ["font converter", "unicode converter", "ams converter", "shree lipi converter", "devlys converter", "hindi font converter"],
  openGraph: {
    title: "Font Converters | Unicode to AMS, Shree Lipi, DevLys",
    description: "Free online font converters for DTP professionals. Convert Unicode to legacy Indic fonts instantly.",
    type: "website",
    url: "https://calligraphygeneratorai.com/converters",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/converters",
  },
}

const features = [
  {
    icon: Zap,
    title: "Instant Conversion",
    description: "All processing happens in your browser with zero server latency.",
  },
  {
    icon: Shield,
    title: "100% Private",
    description: "Your text never leaves your device. No data is stored or transmitted.",
  },
  {
    icon: CheckCircle,
    title: "Zero Missing Glyphs",
    description: "Accurate mapping of all characters, conjuncts, and matras.",
  },
]

export default function ConvertersPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Font Converters</span>
            </nav>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              Font Converters
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
              Professional-grade Unicode to legacy font converters for DTP workflows. 
              Perfect for Pagemaker, CorelDraw, and traditional publishing systems.
            </p>
            <div className="grid gap-4 md:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex items-start gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold">All Font Converters</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {converterTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Type className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold leading-tight group-hover:text-primary">
                    {tool.shortName}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    Use Converter
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">About Our Font Converters</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Our font converters are designed for DTP professionals, publishers, and content 
                creators who work with legacy Indic font systems. Whether you need to convert 
                Unicode text to AMS fonts for Pagemaker, Shree Lipi for Marathi publishing, 
                or DevLys for government documents, our tools handle it all.
              </p>
              <h3>Supported Font Formats</h3>
              <ul>
                <li><strong>AMS Fonts:</strong> Popular in Marathi and Hindi DTP workflows</li>
                <li><strong>Shree Lipi:</strong> Industry standard for Devanagari publishing</li>
                <li><strong>DevLys:</strong> Widely used in Indian government offices</li>
                <li><strong>Kruti Dev:</strong> Classic Hindi typing font</li>
                <li><strong>Infinity:</strong> Legacy Devanagari font family</li>
                <li><strong>Anu Telugu:</strong> Telugu language publishing standard</li>
              </ul>
              <h3>Why Use Our Converters?</h3>
              <p>
                All conversions happen entirely in your browser using JavaScript. This means 
                instant results with zero latency, complete privacy (your text never leaves 
                your device), and the ability to work offline once the page is loaded.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
