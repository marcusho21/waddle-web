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
      fileName: (format) =>
        `waddle-web${format === 'es' ? '' : `.${format}`}.js`,
    },
    rollupOptions: {
      external: ['lit', 'lit/decorators.js'],
      output: {
        globals: {
          'lit': 'lit',
          'lit/decorators.js': 'litDecorators',
        },
      },
      watch: {
        include: ['src/**.ts', 'src/**.scss'],
        exclude: 'src/**/*.test.ts',
      },
      plugins: [
        dts({
          include: ['src/**/*.ts', 'src/**/*.scss'],
          exclude: ['src/**/*.test.ts'],
        }),
      ],
    },
    sourcemap: true,
  },
  server: {
    port: 3000,
  },
});
