import type { Meta, StoryObj } from '@storybook/web-components';

import { html } from 'lit';

const meta: Meta = {
  component: 'wdl-button',
  title: 'Components/Button',
};
export default meta;

type Story = StoryObj;

export const Primary: Story = {
  render: () =>
    html`
      <wdl-button>Click</wdl-button>
    `,
};
