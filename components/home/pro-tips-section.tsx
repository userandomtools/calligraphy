import { ALargeSmall, ShieldCheck, Layers, ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const tips = [
  {
    icon: ALargeSmall,
    number: "01",
    title: "Say Goodbye to Box Characters",
    subtitle: "Unicode vs. Legacy Fonts",
    description:
      "If you've ever pasted Hindi text into CorelDraw or Pagemaker and seen rows of empty boxes, you've hit the Unicode-legacy gap. Modern operating systems use Unicode (UTF-8) as the standard encoding, but older DTP software still expects legacy font encodings like AMS, Shree Lipi, or DevLys.",
    actionItems: [
      "Use Unicode for web, email, and modern apps",
      "Convert to AMS/Shree Lipi only for legacy DTP software",
      "Always keep a Unicode backup of your original text",
    ],
    gradient: "from-blue-500/10 to-indigo-500/10",
    iconBg: "bg-blue-500/10 group-hover:bg-blue-500/20",
    iconColor: "text-blue-600 dark:text-blue-400",
    accentLine: "bg-blue-500",
  },
  {
    icon: ShieldCheck,
    number: "02",
    title: "Proofreading AI-Generated Art",
    subtitle: "Cultural Accuracy Matters",
    description:
      "AI calligraphy generators produce stunning results at remarkable speed, but complex Indic scripts require a human eye for verification. Hindi and Marathi matras (vowel marks like ि, ी, ु, ू) have strict positional rules. A misplaced matra can change meaning entirely—or worse, produce a culturally insensitive result.",
    actionItems: [
      "Double-check matra placement in Devanagari output",
      "Verify Arabic diacritics (tashkeel) for Quranic text",
      "Test generated art at the final print/display size",
    ],
    gradient: "from-emerald-500/10 to-teal-500/10",
    iconBg: "bg-emerald-500/10 group-hover:bg-emerald-500/20",
    iconColor: "text-emerald-600 dark:text-emerald-400",
    accentLine: "bg-emerald-500",
  },
  {
    icon: Layers,
    number: "03",
    title: "The Right Font for the Right Job",
    subtitle: "Choosing Wisely",
    description:
      "Not all legacy Indic fonts are interchangeable. Kruti Dev dominates government and official documentation across India. AMS and Infinity fonts are preferred for creative work like wedding cards and festival invitations. Shree Lipi is the standard in Marathi-language publishing and newspaper typesetting.",
    actionItems: [
      "Kruti Dev / DevLys → Government forms & official documents",
      "AMS / Infinity → Wedding cards, invitations & branding",
      "Shree Lipi → Marathi newspapers & regional publishing",
    ],
    gradient: "from-violet-500/10 to-purple-500/10",
    iconBg: "bg-violet-500/10 group-hover:bg-violet-500/20",
    iconColor: "text-violet-600 dark:text-violet-400",
    accentLine: "bg-violet-500",
  },
]

export function ProTipsSection() {
  return (
    <section className="relative border-y border-border bg-secondary/20 py-20 md:py-28">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primary/[0.02] via-transparent to-transparent" />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Expert Knowledge
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            Pro Tips for Flawless{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Indic Typing & DTP
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Decades of DTP experience distilled into practical advice. Whether
            you&apos;re a print designer, content creator, or calligraphy
            enthusiast—these tips will save you hours of frustration.
          </p>
        </div>

        {/* Tips Grid */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {tips.map((tip) => {
            const IconComp = tip.icon
            return (
              <article
                key={tip.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Top accent line */}
                <div className={`h-1 w-full ${tip.accentLine}`} />

                <div className="flex flex-1 flex-col p-6 md:p-8">
                  {/* Header */}
                  <div className="mb-5 flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl ${tip.iconBg} transition-colors duration-300`}
                    >
                      <IconComp className={`h-6 w-6 ${tip.iconColor}`} />
                    </div>
                    <span className="text-3xl font-black text-muted-foreground/10">
                      {tip.number}
                    </span>
                  </div>

                  {/* Subtitle */}
                  <span className="mb-1 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                    {tip.subtitle}
                  </span>

                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold leading-tight text-foreground">
                    {tip.title}
                  </h3>

                  {/* Description */}
                  <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {tip.description}
                  </p>

                  {/* Action Items */}
                  <div className={`rounded-xl bg-gradient-to-br ${tip.gradient} p-4`}>
                    <ul className="space-y-2.5">
                      {tip.actionItems.map((item, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2.5 text-sm text-foreground/80"
                        >
                          <CheckCircle2 className={`mt-0.5 h-4 w-4 shrink-0 ${tip.iconColor}`} />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-12 flex flex-col items-center gap-3 text-center md:mt-16">
          <p className="text-sm text-muted-foreground">
            Need help choosing the right converter for your project?
          </p>
          <Button asChild variant="outline" className="group gap-2">
            <Link href="/converters">
              Explore All Font Converters
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
