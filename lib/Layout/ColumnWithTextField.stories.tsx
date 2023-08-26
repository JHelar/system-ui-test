import { Meta, StoryObj } from '@storybook/react';
import { ColumnWithTextField } from './Layout';
import { Label } from '../Label';
import { TextField } from '../TextField';

export default {
  title: 'Components / Layout / ColumnWithTextField',
  component: ColumnWithTextField,
  args: {
    label: () => <Label>Label</Label>,
    action: () => <TextField variant='simple' placeholder='Placeholder' />,
    description: () => <Label>Description</Label>,
  },
} satisfies Meta<typeof ColumnWithTextField>;

export const Default: StoryObj<typeof ColumnWithTextField> = {};

export const WithInstruction: StoryObj<typeof ColumnWithTextField> = {
  args: {
    instruction: () => <Label>Instruction</Label>,
  },
};

export const WithSuffix: StoryObj<typeof ColumnWithTextField> = {
  args: {
    instruction: () => <Label>Instruction</Label>,
    suffix: () => <Label>Suffix</Label>,
  },
};
