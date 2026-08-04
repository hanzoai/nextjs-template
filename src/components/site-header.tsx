import Link from "next/link"
import { Button } from "@hanzo/ui"
import { ThemeToggleNext } from "@hanzo/ui/product"

import { siteContent } from "@/content/site-content"
import { Icons } from "@/components/icons"
import { MainNav } from "@/components/main-nav"

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="container site-header__bar">
        <MainNav items={siteContent.mainNav} />
        <nav className="site-header__actions">
          <Button asChild variant="ghost" size="icon">
            <Link href={siteContent.links.github} target="_blank" rel="noreferrer">
              <Icons.gitHub className="icon" />
              <span className="sr-only">GitHub</span>
            </Link>
          </Button>
          <Button asChild variant="ghost" size="icon">
            <Link href={siteContent.links.x} target="_blank" rel="noreferrer">
              <Icons.x className="icon" />
              <span className="sr-only">X</span>
            </Link>
          </Button>
          <ThemeToggleNext />
        </nav>
      </div>
    </header>
  )
}
