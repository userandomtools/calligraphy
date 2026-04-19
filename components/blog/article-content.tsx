import Link from "next/link"
import { getArticleBySlug } from "@/config/article-registry"
import { articleContents } from "@/config/article-contents"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

interface ArticleContentProps {
  slug: string
}

export function ArticleContent({ slug }: ArticleContentProps) {
  const article = getArticleBySlug(slug)
  const content = articleContents[slug]

  if (!article || !content) {
    return <p>Content not found.</p>
  }

  return (
    <div className="prose prose-neutral dark:prose-invert max-w-none">
      {content.sections.map((section, index) => (
        <section key={index} id={section.id} className="scroll-mt-24">
          <h2>{section.title}</h2>
          {section.content.map((paragraph, pIndex) => {
            if (paragraph.type === "paragraph") {
              return <p key={pIndex}>{paragraph.text}</p>
            }
            if (paragraph.type === "list") {
              return (
                <ul key={pIndex}>
                  {paragraph.items?.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ul>
              )
            }
            if (paragraph.type === "ordered-list") {
              return (
                <ol key={pIndex}>
                  {paragraph.items?.map((item, iIndex) => (
                    <li key={iIndex}>{item}</li>
                  ))}
                </ol>
              )
            }
            if (paragraph.type === "tip") {
              return (
                <div key={pIndex} className="rounded-lg border border-primary/20 bg-primary/5 p-4 my-4">
                  <p className="m-0 text-sm"><strong>Pro Tip:</strong> {paragraph.text}</p>
                </div>
              )
            }
            if (paragraph.type === "callout") {
              return (
                <div key={pIndex} className="rounded-lg border border-border bg-secondary/50 p-4 my-4">
                  <p className="m-0">{paragraph.text}</p>
                </div>
              )
            }
            return null
          })}
        </section>
      ))}

      {content.faqs && content.faqs.length > 0 && (
        <section id="faq" className="scroll-mt-24 mt-12">
          <h2>Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="w-full">
            {content.faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`}>
                <AccordionTrigger className="text-left font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>
      )}

      {/* Internal Links Section */}
      <section className="mt-12 rounded-lg border border-border bg-card p-6">
        <h3 className="mb-4 text-lg font-semibold">Continue Learning</h3>
        <div className="flex flex-wrap gap-2">
          {article.relatedSlugs.map((relatedSlug) => {
            const related = getArticleBySlug(relatedSlug)
            if (!related) return null
            return (
              <Link
                key={relatedSlug}
                href={`/blog/${relatedSlug}`}
                className="inline-block rounded-md bg-secondary px-3 py-1.5 text-sm text-secondary-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
              >
                {related.title.split(":")[0]}
              </Link>
            )
          })}
        </div>
      </section>

      {/* Try Our Tools CTA */}
      <section className="mt-8 rounded-lg border border-primary/20 bg-primary/5 p-6 text-center">
        <h3 className="mb-2 text-lg font-semibold">Try Our AI Calligraphy Tools</h3>
        <p className="mb-4 text-muted-foreground">
          Transform your text into beautiful calligraphy instantly with our free AI generators.
        </p>
        <div className="flex flex-wrap justify-center gap-3">
          <Link
            href="/generators"
            className="inline-flex items-center rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            AI Calligraphy Generators
          </Link>
          <Link
            href="/converters"
            className="inline-flex items-center rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary"
          >
            Font Converters
          </Link>
        </div>
      </section>
    </div>
  )
}
