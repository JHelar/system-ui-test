import { Meta, StoryObj } from '@storybook/react';
import { RadioButton, RadioButtonGroup } from './RadioButtonGroup';

export default {
  title: 'Components / Input / RadioButtonGroup',
  component: RadioButtonGroup,
  tags: ['autodocs'],
  args: {
    children: <RadioButton value='value1' />,
    disabled: false,
  },
} satisfies Meta<typeof RadioButtonGroup>;

type Story = StoryObj<typeof RadioButtonGroup>;
export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};

export const WithLabel: Story = {
  args: {
    children: <RadioButton value='value1' label='Label' />,
  },
};

export const WithLabelAndDescription: Story = {
  args: {
    children: (
      <RadioButton value='value1' label='Label' description='Description' />
    ),
  },
};

export const MultipleRadioButtons: Story = {
  args: {
    children: (
      <>
        <RadioButton value='value1' label='Label' description='Description' />
        <RadioButton value='value2' label='Label' description='Description' />
        <RadioButton value='value3' label='Label' description='Description' />
      </>
    ),
  },
};
