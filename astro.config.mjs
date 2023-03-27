import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import svelte from "@astrojs/svelte";

export default defineConfig({
  site: "https://website.com", //замените на ваш домен
  integrations: [tailwind(), svelte()],
});
