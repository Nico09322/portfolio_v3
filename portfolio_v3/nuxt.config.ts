import { defineNuxtConfig } from 'nuxt/config'
import { cpSync, mkdirSync, readdirSync, statSync } from 'node:fs'
import { join, extname } from 'node:path'

const IMAGE_EXT = ['.jpg', '.jpeg', '.png', '.webp', '.gif', '.svg', '.avif']

function copyContentAssets(srcDir: string, destDir: string) {
  if (!statSync(srcDir, { throwIfNoEntry: false })) return
  for (const entry of readdirSync(srcDir, { withFileTypes: true })) {
    const srcPath = join(srcDir, entry.name)
    if (entry.isDirectory()) {
      copyContentAssets(srcPath, join(destDir, entry.name))
    } else if (IMAGE_EXT.includes(extname(entry.name).toLowerCase())) {
      mkdirSync(destDir, { recursive: true })
      cpSync(srcPath, join(destDir, entry.name))
    }
  }
}

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/fonts', '@nuxt/hints', '@nuxt/icon', '@nuxtjs/tailwindcss', '@nuxt/content'],
  fonts: {
    families: [
      { name: 'Taviraj', provider: 'google', weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] },
      { name: 'Kavoon', provider: 'google' },
      { name: 'Raleway', provider: 'google', weights: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] }
    ]
  },
  hooks: {
    'build:before': () => copyContentAssets('content', 'public/_content'),
    'builder:watch': (event, path) => {
      if (path.startsWith('content/') && IMAGE_EXT.includes(extname(path).toLowerCase())) {
        copyContentAssets('content', 'public/_content')
      }
    }
  }
})