import { Feather, Globe, Cpu, Sparkles, PenTool, Heart } from "lucide-react"

const pillars = [
  {
    icon: Feather,
    label: "Origins",
    title: "What is Calligraphy?",
    description:
      "Calligraphy—from the Greek kallos (beauty) and graphein (to write)—is the ancient art of decorative handwriting. For centuries, Arabic Nastaliq and Devanagari scripts were painstakingly rendered by master scribes on parchment, temple walls, and royal decrees. Every stroke carried cultural weight: Arabic calligraphy adorned mosques from Istanbul to Córdoba, while Hindi and Sanskrit letterforms shaped the visual identity of South Asian literature and spirituality.",
    highlight:
      "The flowing curves of Arabic Thuluth and the structured matras of Devanagari represent two of the world's most visually complex writing systems.",
    accentColor: "text-amber-600 dark:text-amber-400",
    accentBg: "bg-amber-500/10",
    borderAccent: "border-amber-500/20",
  },
  {
    icon: Globe,
    label: "Relevance",
    title: "Why Calligraphy Matters Today",
    description:
      "In an era of standardized digital fonts, calligraphy has found a vibrant second life. Graphic designers use calligraphic elements in brand logos and packaging. Social media creators build entire aesthetics around hand-lettered quotes. Tattoo artists draw from Arabic and Hindi scripts for deeply personal body art. Wedding invitations, festival greetings, and digital art prints—calligraphy is everywhere, more relevant than ever.",
    highlight:
      "From Instagram story templates to luxury brand identities, calligraphic typography commands premium attention in a crowded visual landscape.",
    accentColor: "text-teal-600 dark:text-teal-400",
    accentBg: "bg-teal-500/10",
    borderAccent: "border-teal-500/20",
  },
  {
    icon: Cpu,
    label: "Innovation",
    title: "How AI Bridges Ink & Pixels",
    description:
      "Our Calligraphy Generator AI combines deep learning models trained on thousands of authentic calligraphic specimens with real-time rendering. The result? You type a phrase, choose a style—Thuluth, Naskh, Diwani, or Devanagari—and receive publication-ready calligraphy in seconds. No years of practice, no expensive tools. AI handles the precision while you focus on creative direction.",
    highlight:
      "Speed meets artistry: generate infinite style variations, fine-tune aspect ratios, and download high-resolution outputs ready for print or screen.",
    accentColor: "text-violet-600 dark:text-violet-400",
    accentBg: "bg-violet-500/10",
    borderAccent: "border-violet-500/20",
  },
]

const miniStats = [
  { icon: PenTool, value: "6+", label: "Script Styles" },
  { icon: Sparkles, value: "∞", label: "Style Variations" },
  { icon: Heart, value: "100%", label: "Free Forever" },
]

export function CalligraphyEvolution() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/[0.03] via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiM5OTkiIGZpbGwtb3BhY2l0eT0iMC4wMyI+PHBhdGggZD0iTTMwIDBMMzAgNjBNMCA2MEw2MCAwTTAgMEw2MCA2MCIgc3Ryb2tlPSIjOTk5IiBzdHJva2Utb3BhY2l0eT0iMC4wMyIvPjwvZz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container relative mx-auto max-w-7xl px-4">
        {/* Section Header */}
        <div className="mx-auto mb-16 max-w-3xl text-center md:mb-20">
          <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary">
            Art · History · Technology
          </span>
          <h2 className="mb-5 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
            The Evolution of Calligraphy:{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              From Ink to AI
            </span>
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Thousands of years of artistic tradition, reimagined for the digital
            age. Understand the roots, relevance, and revolution of
            calligraphic art.
          </p>
        </div>

        {/* Alternating Content Blocks */}
        <div className="space-y-8 md:space-y-12">
          {pillars.map((pillar, index) => {
            const IconComp = pillar.icon
            const isReversed = index % 2 !== 0

            return (
              <div
                key={pillar.label}
                className={`group flex flex-col items-center gap-6 md:gap-10 ${
                  isReversed ? "md:flex-row-reverse" : "md:flex-row"
                }`}
              >
                {/* Visual / Icon Side */}
                <div className="flex w-full shrink-0 items-center justify-center md:w-2/5">
                  <div
                    className={`relative flex h-48 w-48 items-center justify-center rounded-3xl border ${pillar.borderAccent} ${pillar.accentBg} transition-transform duration-500 group-hover:scale-105 md:h-56 md:w-56`}
                  >
                    <IconComp
                      className={`h-20 w-20 ${pillar.accentColor} transition-transform duration-500 group-hover:rotate-6 md:h-24 md:w-24`}
                      strokeWidth={1}
                    />
                    {/* Floating label */}
                    <span
                      className={`absolute -top-3 left-1/2 -translate-x-1/2 rounded-full ${pillar.accentBg} border ${pillar.borderAccent} px-3 py-0.5 text-xs font-semibold uppercase tracking-widest ${pillar.accentColor}`}
                    >
                      {pillar.label}
                    </span>
                    {/* Decorative dots */}
                    <div
                      className={`absolute -bottom-2 -right-2 h-6 w-6 rounded-full ${pillar.accentBg} border ${pillar.borderAccent}`}
                    />
                    <div
                      className={`absolute -left-1 -top-1 h-4 w-4 rounded-full ${pillar.accentBg} border ${pillar.borderAccent}`}
                    />
                  </div>
                </div>

                {/* Text Side */}
                <div className="w-full md:w-3/5">
                  <h3 className="mb-4 text-2xl font-bold tracking-tight md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mb-4 text-base leading-relaxed text-muted-foreground md:text-lg">
                    {pillar.description}
                  </p>
                  <blockquote
                    className={`border-l-4 ${pillar.borderAccent} ${pillar.accentBg} rounded-r-lg py-3 pl-4 pr-3 text-sm font-medium italic ${pillar.accentColor}`}
                  >
                    {pillar.highlight}
                  </blockquote>
                </div>
              </div>
            )
          })}
        </div>

        {/* Mini Stats Bar */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-3 gap-4 rounded-2xl border border-border bg-card/80 p-6 shadow-sm backdrop-blur-sm md:mt-20 md:p-8">
          {miniStats.map((stat) => {
            const StatIcon = stat.icon
            return (
              <div key={stat.label} className="flex flex-col items-center gap-2 text-center">
                <StatIcon className="h-5 w-5 text-primary" />
                <span className="text-2xl font-bold text-foreground md:text-3xl">
                  {stat.value}
                </span>
                <span className="text-xs font-medium text-muted-foreground md:text-sm">
                  {stat.label}
                </span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
