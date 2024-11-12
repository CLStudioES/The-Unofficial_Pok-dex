import { defineConfig } from "astro/config";
import vercelServerless from "@astrojs/vercel/serverless";

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  integrations: [tailwind()],
  output: "server",
  adapter: vercelServerless(),
});