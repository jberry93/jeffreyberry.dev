import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
    site: "https://www.jeffreyberry.dev",
    integrations: [
        sitemap(),
        tailwind(),
    ],
});
