import Link from "next/link"

import { NavItem } from "@/types/nav"
import { siteContent } from "@/content/site-content"
import { Icons } from "@/components/icons"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  return (
    <div className="nav">
      <Link href="/" className="nav__brand">
        <Icons.logo className="icon--brand" />
        <span>{siteContent.name}</span>
      </Link>
      {items?.length ? (
        <nav className="nav__links">
          {items.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className="nav__link"
                  aria-disabled={item.disabled}
                >
                  {item.title}
                </Link>
              )
          )}
        </nav>
      ) : null}
    </div>
  )
}
