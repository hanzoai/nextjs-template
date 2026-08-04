import Link from "next/link"
import { Button } from "@hanzo/ui"

import { siteContent } from "@/content/site-content"

export default function IndexPage() {
  return (
    <section className="container hero">
      <h1 className="hero__title">
        The Hanzo component library,
        <br />
        on one substrate.
      </h1>
      <p className="hero__lede">
        Next.js App Router with @hanzo/ui on @hanzo/gui. Nothing is vendored:
        components are imported, the identity is CSS custom properties, and the
        same import renders on web, native and desktop.
      </p>
      <div className="hero__actions">
        <Button asChild>
          <Link href={siteContent.links.docs} target="_blank" rel="noreferrer">
            Documentation
          </Link>
        </Button>
        <Button asChild variant="outline">
          <Link href={siteContent.links.github} target="_blank" rel="noreferrer">
            GitHub
          </Link>
        </Button>
      </div>
    </section>
  )
}
