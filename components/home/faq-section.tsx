import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "What is a Calligraphy Generator AI?",
    answer:
      "A Calligraphy Generator AI is an intelligent tool that uses machine learning algorithms to transform plain text into beautiful calligraphic art. Our system understands typography principles, cultural aesthetics, and traditional calligraphy styles to generate authentic-looking Arabic, Hindi, and English calligraphy that you can use for various creative projects.",
  },
  {
    question: "How do I convert Unicode to AMS calligraphy fonts?",
    answer:
      "Converting Unicode to AMS fonts is simple with our converter: 1) Navigate to our Unicode to AMS Converter tool, 2) Paste your Unicode text (Hindi, Marathi, or other Devanagari text) into the input field, 3) Click 'Convert' to instantly transform it to AMS font encoding, 4) Copy the output for use in Pagemaker, CorelDraw, or other DTP software. The conversion handles all conjuncts and special characters automatically.",
  },
  {
    question: "Is the Arabic calligraphy generator free to use?",
    answer:
      "Yes, our Arabic Calligraphy Generator is 100% free to use with no limitations. You can generate unlimited calligraphy art in various styles including Thuluth, Naskh, Diwani, and Kufic. There's no registration required, no watermarks, and no hidden fees. All processing happens in your browser, so your text remains completely private.",
  },
  {
    question: "What legacy Indic fonts can I convert?",
    answer:
      "Our platform supports conversion between Unicode and multiple legacy Indic font formats including: AMS fonts, Shree Lipi (Hindi and Marathi variants), DevLys (popular in government offices), Kruti Dev, Infinity fonts, and Anu Telugu fonts. We also support reverse conversion from legacy formats back to Unicode for modernizing old documents.",
  },
  {
    question: "Is my text data secure and private?",
    answer:
      "Absolutely. All text processing happens entirely in your browser using client-side JavaScript. Your text is never uploaded to our servers, stored in any database, or shared with third parties. This ensures complete privacy and also enables instant conversion with zero network latency. You can even use our tools offline once the page is loaded.",
  },
  {
    question: "Can I use the generated calligraphy commercially?",
    answer:
      "Yes, you're free to use the calligraphy and converted text for both personal and commercial projects. This includes social media graphics, wedding invitations, logos, print materials, digital art, and more. However, we recommend proofreading converted text, especially for complex Indic scripts, to ensure accuracy in professional publications.",
  },
]

export function FAQSection() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Everything you need to know about our Calligraphy Generator AI and font converters.
          </p>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left text-lg font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </div>
    </section>
  )
}
