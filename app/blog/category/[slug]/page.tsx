import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { articles, articleCategories } from "@/config/article-registry"
import { BookOpen, Calendar, Clock, Tag } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface CategoryPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articleCategories.map((category) => ({
    slug: category.slug,
  }))
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params
  const category = articleCategories.find((c) => c.slug === slug)
  
  if (!category) {
    return { title: "Category Not Found" }
  }

  return {
    title: `${category.name} Calligraphy Articles | Guides & Tutorials`,
    description: `Explore ${category.name.toLowerCase()} calligraphy articles. ${category.description}`,
    openGraph: {
      title: `${category.name} Calligraphy Articles | Guides & Tutorials`,
      description: `Explore ${category.name.toLowerCase()} calligraphy articles. ${category.description}`,
      type: "website",
      url: `https://calligraphygeneratorai.com/blog/category/${slug}`,
    },
    alternates: {
      canonical: `https://calligraphygeneratorai.com/blog/category/${slug}`,
    },
  }
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params
  const category = articleCategories.find((c) => c.slug === slug)
  
  if (!category) {
    notFound()
  }

  const categoryArticles = articles.filter((a) => a.category === category.name)

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-primary">Blog</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">{category.name}</span>
            </nav>
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary">
                <BookOpen className="h-6 w-6 text-primary-foreground" />
              </div>
              <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
                {category.name}
              </h1>
            </div>
            <p className="max-w-3xl text-lg text-muted-foreground">
              {category.description} - {categoryArticles.length} articles available.
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {categoryArticles.map((article) => (
                <Link key={article.slug} href={`/blog/${article.slug}`}>
                  <Card className="h-full transition-all hover:border-primary hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-2 flex flex-wrap items-center gap-2">
                        {article.tags.slice(0, 3).map((tag) => (
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
          </div>
        </section>

        {/* Other Categories */}
        <section className="border-t border-border bg-secondary/30 py-12">
          <div className="container mx-auto max-w-7xl px-4">
            <h2 className="mb-6 text-xl font-bold">Explore Other Categories</h2>
            <div className="flex flex-wrap gap-3">
              {articleCategories.filter((c) => c.slug !== slug).map((cat) => (
                <Link key={cat.slug} href={`/blog/category/${cat.slug}`}>
                  <Badge variant="outline" className="px-4 py-2 text-sm transition-colors hover:bg-primary hover:text-primary-foreground">
                    {cat.name}
                  </Badge>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
