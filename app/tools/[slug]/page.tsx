import { Metadata } from "next"
import { notFound } from "next/navigation"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import dynamic from "next/dynamic"
const ToolInterface = dynamic(() => import("@/components/tools/tool-interface").then((mod) => mod.ToolInterface))
import { ToolContent } from "@/components/tools/tool-content"
import { RelatedTools } from "@/components/tools/related-tools"
import { tools, getToolBySlug, getRelatedTools } from "@/config/tool-registry"

interface ToolPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return tools.map((tool) => ({
    slug: tool.slug,
  }))
}

export const dynamicParams = false;

export async function generateMetadata({ params }: ToolPageProps): Promise<Metadata> {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    return {
      title: "Tool Not Found",
    }
  }

  return {
    title: tool.metaTitle,
    description: tool.metaDescription,
    keywords: tool.keywords,
    openGraph: {
      title: tool.metaTitle,
      description: tool.metaDescription,
      type: "website",
      url: `https://calligraphygeneratorai.com/tools/${slug}`,
    },
    twitter: {
      card: "summary_large_image",
      title: tool.metaTitle,
      description: tool.metaDescription,
    },
    alternates: {
      canonical: `https://calligraphygeneratorai.com/tools/${slug}`,
    },
  }
}

export default async function ToolPage({ params }: ToolPageProps) {
  const { slug } = await params
  const tool = getToolBySlug(slug)

  if (!tool) {
    notFound()
  }

  const relatedTools = getRelatedTools(tool.relatedTools)
  const categoryPath = tool.category === "converter" ? "/converters" : "/generators"
  const categoryName = tool.category === "converter" ? "Font Converters" : "AI Generators"

  // ── Structured Data: WebApplication Schema ──
  const webAppSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    name: tool.name,
    description: tool.description,
    url: `https://calligraphygeneratorai.com/tools/${slug}`,
    applicationCategory: tool.category === "converter" ? "UtilityApplication" : "DesignApplication",
    applicationSubCategory: tool.category === "converter" ? "Font Converter" : "Calligraphy Generator",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript. Works in Chrome, Firefox, Safari, Edge.",
    author: {
      "@type": "Organization",
      name: "Calligraphy Generator AI",
      url: "https://calligraphygeneratorai.com",
    },
    datePublished: "2025-01-15T00:00:00Z",
    dateModified: tool.lastUpdated,
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    featureList: [
      "Instant conversion",
      "Client-side processing",
      "No data storage",
      "Mobile friendly",
      "No registration required",
    ],
  }

  // ── Structured Data: FAQ Schema ──
  const faqSchema = tool.faqs.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: tool.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  } : null

  // ── Structured Data: BreadcrumbList Schema ──
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://calligraphygeneratorai.com",
      },
      {
        "@type": "ListItem",
        position: 2,
        name: categoryName,
        item: `https://calligraphygeneratorai.com${categoryPath}`,
      },
      {
        "@type": "ListItem",
        position: 3,
        name: tool.shortName,
        item: `https://calligraphygeneratorai.com/tools/${slug}`,
      },
    ],
  }

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* ── Tool Section (above the fold) ── */}
        <section className="border-b border-border bg-secondary/30 py-8 md:py-12">
          <div className="container mx-auto max-w-7xl px-4">
            <div className="mb-8">
              <nav aria-label="Breadcrumb" className="mb-4 text-sm text-muted-foreground">
                <ol className="flex items-center">
                  <li>
                    <a href="/" className="hover:text-primary">Home</a>
                  </li>
                  <li><span className="mx-2">/</span></li>
                  <li>
                    <a href={categoryPath} className="hover:text-primary">
                      {categoryName}
                    </a>
                  </li>
                  <li><span className="mx-2">/</span></li>
                  <li>
                    <span className="text-foreground">{tool.shortName}</span>
                  </li>
                </ol>
              </nav>
              <h1 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
                {tool.name}
              </h1>
              <p className="max-w-3xl text-lg text-muted-foreground">
                {tool.description}
              </p>
            </div>
            <ToolInterface tool={tool} />
          </div>
        </section>

        {/* ── Quick Answer Block (AEO) ── */}
        <section className="border-b border-border py-8">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">
              <h2 className="mb-3 flex items-center gap-2 text-lg font-semibold text-primary">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                  <path d="M12 17h.01" />
                </svg>
                What is {tool.shortName}?
              </h2>
              <p className="text-base leading-relaxed text-foreground/90">
                {tool.quickAnswer}
              </p>
            </div>
          </div>
        </section>

        {/* ── Rich Content Sections ── */}
        <ToolContent tool={tool} />

        {/* ── Related Tools ── */}
        {relatedTools.length > 0 && (
          <RelatedTools tools={relatedTools} currentSlug={slug} />
        )}
      </main>
      <SiteFooter />

      {/* ── JSON-LD Structured Data ── */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webAppSchema) }}
      />
      {faqSchema && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </div>
  )
}
