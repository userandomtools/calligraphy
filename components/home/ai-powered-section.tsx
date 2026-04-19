import { Brain, Palette, Languages, Zap } from "lucide-react"

const features = [
  {
    icon: Brain,
    title: "AI-Powered Generation",
    description:
      "Our advanced Calligraphy Generator AI uses intelligent text-styling algorithms to create authentic Arabic, Hindi, and English calligraphy art.",
  },
  {
    icon: Palette,
    title: "Multiple Art Styles",
    description:
      "Generate Arabic Calligraphy in Thuluth, Naskh, and Diwani styles. Create stylish Hindi fonts with traditional and modern aesthetics.",
  },
  {
    icon: Languages,
    title: "Multi-Script Support",
    description:
      "Full support for Devanagari, Arabic, Telugu, and Latin scripts. Perfect conjunct handling for complex Indic typography.",
  },
  {
    icon: Zap,
    title: "Instant Processing",
    description:
      "All conversions run client-side for 0ms latency. No server wait times, no data uploads. Your text stays on your device.",
  },
]

export function AIPoweredSection() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Powered by <span className="text-primary">AI Technology</span>
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Our Calligraphy Generator AI engine combines machine learning with traditional typography rules to produce stunning, culturally accurate results.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
