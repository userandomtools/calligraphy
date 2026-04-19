import Link from "next/link"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getToolBySlug } from "@/config/tool-registry"
import type { Tool } from "@/config/tool-registry"

interface ToolContentProps {
  tool: Tool
}

// Common issues for converters
const commonIssues = [
  {
    issue: "Missing glyphs (boxes/squares)",
    cause: "Font not installed on system",
    solution: "Install the target font on your computer before using the output",
  },
  {
    issue: "Incorrect conjuncts",
    cause: "Complex character combinations",
    solution: "Try breaking down complex words and converting in parts",
  },
  {
    issue: "Numbers not converting",
    cause: "Using Arabic numerals instead of Devanagari",
    solution: "Ensure input uses the correct numeral system for your script",
  },
  {
    issue: "Matras appearing separately",
    cause: "Unicode normalization differences",
    solution: "Copy text from a native Unicode source for best results",
  },
]

export function ToolContent({ tool }: ToolContentProps) {
  const isConverter = tool.category === "converter"

  // Resolve related tools for internal linking within content
  const resolvedRelatedTools = tool.relatedTools
    .map((slug) => getToolBySlug(slug))
    .filter(Boolean) as Tool[]

  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="prose prose-neutral dark:prose-invert max-w-none">

          {/* ── Section 1: What is [Tool Name] ── */}
          <h2 id="what-is">What is {tool.name}?</h2>
          <p>{tool.whatIsIt}</p>

          {/* Internal links within explanation */}
          {resolvedRelatedTools.length > 0 && (
            <p className="text-sm text-muted-foreground">
              <strong>Related:</strong>{" "}
              {resolvedRelatedTools.slice(0, 3).map((rt, i) => (
                <span key={rt.slug}>
                  {i > 0 && " · "}
                  <Link href={`/tools/${rt.slug}`} className="text-primary hover:underline">
                    {rt.name}
                  </Link>
                </span>
              ))}
            </p>
          )}

          {/* ── Section 2: How It Works (step-by-step) ── */}
          <h2 id="how-it-works">How to Use the {tool.name}</h2>
          <ol>
            {tool.howItWorks.map((step, index) => (
              <li key={index}>
                <strong>Step {index + 1}:</strong> {step}
              </li>
            ))}
          </ol>

          {/* ── Section 3: Example Use Cases ── */}
          <h2 id="use-cases">Example Use Cases</h2>
          <p>
            Here are real-world scenarios where the {tool.shortName} is commonly used:
          </p>
          <ul>
            {tool.exampleUseCases.map((useCase, index) => (
              <li key={index}>{useCase}</li>
            ))}
          </ul>

          {/* ── Section 4: Key Benefits ── */}
          <h2 id="benefits">Key Benefits</h2>
          <div className="not-prose mb-8 grid gap-3 sm:grid-cols-2">
            {tool.benefits.map((benefit, index) => {
              const [title, ...rest] = benefit.split(" — ")
              const desc = rest.join(" — ")
              return (
                <div
                  key={index}
                  className="rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/30"
                >
                  <div className="mb-1 flex items-start gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="mt-0.5 h-4 w-4 shrink-0 text-primary"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    <span className="text-sm font-semibold text-foreground">{title}</span>
                  </div>
                  {desc && (
                    <p className="ml-6 text-sm text-muted-foreground">{desc}</p>
                  )}
                </div>
              )
            })}
          </div>

          {/* ── Section 5: Common Issues & Fixes (Converters Only) ── */}
          {isConverter && (
            <>
              <h2 id="troubleshooting">Common Conversion Issues &amp; Fixes</h2>
              <div className="not-prose mb-8 overflow-x-auto">
                <table className="w-full border-collapse rounded-lg border border-border">
                  <thead>
                    <tr className="bg-secondary">
                      <th className="border border-border px-4 py-3 text-left text-sm font-semibold">
                        Issue
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-semibold">
                        Cause
                      </th>
                      <th className="border border-border px-4 py-3 text-left text-sm font-semibold">
                        Solution
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {commonIssues.map((item, index) => (
                      <tr key={index} className="hover:bg-secondary/50">
                        <td className="border border-border px-4 py-3 text-sm">
                          {item.issue}
                        </td>
                        <td className="border border-border px-4 py-3 text-sm text-muted-foreground">
                          {item.cause}
                        </td>
                        <td className="border border-border px-4 py-3 text-sm">
                          {item.solution}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}

          {/* ── Section 6: FAQs ── */}
          {tool.faqs.length > 0 && (
            <>
              <h2 id="faq">Frequently Asked Questions</h2>
              <div className="not-prose">
                <Accordion type="single" collapsible className="w-full">
                  {tool.faqs.map((faq, index) => (
                    <AccordionItem key={index} value={`faq-${index}`}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </>
          )}

          {/* ── Section 7: Related Searches / Semantic Variations (GEO) ── */}
          {tool.semanticVariations.length > 0 && (
            <>
              <h2 id="related-searches">People Also Search For</h2>
              <div className="not-prose mb-8 flex flex-wrap gap-2">
                {tool.semanticVariations.map((variation, index) => (
                  <span
                    key={index}
                    className="inline-flex items-center rounded-full border border-border bg-secondary/50 px-3 py-1.5 text-xs text-muted-foreground transition-colors hover:border-primary/30 hover:text-foreground"
                  >
                    {variation}
                  </span>
                ))}
              </div>
            </>
          )}

          {/* ── Section 8: Explore More Tools (Internal Linking) ── */}
          <div className="not-prose mt-12 rounded-xl border border-border bg-secondary/30 p-6">
            <h3 className="mb-4 text-lg font-semibold">Explore More Tools</h3>
            <div className="flex flex-wrap gap-3">
              {isConverter ? (
                <>
                  <Link
                    href="/converters"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    All Font Converters
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                  <Link
                    href="/generators"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    AI Calligraphy Generators
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </>
              ) : (
                <>
                  <Link
                    href="/generators"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    All AI Generators
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                  <Link
                    href="/converters"
                    className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-card px-4 py-2 text-sm font-medium transition-colors hover:border-primary/50 hover:text-primary"
                  >
                    Font Converters
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
                  </Link>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
