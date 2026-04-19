import { ClipboardPaste, Settings2, Download, Shield, Smartphone, Zap } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: ClipboardPaste,
    title: "Paste Your Text",
    description:
      "Enter or paste your text in the input field. Supports Unicode, legacy fonts, or plain text depending on the tool.",
  },
  {
    number: "02",
    icon: Settings2,
    title: "Choose Your Style",
    description:
      "Select your desired calligraphy style or font conversion type. Customize settings for the perfect output.",
  },
  {
    number: "03",
    icon: Download,
    title: "Copy or Download",
    description:
      "Instantly copy your converted text or download the generated calligraphy art for your projects.",
  },
]

const trustSignals = [
  {
    icon: Shield,
    title: "No Data Stored",
    description: "Your text is processed locally and never uploaded to servers.",
  },
  {
    icon: Zap,
    title: "Instant Client-Side",
    description: "All processing happens in your browser for zero latency.",
  },
  {
    icon: Smartphone,
    title: "Mobile Friendly",
    description: "Works perfectly on all devices - desktop, tablet, and mobile.",
  },
]

export function HowItWorks() {
  return (
    <section className="border-b border-border bg-secondary/30 py-16 md:py-24">
      <div className="container mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight md:text-4xl">
            How It Works
          </h2>
          <p className="mb-12 text-lg text-muted-foreground">
            Transform your text into beautiful calligraphy or convert fonts in three simple steps.
          </p>
        </div>

        <div className="mb-16 grid gap-8 md:grid-cols-3">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {index < steps.length - 1 && (
                <div className="absolute left-1/2 top-12 hidden h-0.5 w-full -translate-x-1/2 bg-border md:block" />
              )}
              <div className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-4 flex h-24 w-24 flex-col items-center justify-center rounded-full border-2 border-primary bg-background">
                  <span className="text-xs font-bold text-primary">{step.number}</span>
                  <step.icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="rounded-xl border border-border bg-card p-8">
          <h3 className="mb-8 text-center text-xl font-semibold">
            Why Trust Calligraphy Generator AI?
          </h3>
          <div className="grid gap-6 md:grid-cols-3">
            {trustSignals.map((signal) => (
              <div key={signal.title} className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                  <signal.icon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-semibold">{signal.title}</h4>
                  <p className="text-sm text-muted-foreground">{signal.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
