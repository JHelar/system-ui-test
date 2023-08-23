import { Meta, StoryObj } from '@storybook/react';
import { Color } from './Color';
import { Label } from '../Label';

export default {
  title: 'Utils / Color',
  component: Color,
  tags: ['autodocs'],
} satisfies Meta;

type Story = StoryObj<typeof Color>;
export const Default: Story = {
  render: () => (
    <Color colorCategory='positive' colorVariant='text' colorName='lowContrast'>
      <Label variant='headline'>Success</Label>
    </Color>
  ),
};
