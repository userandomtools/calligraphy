import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { generatorTools } from "@/config/tool-registry"
import { ArrowRight, Sparkles, Palette, Share2, Download } from "lucide-react"

export const metadata: Metadata = {
  title: "AI Calligraphy Generators | Arabic, Hindi & Creative Text Art",
  description: "Generate stunning calligraphy art with AI. Create Arabic, Hindi, and stylish text for social media, invitations, tattoos, and creative projects. 100% free.",
  keywords: ["calligraphy generator", "arabic calligraphy", "hindi calligraphy", "stylish fonts", "text art generator", "fancy text"],
  openGraph: {
    title: "AI Calligraphy Generators | Arabic, Hindi & Creative Text Art",
    description: "Generate stunning calligraphy art with AI. Create Arabic, Hindi, and stylish text for creative projects.",
    type: "website",
    url: "https://calligraphygeneratorai.com/generators",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/generators",
  },
}

const features = [
  {
    icon: Sparkles,
    title: "AI-Powered",
    description: "Intelligent algorithms create authentic calligraphic art styles.",
  },
  {
    icon: Palette,
    title: "Multiple Styles",
    description: "Choose from cursive, bold, italic, fraktur, and more.",
  },
  {
    icon: Share2,
    title: "Social Ready",
    description: "Copy and paste directly to Instagram, Facebook, and more.",
  },
]

export default function GeneratorsPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">AI Calligraphy Generators</span>
            </nav>
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl">
              AI Calligraphy Generators
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-muted-foreground">
              Transform plain text into stunning calligraphy art. Perfect for social media, 
              invitations, tattoo designs, wall art, and creative projects.
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
            <h2 className="mb-8 text-2xl font-bold">All Calligraphy Generators</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {generatorTools.map((tool) => (
                <Link
                  key={tool.slug}
                  href={`/tools/${tool.slug}`}
                  className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
                >
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <h3 className="mb-2 font-semibold leading-tight group-hover:text-primary">
                    {tool.shortName}
                  </h3>
                  <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                    {tool.description}
                  </p>
                  <div className="flex items-center gap-1 text-sm font-medium text-primary">
                    Generate Now
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="mb-6 text-2xl font-bold">About AI Calligraphy Generation</h2>
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <p>
                Our AI-powered calligraphy generators use intelligent text-styling algorithms 
                to transform your words into beautiful artistic text. Unlike simple font 
                converters, our generators understand typography principles and cultural 
                aesthetics to create authentic-looking calligraphy.
              </p>
              <h3>What Can You Create?</h3>
              <ul>
                <li><strong>Arabic Calligraphy:</strong> Traditional Thuluth, Naskh, and Diwani styles</li>
                <li><strong>Hindi Calligraphy:</strong> Artistic Devanagari fonts for invitations and logos</li>
                <li><strong>Birthday Calligraphy:</strong> Personalized birthday messages and cards</li>
                <li><strong>Quote Art:</strong> Transform inspirational quotes into wall-worthy art</li>
                <li><strong>Stylish Text:</strong> Fancy fonts for social media profiles and posts</li>
              </ul>
              <h3>Use Cases</h3>
              <p>
                Our generated calligraphy is perfect for social media graphics, wedding 
                invitations, greeting cards, tattoo designs, logo inspiration, wall art, 
                t-shirt designs, and any creative project requiring beautiful typography.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
