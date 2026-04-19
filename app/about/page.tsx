import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { Sparkles, Target, Heart, Users, Zap, Shield, Globe, CheckCircle2, Lightbulb, ExternalLink } from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Meet the Creator Behind Calligraphy Generator AI",
  description: "Learn about Ziven Borceg and the vision behind Calligraphy Generator AI - the platform bridging legacy Indic typography and modern AI calligraphy generation.",
  openGraph: {
    title: "About Us | Meet the Creator Behind Calligraphy Generator AI",
    description: "Learn about Ziven Borceg and the vision behind Calligraphy Generator AI.",
    type: "website",
    url: "https://calligraphygeneratorai.com/about",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/about",
  },
}

const uniqueFeatures = [
  {
    icon: Zap,
    title: "All Tools in One Place",
    description: "Stop switching between different websites for font conversions and calligraphy generation. Everything you need is here."
  },
  {
    icon: CheckCircle2,
    title: "One-Click Simplicity",
    description: "No complicated settings or overwhelming options. Paste your text, click convert, and get instant results."
  },
  {
    icon: Shield,
    title: "Fast & Privacy-First",
    description: "All processing happens in your browser. Your text is never uploaded to any server - zero latency, complete privacy."
  },
  {
    icon: Globe,
    title: "Built for Real Users",
    description: "Designed with input from DTP professionals, graphic designers, and calligraphy enthusiasts who actually use these tools daily."
  }
]

const values = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To bridge the gap between legacy Indic typography systems and modern digital publishing, while making beautiful calligraphy accessible to everyone through AI technology.",
  },
  {
    icon: Heart,
    title: "Our Passion",
    description:
      "We are passionate about preserving cultural typography traditions while embracing modern technology. Every converter and generator we build honors the rich history of Indic scripts.",
  },
  {
    icon: Users,
    title: "Who We Serve",
    description:
      "From DTP professionals needing legacy font support to artists seeking creative calligraphy tools, we serve anyone who works with beautiful typography.",
  },
]

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    mainEntity: {
      "@type": "Organization",
      name: "Calligraphy Generator AI",
      url: "https://calligraphygeneratorai.com",
      description: "AI-powered calligraphy generation and Indic font conversion platform",
      founder: {
        "@type": "Person",
        name: "Ziven Borceg",
        url: "https://medium.com/@zivenborceg"
      }
    }
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Hero Section */}
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">About Us</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <Sparkles className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                About Us
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Building the bridge between legacy typography and modern AI-powered calligraphy generation.
            </p>
          </div>
        </section>

        {/* About the Author */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-border bg-card p-8 md:p-10">
              <h2 className="mb-6 text-2xl font-bold">About the Creator</h2>
              <div className="prose prose-neutral dark:prose-invert max-w-none">
                <p className="text-lg leading-relaxed">
                  Hi, I&apos;m <strong>Ziven Borceg</strong>. I&apos;m a creator, builder, and problem-solver 
                  who believes that powerful tools should be simple to use and accessible to everyone.
                </p>
                <p>
                  My background spans typography, web development, and AI technologies. I&apos;ve spent years 
                  working with Indic scripts and understanding the challenges faced by DTP professionals, 
                  publishers, and designers who work with legacy font systems daily.
                </p>
                <p>
                  I built Calligraphy Generator AI to solve real problems I witnessed firsthand - 
                  professionals struggling with font conversions, artists wanting quick calligraphy tools, 
                  and creators needing beautiful typography without complex software.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How the Idea Came */}
        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Lightbulb className="h-5 w-5" />
              </div>
              <h2 className="text-2xl font-bold">How Did This Idea Come to Me?</h2>
            </div>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p className="text-lg leading-relaxed">
                The idea for Calligraphy Generator AI came from frustration - the good kind that drives 
                you to build something better.
              </p>
              <p>
                I watched DTP professionals waste countless hours switching between different websites 
                for font conversions. One site for Unicode to AMS, another for Shree Lipi, yet another 
                for DevLys. Each with its own quirks, different interfaces, and varying reliability.
              </p>
              <p>
                At the same time, I saw artists and social media creators searching for quick ways to 
                generate beautiful calligraphy. Most existing tools were either too complex, required 
                expensive software, or produced mediocre results.
              </p>
              <p>
                <strong>The realization hit me:</strong> What if there was a single platform that combined 
                reliable font conversion tools with AI-powered calligraphy generation? What if it was free, 
                fast, and respected user privacy by processing everything locally?
              </p>
              <p>
                That question led to months of development, testing with real users, and iterating based 
                on feedback. The result is what you see today - a platform built by someone who genuinely 
                understands the problems it solves.
              </p>
            </div>
          </div>
        </section>

        {/* What Makes It Unique */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">What Makes It Unique?</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {uniqueFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="flex gap-4 rounded-xl border border-border bg-card p-6"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <feature.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h3 className="mb-2 font-semibold">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Vision / Mission */}
        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-center text-2xl font-bold">Our Values</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {values.map((value) => (
                <div
                  key={value.title}
                  className="rounded-xl border border-border bg-card p-6"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <value.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Data */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">Our Commitment to Quality</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Every converter on this platform is built with deep understanding of Indic script 
                typography. We handle complex conjuncts, matras, and language-specific conventions 
                correctly because we&apos;ve studied these scripts extensively.
              </p>
              <p>
                Our AI calligraphy generators are trained to produce culturally accurate results. 
                Whether you&apos;re creating Arabic calligraphy, Hindi lettering, or birthday art, the 
                output respects the artistic traditions behind each style.
              </p>
              <p>
                We continuously improve our tools based on user feedback. If something isn&apos;t working 
                correctly or you have a suggestion, we genuinely want to hear from you.
              </p>
            </div>
          </div>
        </section>

        {/* Connect Section */}
        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4 text-center">
            <h2 className="mb-4 text-2xl font-bold">Connect With Me</h2>
            <p className="mb-6 text-muted-foreground">
              I love hearing from users - whether it&apos;s feedback, feature requests, or just saying hello.
            </p>
            <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <a
                href="https://medium.com/@zivenborceg"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-card border border-border px-6 py-3 font-medium transition-colors hover:bg-secondary"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                </svg>
                Follow me on Medium
                <ExternalLink className="h-4 w-4" />
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Get in Touch
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
