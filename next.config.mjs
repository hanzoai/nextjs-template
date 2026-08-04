import { readdirSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const here = dirname(fileURLToPath(import.meta.url))

/**
 * Every installed `@hanzogui/*`, discovered rather than hardcoded — @hanzo/gui is
 * consumed at runtime through Next's own `transpilePackages`, the same arrangement
 * hanzoai/console and hanzoai/login use.
 *
 * @returns {string[]}
 */
function guiPackages() {
  try {
    return readdirSync(join(here, 'node_modules', '@hanzogui')).map((n) => `@hanzogui/${n}`)
  } catch {
    return []
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ['@hanzo/gui', '@hanzo/ui', '@hanzo/data', 'react-native-web', ...guiPackages()],
  webpack: (config) => {
    config.resolve.alias = { ...config.resolve.alias, 'react-native$': 'react-native-web' }
    // `.web.*` FIRST is what makes the react-native ecosystem resolve its web
    // variants; without it a package resolves its native entry and webpack chokes
    // on React Native's Flow source.
    config.resolve.extensions = ['.web.tsx', '.web.ts', '.web.jsx', '.web.js', ...config.resolve.extensions]
    return config
  },
}

export default nextConfig
