import Link from "next/link"
import { Article } from "@/config/article-registry"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, ArrowRight } from "lucide-react"

interface RelatedPostsProps {
  articles: Article[]
  currentSlug: string
}

export function RelatedPosts({ articles, currentSlug }: RelatedPostsProps) {
  if (articles.length === 0) return null

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    itemListElement: articles.map((article, index) => ({
      "@type": "ListItem",
      position: index + 1,
      item: {
        "@type": "Article",
        headline: article.title,
        url: `https://calligraphygeneratorai.com/blog/${article.slug}`,
      },
    })),
  }

  return (
    <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-bold">Related Articles</h2>
          <Link
            href="/blog"
            className="flex items-center gap-1 text-sm font-medium text-primary hover:underline"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {articles.slice(0, 6).map((article) => (
            <Link key={article.slug} href={`/blog/${article.slug}`}>
              <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                <CardHeader className="pb-3">
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {article.category}
                    </Badge>
                    <span className="flex items-center gap-1 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      {article.readingTime} min
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2 text-base">
                    {article.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="line-clamp-2 text-sm">
                    {article.excerpt}
                  </CardDescription>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Additional Related Links for SEO */}
        <div className="mt-8 rounded-lg border border-border bg-card p-6">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            More Calligraphy Resources
          </h3>
          <div className="flex flex-wrap gap-2">
            <Link href="/blog/calligraphy-letters-a-to-z" className="text-sm text-muted-foreground hover:text-primary">
              Calligraphy Alphabet A-Z
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/blog/best-pens-for-calligraphy" className="text-sm text-muted-foreground hover:text-primary">
              Best Calligraphy Pens
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/blog/types-of-calligraphy-styles" className="text-sm text-muted-foreground hover:text-primary">
              Calligraphy Styles Guide
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/blog/brush-pen-calligraphy-tutorial" className="text-sm text-muted-foreground hover:text-primary">
              Brush Pen Tutorial
            </Link>
            <span className="text-muted-foreground">•</span>
            <Link href="/generators" className="text-sm text-muted-foreground hover:text-primary">
              AI Calligraphy Generators
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
