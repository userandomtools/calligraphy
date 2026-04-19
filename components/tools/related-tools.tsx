import Link from "next/link"
import { ArrowRight, Type, Sparkles } from "lucide-react"
import type { Tool } from "@/config/tool-registry"

interface RelatedToolsProps {
  tools: Tool[]
  currentSlug: string
}

export function RelatedTools({ tools, currentSlug }: RelatedToolsProps) {
  const filteredTools = tools.filter((tool) => tool.slug !== currentSlug)

  if (filteredTools.length === 0) return null

  // Determine primary category for the "Browse All" CTA
  const primaryCategory = filteredTools[0]?.category === "converter" ? "converters" : "generators"
  const primaryCategoryLabel = primaryCategory === "converters" ? "Font Converters" : "AI Generators"

  return (
    <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-center">
          <h2 className="text-2xl font-bold tracking-tight md:text-3xl">
            You May Also Like
          </h2>
          <Link
            href={`/${primaryCategory}`}
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
          >
            Browse All {primaryCategoryLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredTools.slice(0, 6).map((tool) => {
            const Icon = tool.category === "converter" ? Type : Sparkles
            return (
              <Link
                key={tool.slug}
                href={`/tools/${tool.slug}`}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
              >
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-2 py-0.5 text-xs font-medium capitalize text-muted-foreground">
                    {tool.category}
                  </span>
                </div>
                <h3 className="mb-2 font-semibold leading-tight group-hover:text-primary">
                  {tool.shortName}
                </h3>
                <p className="mb-4 flex-1 text-sm text-muted-foreground line-clamp-2">
                  {tool.description}
                </p>
                <div className="flex items-center gap-1 text-sm font-medium text-primary">
                  Use Tool
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
