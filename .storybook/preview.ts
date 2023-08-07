import type { Preview } from '@storybook/web-components';

// import waddle-web build files for global usage
import '../dist/waddle-web.js';
import '../dist/styles/css/waddle-web.css';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
};

export default preview;
