import { Sparkles } from "lucide-react"
import { HeroInteractive } from "./hero-interactive"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="container relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Powered by AI</span>
          </div>
          {/* LCP Element */}
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl text-foreground">
            The Ultimate{" "}
            <span className="text-primary">Calligraphy Generator AI</span>
            {" "}&amp; Font Converter
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Generate breathtaking calligraphy art or convert complex Indic text (Unicode to AMS, Shree Lipi, DevLys) instantly. 100% Free and browser-based.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {/* Client component only loads interactibility */}
          <HeroInteractive />
        </div>
      </div>
    </section>
  )
}
