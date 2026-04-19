"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight, Copy, Check, Sparkles, Type } from "lucide-react"

export function HeroSection() {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [copied, setCopied] = useState(false)
  const [activeTab, setActiveTab] = useState("generate")

  const handleGenerate = () => {
    if (!inputText.trim()) return
    // Simulate AI generation with stylized output
    const stylizedText = inputText
      .split("")
      .map((char) => {
        const styles = ["𝓐", "𝓑", "𝓒", "𝓓", "𝓔", "𝓕", "𝓖", "𝓗", "𝓘", "𝓙", "𝓚", "𝓛", "𝓜", "𝓝", "𝓞", "𝓟", "𝓠", "𝓡", "𝓢", "𝓣", "𝓤", "𝓥", "𝓦", "𝓧", "𝓨", "𝓩"]
        const lower = ["𝓪", "𝓫", "𝓬", "𝓭", "𝓮", "𝓯", "𝓰", "𝓱", "𝓲", "𝓳", "𝓴", "𝓵", "𝓶", "𝓷", "𝓸", "𝓹", "𝓺", "𝓻", "𝓼", "𝓽", "𝓾", "𝓿", "𝔀", "𝔁", "𝔂", "𝔃"]
        if (char >= "A" && char <= "Z") {
          return styles[char.charCodeAt(0) - 65]
        } else if (char >= "a" && char <= "z") {
          return lower[char.charCodeAt(0) - 97]
        }
        return char
      })
      .join("")
    setOutputText(stylizedText)
  }

  const handleConvert = () => {
    if (!inputText.trim()) return
    // Demo conversion - shows that it processes the text
    setOutputText(`[Converted] ${inputText}`)
  }

  const handleCopy = () => {
    if (!outputText) return
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative overflow-hidden border-b border-border bg-background">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-background to-background" />
      <div className="container relative mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            <span>Powered by AI</span>
          </div>
          <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
            The Ultimate{" "}
            <span className="text-primary">Calligraphy Generator AI</span>
            {" "}&amp; Font Converter
          </h1>
          <p className="mx-auto mb-10 max-w-2xl text-pretty text-lg text-muted-foreground md:text-xl">
            Generate breathtaking calligraphy art or convert complex Indic text (Unicode to AMS, Shree Lipi, DevLys) instantly. 100% Free and browser-based.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsList className="mb-4 grid w-full grid-cols-2">
                <TabsTrigger value="generate" className="gap-2">
                  <Sparkles className="h-4 w-4" />
                  Quick AI Generate
                </TabsTrigger>
                <TabsTrigger value="convert" className="gap-2">
                  <Type className="h-4 w-4" />
                  Quick Convert
                </TabsTrigger>
              </TabsList>

              <TabsContent value="generate" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Enter Text
                    </label>
                    <Textarea
                      placeholder="Type text to transform into calligraphy..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="min-h-[120px] resize-none bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Calligraphy Output
                    </label>
                    <div className="relative min-h-[120px] rounded-md border border-input bg-background p-3">
                      <p className="text-lg leading-relaxed">
                        {outputText || (
                          <span className="text-muted-foreground">
                            Your calligraphy will appear here...
                          </span>
                        )}
                      </p>
                      {outputText && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute right-2 top-2"
                          onClick={handleCopy}
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button onClick={handleGenerate} className="gap-2">
                    <Sparkles className="h-4 w-4" />
                    Generate Calligraphy
                  </Button>
                  <Link
                    href="/generators"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    Explore all AI generators
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>

              <TabsContent value="convert" className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Unicode Input
                    </label>
                    <Textarea
                      placeholder="Paste Unicode text to convert..."
                      value={inputText}
                      onChange={(e) => setInputText(e.target.value)}
                      className="min-h-[120px] resize-none bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-muted-foreground">
                      Converted Output
                    </label>
                    <div className="relative min-h-[120px] rounded-md border border-input bg-background p-3">
                      <p className="text-lg leading-relaxed">
                        {outputText || (
                          <span className="text-muted-foreground">
                            Converted text will appear here...
                          </span>
                        )}
                      </p>
                      {outputText && (
                        <Button
                          size="icon"
                          variant="ghost"
                          className="absolute right-2 top-2"
                          onClick={handleCopy}
                        >
                          {copied ? (
                            <Check className="h-4 w-4 text-green-500" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
                  <Button onClick={handleConvert} variant="secondary" className="gap-2">
                    <Type className="h-4 w-4" />
                    Convert Text
                  </Button>
                  <Link
                    href="/converters"
                    className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
                  >
                    Explore all converters
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  )
}
