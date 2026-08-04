import "@/style/globals.css"
import { Metadata, Viewport } from "next"
import { GeistMono } from "geist/font/mono"
import { GeistSans } from "geist/font/sans"

import { siteContent } from "@/content/site-content"
import { SiteHeader } from "@/components/site-header"
import { Providers } from "@/app/providers"

export const metadata: Metadata = {
  title: {
    default: siteContent.name,
    template: `%s - ${siteContent.name}`,
  },
  description: siteContent.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
}

interface RootLayoutProps {
  children: React.ReactNode
}

// Geist Sans + Geist Mono are the Hanzo faces; `@hanzo/ui/theme.css` types
// everything off `--font-geist-sans` / `--font-geist-mono`, which these two
// classes bind. Self-hosted — a page load makes no third-party font request.
export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`dark ${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <Providers>
          <SiteHeader />
          <main>{children}</main>
        </Providers>
      </body>
    </html>
  )
}
