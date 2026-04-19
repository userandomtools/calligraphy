import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { articles, articleCategories } from "@/config/article-registry"
import { BookOpen, Calendar, Clock, ArrowRight, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export const metadata: Metadata = {
  title: "Calligraphy Blog | Learn Hand Lettering & Typography",
  description: "Master calligraphy with our comprehensive guides, tutorials, and tips. From beginner basics to advanced techniques, learn beautiful hand lettering.",
  keywords: ["calligraphy blog", "hand lettering tutorials", "calligraphy tips", "learn calligraphy", "calligraphy guides"],
  openGraph: {
    title: "Calligraphy Blog | Learn Hand Lettering & Typography",
    description: "Master calligraphy with our comprehensive guides, tutorials, and tips.",
    type: "website",
    url: "https://calligraphygeneratorai.com/blog",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/blog",
  },
}

export default function BlogPage() {
  const featuredArticles = articles.slice(0, 3)
  const recentArticles = articles.slice(3, 12)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Blog</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                Calligraphy Blog
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              Master the art of beautiful lettering with our comprehensive guides, tutorials, and expert tips. From alphabet basics to advanced techniques.
            </p>
          </div>
        </section>

        {/* Featured Articles */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold">Featured Guides</h2>
            <div className="grid gap-6 md:grid-cols-3">
              {featuredArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="secondary">{article.category}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Clock className="h-3 w-3" />
                          {article.readingTime} min read
                        </span>
                      </div>
                      <CardTitle className="line-clamp-2 text-lg">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" })}
                        </span>
                        <span className="flex items-center gap-1 text-sm font-medium text-primary">
                          Read More <ArrowRight className="h-4 w-4" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="border-t border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold">Browse by Category</h2>
            <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {articleCategories.map((category) => {
                const count = articles.filter((a) => a.category === category.name).length
                return (
                  <Link key={category.slug} href={`/blog/category/${category.slug}`}>
                    <div className="rounded-lg border border-border bg-card p-4 transition-all hover:border-primary hover:shadow-md">
                      <h3 className="font-semibold">{category.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{category.description}</p>
                      <p className="mt-2 text-xs text-primary">{count} articles</p>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </section>

        {/* All Articles */}
        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-8 text-2xl font-bold">All Articles</h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {recentArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        <Badge variant="outline">{article.category}</Badge>
                        {article.tags.slice(0, 2).map((tag) => (
                          <Badge key={tag} variant="secondary" className="text-xs">
                            <Tag className="mr-1 h-2.5 w-2.5" />
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <CardTitle className="line-clamp-2 text-base">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2 text-sm">{article.excerpt}</CardDescription>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-xs text-muted-foreground">
                        <span className="flex items-center gap-1">
                          <Clock className="h-3 w-3" />
                          {article.readingTime} min
                        </span>
                        <span className="flex items-center gap-1">
                          <Calendar className="h-3 w-3" />
                          {new Date(article.updatedAt).toLocaleDateString("en-US", { month: "short", day: "numeric" })}
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <div className="mt-8 text-center">
              <Link 
                href="/blog/all" 
                className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                View All {articles.length} Articles
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
