import { HeroSection } from "@/components/home/hero-section"
import { ToolsGrid } from "@/components/home/tools-grid"
import { PopularTools } from "@/components/home/popular-tools"
import { HowItWorks } from "@/components/home/how-it-works"
import { AIPoweredSection } from "@/components/home/ai-powered-section"
import { CalligraphyEvolution } from "@/components/home/calligraphy-evolution"
import { ProTipsSection } from "@/components/home/pro-tips-section"
import { FAQSection } from "@/components/home/faq-section"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"
import { converterTools, generatorTools } from "@/config/tool-registry"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <AIPoweredSection />
        <ToolsGrid
          title="DTP &amp; Font Converters"
          description="Lightning-fast Unicode to legacy font converters. Zero missing glyphs, perfect for Pagemaker and CorelDraw workflows."
          tools={converterTools}
          category="converter"
        />
        <ToolsGrid
          title="AI Calligraphy Generators"
          description="Create stunning calligraphy art powered by AI. High-resolution outputs perfect for social media, tattoos, and graphic design."
          tools={generatorTools}
          category="generator"
        />
        {/* Popular Tools — Internal Linking Boost */}
        <PopularTools />
        {/* Editorial & Educational Sections — SEO Content Layer */}
        <CalligraphyEvolution />
        <ProTipsSection />
        <HowItWorks />
        <FAQSection />
      </main>
      <SiteFooter />
    </div>
  )
}
