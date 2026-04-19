import { Metadata } from "next"
import Link from "next/link"
import { SiteHeader } from "@/components/layout/site-header"
import { SiteFooter } from "@/components/layout/site-footer"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Calligraphy Generator AI. Learn how we handle your data and protect your privacy when using our font converters and calligraphy generators.",
  openGraph: {
    title: "Privacy Policy | Calligraphy Generator AI",
    description: "Learn how we handle your data and protect your privacy.",
    type: "website",
    url: "https://calligraphygeneratorai.com/privacy-policy",
  },
  alternates: {
    canonical: "https://calligraphygeneratorai.com/privacy-policy",
  },
}

export default function PrivacyPolicyPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="border-b border-border bg-secondary/30 py-12 md:py-16">
          <div className="container mx-auto max-w-7xl px-4">
            <nav className="mb-6 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary">Home</Link>
              <span className="mx-2">/</span>
              <span className="text-foreground">Privacy Policy</span>
            </nav>
            <h1 className="text-4xl font-bold tracking-tight md:text-5xl">
              Privacy Policy
            </h1>
            <p className="mt-4 text-muted-foreground">
              Last updated: {new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            </p>
          </div>
        </section>

        <section className="py-12 md:py-16">
          <div className="container mx-auto max-w-4xl px-4">
            <div className="prose prose-neutral dark:prose-invert max-w-none">
              <h2>Introduction</h2>
              <p>
                At Calligraphy Generator AI (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;), we take your 
                privacy seriously. This Privacy Policy explains how we collect, use, and 
                protect your information when you use our website and services.
              </p>

              <h2>Text Processing &amp; Data Handling</h2>
              <p>
                <strong>We do not store your text.</strong> All text processing for our 
                font converters and calligraphy generators happens entirely in your web 
                browser using client-side JavaScript. This means:
              </p>
              <ul>
                <li>Your text input is never transmitted to our servers</li>
                <li>Your text is never stored in any database</li>
                <li>Your text is never shared with third parties</li>
                <li>Your text remains on your device at all times</li>
              </ul>
              <p>
                When you close the browser tab or refresh the page, all text you entered 
                is automatically cleared from memory.
              </p>

              <h2>Information We Collect</h2>
              <h3>Automatically Collected Information</h3>
              <p>
                Like most websites, we may automatically collect certain technical 
                information when you visit our site:
              </p>
              <ul>
                <li>Browser type and version</li>
                <li>Device type (desktop, mobile, tablet)</li>
                <li>Operating system</li>
                <li>Pages visited and time spent</li>
                <li>Referring website</li>
                <li>IP address (anonymized)</li>
              </ul>
              <p>
                This information is collected through standard web analytics tools and 
                is used to improve our services and understand how users interact with 
                our platform.
              </p>

              <h3>Information You Provide</h3>
              <p>
                If you contact us through our contact form, we collect:
              </p>
              <ul>
                <li>Your name</li>
                <li>Your email address</li>
                <li>The content of your message</li>
              </ul>
              <p>
                This information is used solely to respond to your inquiry and is not 
                shared with third parties.
              </p>

              <h2>Cookies</h2>
              <p>
                We may use cookies and similar technologies to enhance your experience. 
                These may include:
              </p>
              <ul>
                <li>Essential cookies for site functionality</li>
                <li>Analytics cookies to understand site usage</li>
                <li>Preference cookies to remember your settings</li>
              </ul>
              <p>
                You can control cookies through your browser settings. Disabling cookies 
                may affect some features of our site.
              </p>

              <h2>Third-Party Services</h2>
              <p>
                We may use third-party services for analytics and site improvements. 
                These services have their own privacy policies governing their use of 
                your information.
              </p>

              <h2>Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect 
                your information. However, no method of transmission over the Internet is 
                100% secure, and we cannot guarantee absolute security.
              </p>

              <h2>Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to children under 13. We do not knowingly 
                collect personal information from children under 13.
              </p>

              <h2>Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you 
                of any changes by posting the new Privacy Policy on this page and updating 
                the &quot;Last updated&quot; date.
              </p>

              <h2>Contact Us</h2>
              <p>
                If you have any questions about this Privacy Policy, please contact us 
                through our <Link href="/contact" className="text-primary hover:underline">contact page</Link>.
              </p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
