// @ts-check
import { defineConfig } from 'astro/config';

import mdx from '@astrojs/mdx';

import svelte from "@astrojs/svelte";


import tailwindcss from "@tailwindcss/vite";


import relativeLinks from "astro-relative-links";


// https://astro.build/config
export default defineConfig({
  site: "https://elmutaun.github.io",

  integrations: [mdx(), svelte(), relativeLinks()],

  i18n: {
    defaultLocale: "ja-jp",
    locales: ["ja-jp", "en-us"]
  },

  vite: {
    plugins: [tailwindcss()]
  }
});