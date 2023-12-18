import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://peacock-1234.netlify.app/",
  integrations: [preact()]
});