import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel/serverless';

// Using Vite on Windows Subsystem for Linux (WSL) 2
// https://vitejs.dev/config/server-options.html#server-watch
// Note that usePolling leads to high CPU utilization.
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000, // default: 100
        binaryInterval: 1500, // default: 300
      },
    },
  },
  // https://docs.astro.build/en/reference/configuration-reference/#devtoolbarenabled
  devToolbar: {
    enabled: false,
  },
  integrations: [react(), tailwind()],
  output: 'server',
  adapter: vercel({
    // Image service doesn't work by default, so if we didn't enable it,
    // the requests sent by `<Image />` will result in 404 errors.
    // https://stackoverflow.com/a/77738867
    imageService: true,
    webAnalytics: { enabled: true },
  }),
});
