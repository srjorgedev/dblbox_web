// @ts-check
import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
  output: "server",
  site: "https://www.dbl-box.com",
  // site: "http://localhost:4321",
  integrations: [react()],
  adapter: vercel({
    isr: {
      expiration: 60 * 60 * 24,
    },
  }),
});