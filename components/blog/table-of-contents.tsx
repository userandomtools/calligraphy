"use client"

import { articleContents } from "@/config/article-contents"
import { cn } from "@/lib/utils"

interface TableOfContentsProps {
  slug: string
}

export function TableOfContents({ slug }: TableOfContentsProps) {
  const content = articleContents[slug]

  if (!content) return null

  const sections = content.sections.map((section) => ({
    id: section.id,
    title: section.title,
  }))

  // Add FAQ section if exists
  if (content.faqs && content.faqs.length > 0) {
    sections.push({ id: "faq", title: "Frequently Asked Questions" })
  }

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    const element = document.getElementById(id)
    if (element) {
      const offset = 96 // Account for sticky header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <nav className="rounded-lg border border-border bg-card p-4">
      <h3 className="mb-3 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
        Table of Contents
      </h3>
      <ul className="space-y-2">
        {sections.map((section, index) => (
          <li key={section.id}>
            <a
              href={`#${section.id}`}
              onClick={(e) => handleClick(e, section.id)}
              className={cn(
                "block text-sm transition-colors hover:text-primary",
                index === 0 ? "text-foreground" : "text-muted-foreground"
              )}
            >
              {section.title}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
