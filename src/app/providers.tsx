'use client'

/**
 * The one provider stack: the shared Hanzo scale (`@hanzo/ui/gui-config` — the
 * same config the console and the login portal mount, so the three cannot
 * drift) plus the theme.
 *
 * `value` maps the theme onto the `dark` / `light` root class, which is exactly
 * what `@hanzo/ui/theme.css` selects on, so one toggle moves both the CSS token
 * layer the app chrome is written against and the gui token layer the
 * components render through.
 */
import { useState, type ReactNode } from 'react'
import { GuiProvider } from '@hanzo/gui'
import { NextThemeProvider } from '@hanzogui/next-theme'
import guiConfig from '@hanzo/ui/gui-config'

export function Providers({ children }: { children: ReactNode }) {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark')

  return (
    <NextThemeProvider
      defaultTheme="dark"
      value={{ dark: 'dark', light: 'light' }}
      onChangeTheme={(next: string) => setTheme(next === 'light' ? 'light' : 'dark')}
    >
      <GuiProvider config={guiConfig} defaultTheme={theme}>
        {children}
      </GuiProvider>
    </NextThemeProvider>
  )
}
