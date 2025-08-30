import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import node from '@astrojs/node';
import vercelStatic from '@astrojs/vercel/static';

export default defineConfig({
    output: 'static',
    adapter: vercelStatic(),
    vite: {
      plugins: [ tailwindcss() ],
      server: {
        watch: {
          ignored: ["**/config/**"],
        },
      },
    },
    integrations: [icon()]
});