import { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { articles, getArticleBySlug, getRelatedArticles } from "@/config/article-registry"
import { ArticleContent } from "@/components/blog/article-content"
import { RelatedPosts } from "@/components/blog/related-posts"
import { TableOfContents } from "@/components/blog/table-of-contents"
import { Calendar, Clock, User, Tag, Share2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"

interface ArticlePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }))
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    return { title: "Article Not Found" }
  }

  return {
    title: article.metaTitle,
    description: article.metaDescription,
    keywords: article.keywords,
    authors: [{ name: "Ziven Borceg" }],
    openGraph: {
      title: article.metaTitle,
      description: article.metaDescription,
      type: "article",
      url: `https://calligraphygeneratorai.com/blog/${slug}`,
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      authors: ["Ziven Borceg"],
      tags: article.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: article.metaTitle,
      description: article.metaDescription,
    },
    alternates: {
      canonical: `https://calligraphygeneratorai.com/blog/${slug}`,
    },
  }
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params
  const article = getArticleBySlug(slug)
  
  if (!article) {
    notFound()
  }

  const relatedArticles = getRelatedArticles(slug, 6)

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.metaDescription,
    author: {
      "@type": "Person",
      name: "Ziven Borceg",
      url: "https://medium.com/@zivenborceg",
    },
    publisher: {
      "@type": "Organization",
      name: "Calligraphy Generator AI",
      url: "https://calligraphygeneratorai.com",
    },
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://calligraphygeneratorai.com/blog/${slug}`,
    },
    wordCount: article.wordCount,
    keywords: article.keywords.join(", "),
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        <article>
          <header className="border-b border-border bg-secondary/30 py-12 md:py-16">
            <div className="container mx-auto max-w-4xl px-4">
              <nav className="mb-6 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-primary">Home</Link>
                <span className="mx-2">/</span>
                <Link href="/blog" className="hover:text-primary">Blog</Link>
                <span className="mx-2">/</span>
                <Link href={`/blog/category/${article.category.toLowerCase()}`} className="hover:text-primary">
                  {article.category}
                </Link>
                <span className="mx-2">/</span>
                <span className="text-foreground line-clamp-1">{article.title}</span>
              </nav>
              
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <Badge>{article.category}</Badge>
                {article.tags.slice(0, 3).map((tag) => (
                  <Badge key={tag} variant="secondary">
                    <Tag className="mr-1 h-3 w-3" />
                    {tag}
                  </Badge>
                ))}
              </div>

              <h1 className="mb-6 text-balance text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
                {article.title}
              </h1>
              
              <p className="mb-6 text-lg text-muted-foreground">
                {article.excerpt}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-4 w-4" />
                  <span>By <strong className="text-foreground">Ziven Borceg</strong></span>
                </span>
                <span className="flex items-center gap-1.5">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={article.updatedAt}>
                    Updated {new Date(article.updatedAt).toLocaleDateString("en-US", { 
                      month: "long", 
                      day: "numeric", 
                      year: "numeric" 
                    })}
                  </time>
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4" />
                  {article.readingTime} min read
                </span>
                <span className="ml-auto">
                  <button className="flex items-center gap-1.5 rounded-md px-3 py-1.5 transition-colors hover:bg-secondary">
                    <Share2 className="h-4 w-4" />
                    Share
                  </button>
                </span>
              </div>
            </div>
          </header>

          <div className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
            <div className="grid gap-12 lg:grid-cols-[1fr_280px]">
              <div className="min-w-0">
                <ArticleContent slug={slug} />
              </div>
              <aside className="hidden lg:block">
                <div className="sticky top-24 space-y-8">
                  <TableOfContents slug={slug} />
                </div>
              </aside>
            </div>
          </div>
        </article>

        <RelatedPosts articles={relatedArticles} currentSlug={slug} />
      </main>
      <SiteFooter />
    </div>
  )
}
