import {
  vitePlugin,
  removeViteLogging,
} from '@remcovaes/web-test-runner-vite-plugin';
import { playwrightLauncher } from '@web/test-runner-playwright';

const browsers = [
  playwrightLauncher({ product: 'chromium' }),
  playwrightLauncher({ product: 'firefox' }),
  playwrightLauncher({ product: 'webkit' }),
];

export default {
  files: ['src/**/*.test.ts'],
  plugins: [vitePlugin()],
  nodeResolve: true,
  coverage: true,
  port: 3100,
  filterBrowserLogs: removeViteLogging,
  browsers: browsers,
  concurrentBrowsers: browsers.length,
};
