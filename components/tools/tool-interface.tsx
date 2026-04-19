"use client"

import { useState, useCallback } from "react"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Copy, Check, Trash2, Download, Sparkles, Type, RotateCcw } from "lucide-react"
import { getConverter, generateCalligraphy, availableCalligraphyStyles, type CalligraphyStyle, type ConverterType } from "@/lib/converters"
import type { Tool } from "@/config/tool-registry"

interface ToolInterfaceProps {
  tool: Tool
}

export function ToolInterface({ tool }: ToolInterfaceProps) {
  const [inputText, setInputText] = useState("")
  const [outputText, setOutputText] = useState("")
  const [copied, setCopied] = useState(false)
  const [selectedStyle, setSelectedStyle] = useState<CalligraphyStyle>("cursive")

  const isGenerator = tool.category === "generator"

  const handleConvert = useCallback(() => {
    if (!inputText.trim()) return

    console.log("[v0] handleConvert called", { isGenerator, slug: tool.slug, selectedStyle })

    if (isGenerator) {
      const result = generateCalligraphy(inputText, selectedStyle)
      console.log("[v0] Generator result:", result.slice(0, 50))
      setOutputText(result)
    } else {
      const converter = getConverter(tool.slug as ConverterType)
      console.log("[v0] Converter function:", converter.name || "anonymous")
      const result = converter(inputText)
      console.log("[v0] Converter result:", result.slice(0, 50))
      setOutputText(result)
    }
  }, [inputText, tool.slug, isGenerator, selectedStyle])

  const handleCopy = useCallback(() => {
    if (!outputText) return
    navigator.clipboard.writeText(outputText)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [outputText])

  const handleClear = useCallback(() => {
    setInputText("")
    setOutputText("")
  }, [])

  const handleSwap = useCallback(() => {
    const temp = inputText
    setInputText(outputText)
    setOutputText(temp)
  }, [inputText, outputText])

  const handleDownload = useCallback(() => {
    if (!outputText) return
    const blob = new Blob([outputText], { type: "text/plain" })
    const url = URL.createObjectURL(blob)
    const a = document.createElement("a")
    a.href = url
    a.download = `${tool.slug}-output.txt`
    document.body.appendChild(a)
    a.click()
    document.body.removeChild(a)
    URL.revokeObjectURL(url)
  }, [outputText, tool.slug])

  return (
    <div className="rounded-xl border border-border bg-card p-4 shadow-lg md:p-6">
      {isGenerator && (
        <div className="mb-4">
          <label className="mb-2 block text-sm font-medium">
            Select Calligraphy Style
          </label>
          <Select value={selectedStyle} onValueChange={(v) => setSelectedStyle(v as CalligraphyStyle)}>
            <SelectTrigger className="w-full md:w-[200px]">
              <SelectValue placeholder="Select style" />
            </SelectTrigger>
            <SelectContent>
              {availableCalligraphyStyles.map((style) => (
                <SelectItem key={style} value={style}>
                  {style.charAt(0).toUpperCase() + style.slice(1)}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            {tool.inputLabel}
          </label>
          <Textarea
            placeholder={tool.inputPlaceholder}
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="min-h-[200px] resize-none bg-background text-base"
          />
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {inputText.length} characters
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={handleClear}
              className="h-8 text-xs"
            >
              <Trash2 className="mr-1 h-3 w-3" />
              Clear
            </Button>
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-sm font-medium text-muted-foreground">
            {tool.outputLabel}
          </label>
          <div className="relative min-h-[200px] rounded-md border border-input bg-background p-3">
            <p className="whitespace-pre-wrap text-base leading-relaxed">
              {outputText || (
                <span className="text-muted-foreground">
                  {isGenerator
                    ? "Your calligraphy will appear here..."
                    : "Converted text will appear here..."}
                </span>
              )}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xs text-muted-foreground">
              {outputText.length} characters
            </span>
            <div className="flex items-center gap-1">
              <Button
                variant="ghost"
                size="sm"
                onClick={handleCopy}
                disabled={!outputText}
                className="h-8 text-xs"
              >
                {copied ? (
                  <>
                    <Check className="mr-1 h-3 w-3 text-green-500" />
                    Copied
                  </>
                ) : (
                  <>
                    <Copy className="mr-1 h-3 w-3" />
                    Copy
                  </>
                )}
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={handleDownload}
                disabled={!outputText}
                className="h-8 text-xs"
              >
                <Download className="mr-1 h-3 w-3" />
                Download
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-center">
        <Button onClick={handleConvert} size="lg" className="gap-2">
          {isGenerator ? (
            <>
              <Sparkles className="h-4 w-4" />
              Generate Calligraphy
            </>
          ) : (
            <>
              <Type className="h-4 w-4" />
              Convert Text
            </>
          )}
        </Button>
        {!isGenerator && (
          <Button variant="outline" size="lg" onClick={handleSwap} className="gap-2">
            <RotateCcw className="h-4 w-4" />
            Swap
          </Button>
        )}
      </div>
    </div>
  )
}
