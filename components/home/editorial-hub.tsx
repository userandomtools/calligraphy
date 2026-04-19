import Link from "next/link"
import { ArrowRight, BookOpen, Lightbulb, Palette, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"

const editorialTopics = [
  {
    id: 1,
    slug: "what-is-calligraphy",
    title: "What is Calligraphy & Why It Matters Today",
    excerpt:
      "In a digital world dominated by standardized fonts, calligraphy remains the soul of text—infusing emotion, culture, and human touch into every stroke. Discover how AI-powered calligraphy is reviving this ancient art form for modern branding, personal expression, and cross-cultural communication.",
    icon: BookOpen,
    category: "Foundation",
    readTime: "5 min read",
    gradient: "from-amber-50 to-orange-50",
    iconBg: "bg-amber-100",
    iconColor: "text-amber-600",
  },
  {
    id: 2,
    slug: "pro-tips-calligraphy-ai",
    title: "Pro Tips: How to Get the Best Results from Calligraphy AI",
    excerpt:
      "Master the art of AI calligraphy generation with expert techniques. Learn how to craft effective prompts, choose the perfect aspect ratios for your projects, and strategically place decorative flourishes that elevate your Arabic and Hindi calligraphy from good to breathtaking.",
    icon: Lightbulb,
    category: "Tutorial",
    readTime: "7 min read",
    gradient: "from-blue-50 to-indigo-50",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
  },
  {
    id: 3,
    slug: "why-legacy-indic-fonts-matter",
    title: "Bridging the Gap: Why Legacy Indic Fonts Still Matter",
    excerpt:
      "Behind every Hindi newspaper and regional magazine lies a complex typography ecosystem. Explore why Shree Lipi, AMS, and Kruti Dev remain essential for Indian DTP professionals, and why accurate Unicode conversion is the unsung hero of print media production.",
    icon: Palette,
    category: "Industry Insight",
    readTime: "6 min read",
    gradient: "from-emerald-50 to-teal-50",
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
  },
  {
    id: 4,
    slug: "5-creative-ways-to-use-calligraphy",
    title: "5 Creative Ways to Use Your Generated Calligraphy",
    excerpt:
      "Transform your AI-generated calligraphy into stunning real-world applications. From elegant digital wedding invitations and Instagram-worthy quote graphics to meaningful tattoo designs and distinctive brand logos—unlock the full creative potential of your personalized artwork.",
    icon: Sparkles,
    category: "Inspiration",
    readTime: "4 min read",
    gradient: "from-rose-50 to-pink-50",
    iconBg: "bg-rose-100",
    iconColor: "text-rose-600",
  },
]

export function EditorialHub() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-background via-muted/30 to-background">
      <div className="container px-4 md:px-6 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 mb-4 text-sm font-medium tracking-wide text-primary bg-primary/10 rounded-full">
            Inspiration & Guides
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold tracking-tight text-foreground mb-4">
            The Calligraphy & Typography Hub
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Dive deeper into the art and science of beautiful letterforms. Expert insights, 
            practical tutorials, and creative inspiration for designers and enthusiasts alike.
          </p>
        </div>

        {/* Editorial Grid */}
        <div className="grid gap-6 md:gap-8 md:grid-cols-2">
          {editorialTopics.map((topic) => {
            const IconComponent = topic.icon
            return (
              <Link
                key={topic.id}
                href={`/blog/${topic.slug}`}
                className="group block"
              >
                <article
                  className={`relative h-full rounded-2xl bg-gradient-to-br ${topic.gradient} border border-border/50 p-8 md:p-10 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1`}
                >
                  {/* Category & Read Time */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-semibold tracking-wider uppercase text-muted-foreground">
                      {topic.category}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {topic.readTime}
                    </span>
                  </div>

                  {/* Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-14 h-14 rounded-xl ${topic.iconBg} mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <IconComponent className={`w-7 h-7 ${topic.iconColor}`} />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                    {topic.title}
                  </h3>

                  {/* Excerpt */}
                  <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                    {topic.excerpt}
                  </p>

                  {/* Read More Link */}
                  <div className="flex items-center text-sm font-medium text-primary">
                    <span>Read Article</span>
                    <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </div>

                  {/* Decorative Element */}
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-[0.03] pointer-events-none">
                    <IconComponent className="w-full h-full" />
                  </div>
                </article>
              </Link>
            )
          })}
        </div>

        {/* CTA Button */}
        <div className="text-center mt-12">
          <Button asChild size="lg" variant="outline" className="group">
            <Link href="/blog">
              <span>Explore All Articles</span>
              <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
