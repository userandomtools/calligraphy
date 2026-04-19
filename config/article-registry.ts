export interface Article {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  category: string
  tags: string[]
  keywords: string[]
  relatedSlugs: string[]
  publishedAt: string
  updatedAt: string
  readingTime: number
  wordCount: number
}

export const articles: Article[] = [
  {
    slug: "calligraphy-letters-a-to-z",
    title: "Calligraphy Letters A to Z: Complete Alphabet Guide for Beginners",
    metaTitle: "Calligraphy Letters A to Z | Complete Alphabet Guide 2024",
    metaDescription: "Master calligraphy letters A to Z with our comprehensive guide. Learn uppercase and lowercase alphabets with step-by-step instructions for beginners.",
    excerpt: "Learn how to write every letter of the alphabet in beautiful calligraphy. This comprehensive guide covers both uppercase and lowercase letters with detailed stroke instructions.",
    category: "Fundamentals",
    tags: ["alphabet", "basics", "beginners", "letters"],
    keywords: ["calligraphy letters a to z", "calligraphy alphabet", "hand lettering alphabet", "calligraphy letters"],
    relatedSlugs: ["how-to-write-capital-letters-in-calligraphy", "how-to-write-small-letters-in-calligraphy", "calligraphy-alphabet-practice-sheets"],
    publishedAt: "2024-01-15",
    updatedAt: "2024-03-20",
    readingTime: 12,
    wordCount: 2400
  },
  {
    slug: "how-to-write-capital-letters-in-calligraphy",
    title: "How to Write Capital Letters in Calligraphy: Uppercase Mastery Guide",
    metaTitle: "How to Write Capital Letters in Calligraphy | Uppercase Guide",
    metaDescription: "Learn how to write stunning capital letters in calligraphy. Master uppercase letterforms with detailed stroke sequences and professional tips.",
    excerpt: "Capital letters are the crown jewels of calligraphy. This guide teaches you how to create impressive uppercase letters that command attention.",
    category: "Fundamentals",
    tags: ["uppercase", "capital letters", "basics", "letterforms"],
    keywords: ["capital letters calligraphy", "uppercase calligraphy", "calligraphy capitals", "how to write capital letters"],
    relatedSlugs: ["calligraphy-letters-a-to-z", "how-to-write-small-letters-in-calligraphy", "how-to-connect-letters-in-calligraphy"],
    publishedAt: "2024-01-18",
    updatedAt: "2024-03-22",
    readingTime: 10,
    wordCount: 2100
  },
  {
    slug: "how-to-write-small-letters-in-calligraphy",
    title: "How to Write Small Letters in Calligraphy: Lowercase Techniques",
    metaTitle: "How to Write Small Letters in Calligraphy | Lowercase Guide",
    metaDescription: "Master lowercase calligraphy letters with our detailed guide. Learn proper stroke techniques for beautiful small letters in any style.",
    excerpt: "Small letters form the backbone of any calligraphy piece. Learn the proper techniques for creating consistent, beautiful lowercase letterforms.",
    category: "Fundamentals",
    tags: ["lowercase", "small letters", "basics", "letterforms"],
    keywords: ["small letters calligraphy", "lowercase calligraphy", "calligraphy lowercase", "how to write small letters"],
    relatedSlugs: ["calligraphy-letters-a-to-z", "how-to-write-capital-letters-in-calligraphy", "calligraphy-spacing-techniques"],
    publishedAt: "2024-01-20",
    updatedAt: "2024-03-22",
    readingTime: 10,
    wordCount: 2000
  },
  {
    slug: "calligraphy-alphabet-practice-sheets",
    title: "Calligraphy Alphabet Practice Sheets: Free Printable Worksheets",
    metaTitle: "Calligraphy Alphabet Practice Sheets | Free Printables 2024",
    metaDescription: "Download free calligraphy alphabet practice sheets. Printable worksheets for beginners to master letterforms with guided exercises.",
    excerpt: "Practice makes perfect in calligraphy. Access our collection of free printable practice sheets designed to help you master every letter.",
    category: "Resources",
    tags: ["practice sheets", "worksheets", "printables", "beginners"],
    keywords: ["calligraphy practice sheets", "calligraphy worksheets", "alphabet practice", "free calligraphy sheets"],
    relatedSlugs: ["calligraphy-letters-a-to-z", "calligraphy-worksheets-pdf-free", "how-to-practice-calligraphy-daily"],
    publishedAt: "2024-01-22",
    updatedAt: "2024-03-25",
    readingTime: 6,
    wordCount: 1200
  },
  {
    slug: "how-to-improve-calligraphy-handwriting",
    title: "How to Improve Calligraphy Handwriting: 15 Expert Tips",
    metaTitle: "How to Improve Calligraphy Handwriting | 15 Expert Tips",
    metaDescription: "Transform your calligraphy handwriting with these 15 proven techniques. From posture to practice routines, improve your lettering skills fast.",
    excerpt: "Whether you are a beginner or intermediate calligrapher, there is always room for improvement. These expert tips will elevate your handwriting.",
    category: "Techniques",
    tags: ["improvement", "tips", "handwriting", "practice"],
    keywords: ["improve calligraphy", "calligraphy handwriting", "better calligraphy", "calligraphy tips"],
    relatedSlugs: ["calligraphy-mistakes-beginners-should-avoid", "how-to-practice-calligraphy-daily", "calligraphy-spacing-techniques"],
    publishedAt: "2024-01-25",
    updatedAt: "2024-03-28",
    readingTime: 11,
    wordCount: 2200
  },
  {
    slug: "best-calligraphy-fonts-for-beginners",
    title: "Best Calligraphy Fonts for Beginners: 12 Easy Styles to Learn",
    metaTitle: "Best Calligraphy Fonts for Beginners | 12 Easy Styles",
    metaDescription: "Discover the 12 best calligraphy fonts for beginners. Learn which styles are easiest to master and how to get started with each one.",
    excerpt: "Not all calligraphy styles are created equal for beginners. Discover which fonts will give you quick wins while building strong foundations.",
    category: "Styles",
    tags: ["fonts", "beginners", "styles", "learning"],
    keywords: ["calligraphy fonts beginners", "easy calligraphy fonts", "beginner calligraphy styles", "best fonts to learn"],
    relatedSlugs: ["types-of-calligraphy-styles", "modern-calligraphy-vs-traditional-calligraphy", "fake-calligraphy-for-beginners"],
    publishedAt: "2024-01-28",
    updatedAt: "2024-04-01",
    readingTime: 9,
    wordCount: 1800
  },
  {
    slug: "modern-calligraphy-vs-traditional-calligraphy",
    title: "Modern Calligraphy vs Traditional Calligraphy: Key Differences",
    metaTitle: "Modern vs Traditional Calligraphy | Complete Comparison Guide",
    metaDescription: "Understand the key differences between modern and traditional calligraphy. Learn which style suits your goals and how to master each approach.",
    excerpt: "Modern and traditional calligraphy each have their own beauty and rules. Understanding the differences helps you choose your path.",
    category: "Styles",
    tags: ["modern", "traditional", "comparison", "styles"],
    keywords: ["modern calligraphy", "traditional calligraphy", "calligraphy styles comparison", "modern vs traditional"],
    relatedSlugs: ["types-of-calligraphy-styles", "best-calligraphy-fonts-for-beginners", "brush-pen-calligraphy-tutorial"],
    publishedAt: "2024-02-01",
    updatedAt: "2024-04-05",
    readingTime: 10,
    wordCount: 2000
  },
  {
    slug: "types-of-calligraphy-styles",
    title: "Types of Calligraphy Styles: Complete Guide to 20+ Styles",
    metaTitle: "Types of Calligraphy Styles | 20+ Styles Explained",
    metaDescription: "Explore 20+ types of calligraphy styles from around the world. From Copperplate to Arabic, discover the history and techniques of each style.",
    excerpt: "From ancient scripts to modern brush lettering, calligraphy encompasses a rich variety of styles. Explore them all in this comprehensive guide.",
    category: "Styles",
    tags: ["styles", "overview", "scripts", "typography"],
    keywords: ["calligraphy styles", "types of calligraphy", "calligraphy scripts", "different calligraphy styles"],
    relatedSlugs: ["modern-calligraphy-vs-traditional-calligraphy", "best-calligraphy-fonts-for-beginners", "brush-pen-calligraphy-tutorial"],
    publishedAt: "2024-02-05",
    updatedAt: "2024-04-08",
    readingTime: 14,
    wordCount: 2800
  },
  {
    slug: "calligraphy-tools-for-beginners",
    title: "Calligraphy Tools for Beginners: Essential Supplies Guide",
    metaTitle: "Calligraphy Tools for Beginners | Essential Supplies 2024",
    metaDescription: "Complete guide to calligraphy tools for beginners. Learn which pens, inks, papers, and accessories you need to start your calligraphy journey.",
    excerpt: "Having the right tools makes learning calligraphy much easier. This guide covers everything you need to get started without overspending.",
    category: "Tools",
    tags: ["tools", "supplies", "beginners", "equipment"],
    keywords: ["calligraphy tools", "calligraphy supplies", "beginner calligraphy kit", "calligraphy equipment"],
    relatedSlugs: ["best-pens-for-calligraphy", "brush-pen-calligraphy-tutorial", "fake-calligraphy-for-beginners"],
    publishedAt: "2024-02-08",
    updatedAt: "2024-04-10",
    readingTime: 11,
    wordCount: 2200
  },
  {
    slug: "best-pens-for-calligraphy",
    title: "Best Pens for Calligraphy: Top 15 Picks for Every Budget",
    metaTitle: "Best Pens for Calligraphy 2024 | Top 15 Reviewed",
    metaDescription: "Find the best pens for calligraphy at every price point. Expert reviews of brush pens, dip pens, and markers for beginners to professionals.",
    excerpt: "The right pen can make or break your calligraphy experience. We have tested dozens of pens to bring you the top 15 recommendations.",
    category: "Tools",
    tags: ["pens", "tools", "reviews", "recommendations"],
    keywords: ["best calligraphy pens", "calligraphy pen reviews", "brush pens calligraphy", "dip pens calligraphy"],
    relatedSlugs: ["calligraphy-tools-for-beginners", "brush-pen-calligraphy-tutorial", "fake-calligraphy-for-beginners"],
    publishedAt: "2024-02-12",
    updatedAt: "2024-04-12",
    readingTime: 13,
    wordCount: 2600
  },
  {
    slug: "brush-pen-calligraphy-tutorial",
    title: "Brush Pen Calligraphy Tutorial: Complete Step-by-Step Guide",
    metaTitle: "Brush Pen Calligraphy Tutorial | Step-by-Step Guide",
    metaDescription: "Master brush pen calligraphy with our detailed tutorial. Learn pressure techniques, basic strokes, and create beautiful lettering step by step.",
    excerpt: "Brush pen calligraphy is one of the most accessible forms of modern lettering. This tutorial takes you from zero to confident lettering.",
    category: "Tutorials",
    tags: ["brush pen", "tutorial", "modern calligraphy", "techniques"],
    keywords: ["brush pen calligraphy", "brush lettering tutorial", "brush pen techniques", "how to use brush pens"],
    relatedSlugs: ["best-pens-for-calligraphy", "modern-calligraphy-vs-traditional-calligraphy", "how-to-connect-letters-in-calligraphy"],
    publishedAt: "2024-02-15",
    updatedAt: "2024-04-15",
    readingTime: 15,
    wordCount: 3000
  },
  {
    slug: "fake-calligraphy-for-beginners",
    title: "Fake Calligraphy for Beginners: Create Beautiful Lettering with Any Pen",
    metaTitle: "Fake Calligraphy for Beginners | No Special Pens Needed",
    metaDescription: "Learn fake calligraphy using any pen you have. This beginner-friendly technique creates stunning results without expensive tools.",
    excerpt: "No brush pen? No problem. Fake calligraphy lets you create beautiful lettering with any pen you have lying around.",
    category: "Techniques",
    tags: ["fake calligraphy", "beginners", "faux calligraphy", "techniques"],
    keywords: ["fake calligraphy", "faux calligraphy", "calligraphy with regular pen", "fake calligraphy tutorial"],
    relatedSlugs: ["calligraphy-tools-for-beginners", "best-pens-for-calligraphy", "easy-calligraphy-words-for-beginners"],
    publishedAt: "2024-02-18",
    updatedAt: "2024-04-18",
    readingTime: 8,
    wordCount: 1600
  },
  {
    slug: "calligraphy-name-writing-ideas",
    title: "Calligraphy Name Writing Ideas: 50+ Beautiful Styles",
    metaTitle: "Calligraphy Name Writing Ideas | 50+ Beautiful Styles",
    metaDescription: "Get inspired with 50+ calligraphy name writing ideas. Perfect for place cards, invitations, gifts, and personal projects.",
    excerpt: "Writing names in calligraphy is one of the most requested skills. Explore over 50 styles to find your signature look.",
    category: "Inspiration",
    tags: ["names", "ideas", "styles", "projects"],
    keywords: ["calligraphy name writing", "name in calligraphy", "calligraphy name ideas", "write name in calligraphy"],
    relatedSlugs: ["calligraphy-design-ideas-for-instagram", "how-to-write-quotes-in-calligraphy", "calligraphy-logo-design-ideas"],
    publishedAt: "2024-02-22",
    updatedAt: "2024-04-20",
    readingTime: 9,
    wordCount: 1800
  },
  {
    slug: "calligraphy-for-school-projects",
    title: "Calligraphy for School Projects: Easy Techniques and Ideas",
    metaTitle: "Calligraphy for School Projects | Easy Techniques & Ideas",
    metaDescription: "Learn calligraphy for school projects with easy techniques. Create impressive headings, titles, and decorative elements for any assignment.",
    excerpt: "Make your school projects stand out with beautiful calligraphy. These easy techniques work for students of all ages.",
    category: "Projects",
    tags: ["school", "projects", "students", "easy"],
    keywords: ["calligraphy school projects", "calligraphy for students", "school project calligraphy", "easy calligraphy projects"],
    relatedSlugs: ["calligraphy-heading-ideas-for-notes", "fake-calligraphy-for-beginners", "easy-calligraphy-words-for-beginners"],
    publishedAt: "2024-02-25",
    updatedAt: "2024-04-22",
    readingTime: 7,
    wordCount: 1400
  },
  {
    slug: "calligraphy-heading-ideas-for-notes",
    title: "Calligraphy Heading Ideas for Notes: 40+ Stunning Designs",
    metaTitle: "Calligraphy Heading Ideas for Notes | 40+ Designs",
    metaDescription: "Transform your notes with 40+ calligraphy heading ideas. Perfect for bullet journals, study notes, and planners.",
    excerpt: "Beautiful headings can transform ordinary notes into works of art. Get inspired with these 40+ calligraphy heading designs.",
    category: "Inspiration",
    tags: ["headings", "notes", "bullet journal", "ideas"],
    keywords: ["calligraphy headings", "heading ideas", "calligraphy notes", "bullet journal calligraphy"],
    relatedSlugs: ["calligraphy-for-school-projects", "calligraphy-design-ideas-for-instagram", "how-to-write-quotes-in-calligraphy"],
    publishedAt: "2024-02-28",
    updatedAt: "2024-04-25",
    readingTime: 8,
    wordCount: 1600
  },
  {
    slug: "how-to-write-quotes-in-calligraphy",
    title: "How to Write Quotes in Calligraphy: Layout and Design Tips",
    metaTitle: "How to Write Quotes in Calligraphy | Layout & Design Guide",
    metaDescription: "Learn how to write beautiful quotes in calligraphy. Master layout, hierarchy, and design techniques for stunning quote art.",
    excerpt: "Quote art is one of the most popular calligraphy applications. Learn how to lay out and design quotes that captivate.",
    category: "Tutorials",
    tags: ["quotes", "layout", "design", "composition"],
    keywords: ["calligraphy quotes", "write quotes calligraphy", "quote art", "calligraphy quote design"],
    relatedSlugs: ["calligraphy-heading-ideas-for-notes", "calligraphy-design-ideas-for-instagram", "calligraphy-spacing-techniques"],
    publishedAt: "2024-03-02",
    updatedAt: "2024-04-28",
    readingTime: 10,
    wordCount: 2000
  },
  {
    slug: "calligraphy-mistakes-beginners-should-avoid",
    title: "Calligraphy Mistakes Beginners Should Avoid: 18 Common Errors",
    metaTitle: "18 Calligraphy Mistakes Beginners Should Avoid",
    metaDescription: "Avoid these 18 common calligraphy mistakes that hold beginners back. Learn what to fix and how to improve your lettering faster.",
    excerpt: "Learning from mistakes is important, but avoiding common pitfalls is even better. Here are 18 mistakes to watch out for.",
    category: "Techniques",
    tags: ["mistakes", "beginners", "tips", "improvement"],
    keywords: ["calligraphy mistakes", "beginner calligraphy errors", "calligraphy tips", "avoid calligraphy mistakes"],
    relatedSlugs: ["how-to-improve-calligraphy-handwriting", "how-to-practice-calligraphy-daily", "calligraphy-spacing-techniques"],
    publishedAt: "2024-03-05",
    updatedAt: "2024-05-01",
    readingTime: 11,
    wordCount: 2200
  },
  {
    slug: "how-to-practice-calligraphy-daily",
    title: "How to Practice Calligraphy Daily: 30-Day Practice Plan",
    metaTitle: "How to Practice Calligraphy Daily | 30-Day Plan",
    metaDescription: "Build a daily calligraphy practice habit with our 30-day plan. Structured exercises and tips to improve consistently.",
    excerpt: "Consistent practice is the secret to calligraphy mastery. This 30-day plan makes daily practice achievable and effective.",
    category: "Practice",
    tags: ["practice", "daily", "routine", "improvement"],
    keywords: ["daily calligraphy practice", "calligraphy practice routine", "30 day calligraphy", "practice calligraphy daily"],
    relatedSlugs: ["how-to-improve-calligraphy-handwriting", "calligraphy-alphabet-practice-sheets", "calligraphy-worksheets-pdf-free"],
    publishedAt: "2024-03-08",
    updatedAt: "2024-05-05",
    readingTime: 12,
    wordCount: 2400
  },
  {
    slug: "calligraphy-worksheets-pdf-free",
    title: "Calligraphy Worksheets PDF Free: Download 20+ Practice Sheets",
    metaTitle: "Free Calligraphy Worksheets PDF | 20+ Practice Sheets",
    metaDescription: "Download 20+ free calligraphy worksheets in PDF format. Printable practice sheets for multiple styles and skill levels.",
    excerpt: "Get your hands on our collection of free calligraphy worksheets. Printable PDFs for various styles and skill levels.",
    category: "Resources",
    tags: ["worksheets", "pdf", "free", "printables"],
    keywords: ["calligraphy worksheets pdf", "free calligraphy worksheets", "printable calligraphy sheets", "calligraphy pdf"],
    relatedSlugs: ["calligraphy-alphabet-practice-sheets", "how-to-practice-calligraphy-daily", "calligraphy-letters-a-to-z"],
    publishedAt: "2024-03-12",
    updatedAt: "2024-05-08",
    readingTime: 5,
    wordCount: 1000
  },
  {
    slug: "easy-calligraphy-words-for-beginners",
    title: "Easy Calligraphy Words for Beginners: 100+ Practice Words",
    metaTitle: "Easy Calligraphy Words for Beginners | 100+ Words to Practice",
    metaDescription: "Start practicing with 100+ easy calligraphy words perfect for beginners. Organized by difficulty and letter combinations.",
    excerpt: "The best way to learn calligraphy is by writing real words. Start with these 100+ beginner-friendly words organized by difficulty.",
    category: "Practice",
    tags: ["words", "beginners", "practice", "easy"],
    keywords: ["easy calligraphy words", "calligraphy words beginners", "practice words calligraphy", "simple calligraphy words"],
    relatedSlugs: ["fake-calligraphy-for-beginners", "calligraphy-for-school-projects", "calligraphy-name-writing-ideas"],
    publishedAt: "2024-03-15",
    updatedAt: "2024-05-10",
    readingTime: 7,
    wordCount: 1400
  },
  {
    slug: "calligraphy-design-ideas-for-instagram",
    title: "Calligraphy Design Ideas for Instagram: Create Viral Content",
    metaTitle: "Calligraphy Design Ideas for Instagram | Viral Content Tips",
    metaDescription: "Create stunning calligraphy content for Instagram with these design ideas. Learn layouts, color schemes, and techniques that get engagement.",
    excerpt: "Instagram is the perfect platform for showcasing calligraphy. Learn design techniques that help your lettering stand out.",
    category: "Projects",
    tags: ["instagram", "social media", "design", "ideas"],
    keywords: ["calligraphy instagram", "instagram calligraphy ideas", "social media calligraphy", "calligraphy content"],
    relatedSlugs: ["calligraphy-name-writing-ideas", "how-to-write-quotes-in-calligraphy", "calligraphy-logo-design-ideas"],
    publishedAt: "2024-03-18",
    updatedAt: "2024-05-12",
    readingTime: 9,
    wordCount: 1800
  },
  {
    slug: "calligraphy-logo-design-ideas",
    title: "Calligraphy Logo Design Ideas: 30+ Inspiring Examples",
    metaTitle: "Calligraphy Logo Design Ideas | 30+ Inspiring Examples",
    metaDescription: "Get inspired by 30+ calligraphy logo design ideas. Learn how to create elegant hand-lettered logos for brands and businesses.",
    excerpt: "Hand-lettered logos have a unique charm that sets brands apart. Explore these 30+ calligraphy logo ideas for inspiration.",
    category: "Projects",
    tags: ["logos", "design", "branding", "ideas"],
    keywords: ["calligraphy logo", "hand lettered logo", "calligraphy branding", "logo design ideas"],
    relatedSlugs: ["calligraphy-design-ideas-for-instagram", "calligraphy-name-writing-ideas", "types-of-calligraphy-styles"],
    publishedAt: "2024-03-22",
    updatedAt: "2024-05-15",
    readingTime: 10,
    wordCount: 2000
  },
  {
    slug: "how-to-write-numbers-in-calligraphy",
    title: "How to Write Numbers in Calligraphy: Complete Number Guide",
    metaTitle: "How to Write Numbers in Calligraphy | Complete Guide",
    metaDescription: "Learn how to write numbers 0-9 in calligraphy. Master number letterforms that match your calligraphy style perfectly.",
    excerpt: "Numbers often get overlooked in calligraphy practice, but they are essential for dates, addresses, and designs. Master all ten digits here.",
    category: "Fundamentals",
    tags: ["numbers", "basics", "letterforms", "tutorial"],
    keywords: ["calligraphy numbers", "write numbers calligraphy", "number calligraphy", "calligraphy digits"],
    relatedSlugs: ["calligraphy-letters-a-to-z", "how-to-write-capital-letters-in-calligraphy", "calligraphy-spacing-techniques"],
    publishedAt: "2024-03-25",
    updatedAt: "2024-05-18",
    readingTime: 8,
    wordCount: 1600
  },
  {
    slug: "how-to-connect-letters-in-calligraphy",
    title: "How to Connect Letters in Calligraphy: Smooth Transitions Guide",
    metaTitle: "How to Connect Letters in Calligraphy | Transition Guide",
    metaDescription: "Master letter connections in calligraphy for smooth, flowing script. Learn techniques for seamless transitions between all letter combinations.",
    excerpt: "Connecting letters smoothly is what separates amateur calligraphy from professional work. Learn the techniques for perfect connections.",
    category: "Techniques",
    tags: ["connections", "transitions", "techniques", "flow"],
    keywords: ["connect letters calligraphy", "letter connections", "calligraphy transitions", "flowing calligraphy"],
    relatedSlugs: ["how-to-write-capital-letters-in-calligraphy", "how-to-write-small-letters-in-calligraphy", "calligraphy-spacing-techniques"],
    publishedAt: "2024-03-28",
    updatedAt: "2024-05-20",
    readingTime: 10,
    wordCount: 2000
  },
  {
    slug: "calligraphy-spacing-techniques",
    title: "Calligraphy Spacing Techniques: Perfect Letter and Word Spacing",
    metaTitle: "Calligraphy Spacing Techniques | Perfect Spacing Guide",
    metaDescription: "Learn professional calligraphy spacing techniques for letters, words, and lines. Achieve balanced, beautiful compositions every time.",
    excerpt: "Good spacing is the invisible foundation of beautiful calligraphy. Master these techniques for professional-looking results.",
    category: "Techniques",
    tags: ["spacing", "composition", "techniques", "layout"],
    keywords: ["calligraphy spacing", "letter spacing", "word spacing calligraphy", "calligraphy composition"],
    relatedSlugs: ["how-to-connect-letters-in-calligraphy", "how-to-improve-calligraphy-handwriting", "how-to-write-quotes-in-calligraphy"],
    publishedAt: "2024-03-30",
    updatedAt: "2024-05-22",
    readingTime: 9,
    wordCount: 1800
  }
]

export const articleCategories = [
  { name: "Fundamentals", slug: "fundamentals", description: "Core calligraphy skills and alphabet basics" },
  { name: "Techniques", slug: "techniques", description: "Advanced methods and improvement tips" },
  { name: "Styles", slug: "styles", description: "Different calligraphy styles and comparisons" },
  { name: "Tools", slug: "tools", description: "Pens, inks, papers, and supplies" },
  { name: "Tutorials", slug: "tutorials", description: "Step-by-step guides and how-tos" },
  { name: "Resources", slug: "resources", description: "Worksheets, printables, and downloads" },
  { name: "Practice", slug: "practice", description: "Practice routines and exercises" },
  { name: "Inspiration", slug: "inspiration", description: "Ideas and creative projects" },
  { name: "Projects", slug: "projects", description: "Real-world applications and designs" }
]

export function getArticleBySlug(slug: string): Article | undefined {
  return articles.find((article) => article.slug === slug)
}

export function getRelatedArticles(slug: string, limit = 6): Article[] {
  const article = getArticleBySlug(slug)
  if (!article) return []
  
  const related = article.relatedSlugs
    .map((relatedSlug) => getArticleBySlug(relatedSlug))
    .filter((a): a is Article => a !== undefined)
  
  // If we need more, find articles with same category or tags
  if (related.length < limit) {
    const additionalArticles = articles
      .filter((a) => 
        a.slug !== slug && 
        !article.relatedSlugs.includes(a.slug) &&
        (a.category === article.category || a.tags.some((tag) => article.tags.includes(tag)))
      )
      .slice(0, limit - related.length)
    
    related.push(...additionalArticles)
  }
  
  return related.slice(0, limit)
}

export function getArticlesByCategory(category: string): Article[] {
  return articles.filter((article) => article.category.toLowerCase() === category.toLowerCase())
}

export function getArticlesByTag(tag: string): Article[] {
  return articles.filter((article) => article.tags.includes(tag.toLowerCase()))
}

export function getAllTags(): string[] {
  const tags = new Set<string>()
  articles.forEach((article) => article.tags.forEach((tag) => tags.add(tag)))
  return Array.from(tags).sort()
}
