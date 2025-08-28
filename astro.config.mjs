import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import node from '@astrojs/node';

export default defineConfig({
    output: 'server',
    vite: {
      plugins: [ tailwindcss() ],
      server: {
        watch: {
          ignored: ["**/config/**"],
        },
      },
    },
    adapter: node({
      mode: 'standalone'
    }),
    integrations: [icon()]
});