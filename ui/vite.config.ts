//@ts-nocheck
import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { rmSync } from 'node:fs'

// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },

  build: {
    outDir: '../django_ui/static', // output to Django static folder
    emptyOutDir: true,
    rollupOptions: {
      output: {
        // Separate JS, CSS, and assets
        entryFileNames: 'js/[name].[hash].js',
        chunkFileNames: 'js/[name].[hash].js',
        assetFileNames: (assetInfo) => {
          const extType = assetInfo.name.split('.').pop();
          if (/css/i.test(extType)) return 'css/[name].[hash].[ext]';
          if (/png|jpe?g|svg|gif|webp|avif/i.test(extType)) return 'assets/images/[name].[hash].[ext]';
          if (/woff2?|ttf|eot/i.test(extType)) return 'assets/fonts/[name].[hash].[ext]';
          return 'assets/[name].[hash].[ext]';
        },
      },
    },
  },

  plugins: [
    vue(
      {
        template: {
          compilerOptions: {
            // treat all tags with a dash as custom elements
            isCustomElement: (tag) => tag.includes('-')
          }
        }
      }
    ),
    {
      name: 'delete-index-html',
      closeBundle() {
        try {
          rmSync('../django_ui/static/index.html', { force: true });
          rmSync('../django_ui/static/favicon.ico', { force: true });
          console.log('index.html and favicon deleted!');
        } catch (err) {
          console.error(err);
        }
      }
    }
  ]
})
