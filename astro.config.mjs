import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import icon from "astro-icon";
import node from '@astrojs/node';
import vercelServerless from '@astrojs/vercel';

export default defineConfig({
    //output: 'static',
    output: "server",
    adapter: vercelServerless(),
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