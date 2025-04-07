import { fileURLToPath, URL } from 'node:url';

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueDevTools from 'vite-plugin-vue-devtools';
import vuetify from 'vite-plugin-vuetify';
import svgLoader from 'vite-svg-loader';

export default defineConfig({
  base: '/',
  server: {
    port: 3000,
  },
  plugins: [
    vue(),
    vueDevTools(),
    vuetify({
      autoImport: true, // Автоматический импорт компонентов
    }),
    svgLoader({
      defaultImport: 'component',
      svgo: false,
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      // '@': path.resolve(__dirname, './src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/assets/scss/vars/index.scss";
          @import "@/assets/scss/mixins/index.scss";
        `,
        silenceDeprecations: ['legacy-js-api', 'import', 'global-builtin'],
      },
    },
  },
});
