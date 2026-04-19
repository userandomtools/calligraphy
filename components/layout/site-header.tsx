"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Sparkles, Type, Palette } from "lucide-react"
import { cn } from "@/lib/utils"
import { converterTools, generatorTools } from "@/config/tool-registry"

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
            <Sparkles className="h-4 w-4 text-primary-foreground" />
          </div>
          <span className="text-lg font-semibold tracking-tight">
            Calligraphy<span className="text-primary">AI</span>
          </span>
        </Link>

        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Converters</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[500px] gap-2 p-4 md:grid-cols-2">
                  {converterTools.slice(0, 8).map((tool) => (
                    <li key={tool.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Type className="h-4 w-4 text-primary" />
                            <span className="text-sm font-medium">{tool.shortName}</span>
                          </div>
                          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                            {tool.description.slice(0, 60)}...
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li className="col-span-2">
                    <NavigationMenuLink asChild>
                      <Link
                        href="/converters"
                        className="flex items-center justify-center rounded-md bg-secondary p-3 text-sm font-medium hover:bg-secondary/80"
                      >
                        View All Converters
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="bg-transparent">Generators</NavigationMenuTrigger>
              <NavigationMenuContent>
                <ul className="grid w-[400px] gap-2 p-4">
                  {generatorTools.map((tool) => (
                    <li key={tool.slug}>
                      <NavigationMenuLink asChild>
                        <Link
                          href={`/tools/${tool.slug}`}
                          className="block select-none rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                        >
                          <div className="flex items-center gap-2">
                            <Palette className="h-4 w-4 text-accent" />
                            <span className="text-sm font-medium">{tool.shortName}</span>
                          </div>
                          <p className="mt-1 line-clamp-1 text-xs text-muted-foreground">
                            {tool.description.slice(0, 60)}...
                          </p>
                        </Link>
                      </NavigationMenuLink>
                    </li>
                  ))}
                  <li>
                    <NavigationMenuLink asChild>
                      <Link
                        href="/generators"
                        className="flex items-center justify-center rounded-md bg-secondary p-3 text-sm font-medium hover:bg-secondary/80"
                      >
                        View All Generators
                      </Link>
                    </NavigationMenuLink>
                  </li>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/blog"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  Blog
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/about"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  About
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink asChild>
                <Link
                  href="/contact"
                  className="group inline-flex h-10 w-max items-center justify-center rounded-md bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none"
                >
                  Contact
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="hidden lg:flex lg:items-center lg:gap-2">
          <Button asChild>
            <Link href="/tools/arabic-calligraphy-generator">
              <Sparkles className="mr-2 h-4 w-4" />
              Try AI Generator
            </Link>
          </Button>
        </div>

        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="lg:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              <Link
                href="/"
                className="flex items-center gap-2"
                onClick={() => setOpen(false)}
              >
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary">
                  <Sparkles className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="text-lg font-semibold">CalligraphyAI</span>
              </Link>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-muted-foreground">Converters</h4>
                {converterTools.slice(0, 6).map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="text-sm hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {tool.shortName}
                  </Link>
                ))}
                <Link
                  href="/converters"
                  className="text-sm font-medium text-primary"
                  onClick={() => setOpen(false)}
                >
                  View All Converters
                </Link>
              </div>
              <div className="flex flex-col gap-2">
                <h4 className="text-sm font-semibold text-muted-foreground">Generators</h4>
                {generatorTools.map((tool) => (
                  <Link
                    key={tool.slug}
                    href={`/tools/${tool.slug}`}
                    className="text-sm hover:text-primary"
                    onClick={() => setOpen(false)}
                  >
                    {tool.shortName}
                  </Link>
                ))}
              </div>
              <div className="flex flex-col gap-2 border-t pt-4">
                <Link href="/blog" className="text-sm" onClick={() => setOpen(false)}>
                  Blog
                </Link>
                <Link href="/about" className="text-sm" onClick={() => setOpen(false)}>
                  About
                </Link>
                <Link href="/contact" className="text-sm" onClick={() => setOpen(false)}>
                  Contact
                </Link>
                <Link href="/privacy-policy" className="text-sm" onClick={() => setOpen(false)}>
                  Privacy Policy
                </Link>
              </div>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
