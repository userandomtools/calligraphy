import Link from "next/link"
import { Sparkles, ExternalLink } from "lucide-react"
import { converterTools, generatorTools } from "@/config/tool-registry"
import { articles } from "@/config/article-registry"

export function SiteFooter() {
  const recentArticles = articles.slice(0, 5)

  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto max-w-7xl px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-5">
          {/* Brand & Description */}
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                <Sparkles className="h-4 w-4 text-primary-foreground" />
              </div>
              <span className="text-lg font-semibold tracking-tight">
                Calligraphy<span className="text-primary">AI</span>
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              The ultimate platform for AI-powered calligraphy generation and Indic font conversion. Create stunning art or convert complex scripts instantly.
            </p>
            
            {/* Author Info Section */}
            <div className="mt-6 rounded-lg border border-border bg-secondary/30 p-4">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Hi, I&apos;m <strong className="text-foreground">Ziven Borceg</strong>. Welcome to Calligraphy Generator AI - your all-in-one platform for beautiful typography, font conversion, and AI-powered calligraphy generation.
              </p>
              <div className="mt-3 flex items-center gap-2">
                <a
                  href="https://medium.com/@zivenborceg"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:underline"
                >
                  <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.54 12a6.8 6.8 0 01-6.77 6.82A6.8 6.8 0 010 12a6.8 6.8 0 016.77-6.82A6.8 6.8 0 0113.54 12zM20.96 12c0 3.54-1.51 6.42-3.38 6.42-1.87 0-3.39-2.88-3.39-6.42s1.52-6.42 3.39-6.42 3.38 2.88 3.38 6.42M24 12c0 3.17-.53 5.75-1.19 5.75-.66 0-1.19-2.58-1.19-5.75s.53-5.75 1.19-5.75C23.47 6.25 24 8.83 24 12z"/>
                  </svg>
                  Follow me on Medium
                  <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>

          {/* Font Converters */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Font Converters
            </h3>
            <ul className="space-y-2">
              {converterTools.slice(0, 6).map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {tool.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/converters"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View All Converters
                </Link>
              </li>
            </ul>
          </div>

          {/* AI Generators */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              AI Generators
            </h3>
            <ul className="space-y-2">
              {generatorTools.map((tool) => (
                <li key={tool.slug}>
                  <Link
                    href={`/tools/${tool.slug}`}
                    className="text-sm text-foreground/80 transition-colors hover:text-primary"
                  >
                    {tool.shortName}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/generators"
                  className="text-sm font-medium text-primary hover:underline"
                >
                  View All Generators
                </Link>
              </li>
            </ul>
          </div>

          {/* Company & Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Resources
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/blog"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-of-service"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/disclaimer"
                  className="text-sm text-foreground/80 transition-colors hover:text-primary"
                >
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Popular Articles Section */}
        <div className="mt-10 border-t border-border pt-8">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
            Popular Calligraphy Guides
          </h3>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {recentArticles.map((article) => (
              <Link
                key={article.slug}
                href={`/blog/${article.slug}`}
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                {article.title.split(":")[0]}
              </Link>
            ))}
            <Link
              href="/blog"
              className="text-sm font-medium text-primary hover:underline"
            >
              View All Articles
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 md:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Calligraphy Generator AI. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-xs text-muted-foreground">
              100% Free &bull; No Data Stored &bull; Browser-Based
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
