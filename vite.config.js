import { defineConfig } from 'vite';
import { glob } from 'glob';
import injectHTML from 'vite-plugin-html-inject';
import FullReload from 'vite-plugin-full-reload';
import SortCss from 'postcss-sort-media-queries';

export default defineConfig(({ command }) => ({
  // base для GitHub Pages
  base: command === 'serve' ? '/' : '/goit-js-hw-11/',

  // папка з твоїм кодом
  root: 'src',

  build: {
    // результат збірки у корень проекту dist
    outDir: '../dist',
    emptyOutDir: true,

    rollupOptions: {
      // всі html файли у src автоматично збираються
      input: glob.sync('./src/*.html'),

      output: {
        // всі assets (css, зображення, шрифти) у папку assets з хешем
        assetFileNames: 'assets/[name]-[hash][extname]',
        // JS файли з хешем
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  },

  plugins: [
    // інжекція змінних у html
    injectHTML(),
    // live reload при зміні html
    FullReload(['./src/**/*.html']),
    // сортування медіа-запитів у css
    SortCss({ sort: 'mobile-first' }),
  ],
}));
