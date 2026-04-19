import Link from "next/link"
import { ArrowRight, Type, Sparkles, TrendingUp } from "lucide-react"
import { tools } from "@/config/tool-registry"

// Curated selection of popular tools — 3 converters + 3 generators
const popularSlugs = [
  "unicode-to-ams",
  "unicode-to-shree-lipi",
  "unicode-to-devlys",
  "arabic-calligraphy-generator",
  "hindi-calligraphy-generator",
  "stylish-hindi-fonts",
]

export function PopularTools() {
  const popularTools = popularSlugs
    .map((slug) => tools.find((t) => t.slug === slug))
    .filter(Boolean)

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm font-medium">
            <TrendingUp className="h-4 w-4 text-primary" />
            Most Popular
          </div>
          <h2 className="mb-3 text-3xl font-bold tracking-tight md:text-4xl">
            Popular Tools
          </h2>
          <p className="mx-auto max-w-2xl text-muted-foreground">
            Our most-used font converters and calligraphy generators — trusted by thousands of DTP professionals, designers, and content creators every day.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {popularTools.map((tool) => {
            if (!tool) return null
            const Icon = tool.category === "converter" ? Type : Sparkles
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group relative flex flex-col rounded-xl border border-border bg-card p-6 transition-all hover:border-primary/50 hover:shadow-lg"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full border border-border bg-secondary/50 px-2.5 py-0.5 text-xs font-medium capitalize text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mb-2 text-lg font-semibold leading-tight group-hover:text-primary">
                  {tool.shortName}
                </h3>
                <p className="mb-5 flex-1 text-sm text-muted-foreground line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  {tool.category === "converter" ? "Convert Now" : "Generate Now"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/converters"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Type className="h-4 w-4" />
            Browse All Converters
          </Link>
          <Link
            href="/generators"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card px-5 py-2.5 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
          >
            <Sparkles className="h-4 w-4" />
            Browse All Generators
          </Link>
        </div>
      </div>
    </section>
  )
}
