import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'waddle-web',
      formats: ['es', 'umd'],
      fileName: (format) => `waddle-web.${format}.js`,
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js'],
      output: {
        globals: {
          'lit': 'lit',
          'lit/decorators.js': 'litDecorators',
        },
      },
    },
  },
  server: {
    port: 3000,
  },
  plugins: [
    dts({
      include: ['src/**/*.ts'],
      exclude: ['src/**/*.test.ts'],
    }),
  ],
});
