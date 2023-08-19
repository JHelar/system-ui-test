import { Meta, StoryObj } from '@storybook/react';
import { Checkbox } from './Checkbox';

export default {
  title: 'Components / Input / Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    name: 'story',
    disabled: false,
    label: undefined,
    description: undefined,
  },
} satisfies Meta<typeof Checkbox>;

type Story = StoryObj<typeof Checkbox>;
export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const Checked: Story = {
  args: {
    checked: true,
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Label',
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    label: 'Label',
    description: 'Description',
  },
};
