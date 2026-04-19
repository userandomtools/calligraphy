import Link from "next/link"
import { ArrowRight, Type, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { Tool, ToolCategory } from "@/config/tool-registry"

interface ToolsGridProps {
  title: string
  description: string
  tools: Tool[]
  category: ToolCategory
}

export function ToolsGrid({ title, description, tools, category }: ToolsGridProps) {
  const Icon = category === "converter" ? Type : Sparkles
  const categoryPath = category === "converter" ? "/converters" : "/generators"

  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <h2 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl">
              {title}
            </h2>
            <p className="max-w-2xl text-muted-foreground">{description}</p>
          </div>
          <Button variant="outline" asChild>
            <Link href={categoryPath} className="gap-2">
              View All
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {tools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="group flex flex-col rounded-xl border border-border bg-card p-5 transition-all hover:border-primary/50 hover:shadow-md"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon className="h-5 w-5" />
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
          ))}
        </div>
      </div>
    </section>
  )
}
