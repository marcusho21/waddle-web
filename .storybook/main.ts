import type { StorybookConfig } from '@storybook/web-components-vite';

import { mergeConfig } from 'vite';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  framework: {
    name: '@storybook/web-components-vite',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  async viteFinal(config, { configType }) {
    return mergeConfig(config, {
      // Add dependencies to pre-optimization
      optimizeDeps: {
        include: [
          ...(config.optimizeDeps?.include ?? []),
          '@storybook/web-components',
        ],
        exclude: [...(config.optimizeDeps?.exclude ?? []), 'lit', 'lit-html'],
      },
    });
  },
};
export default config;
