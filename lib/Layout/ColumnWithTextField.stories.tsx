import { Meta, StoryObj } from '@storybook/react';
import { ColumnWithTextField } from './Layout';
import { Label } from '../Label';
import { TextField } from '../TextField';

export default {
  title: 'Components / Layout / ColumnWithTextField',
  component: ColumnWithTextField,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    textField: (props) => (
      <TextField {...props} variant='simple' placeholder='Placeholder' />
    ),
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof ColumnWithTextField>;

export const Default: StoryObj<typeof ColumnWithTextField> = {};

export const WithInstruction: StoryObj<typeof ColumnWithTextField> = {
  args: {
    instruction: (props) => <Label {...props}>Instruction</Label>,
  },
};

export const WithSuffix: StoryObj<typeof ColumnWithTextField> = {
  args: {
    instruction: (props) => <Label {...props}>Instruction</Label>,
    suffix: (props) => <Label {...props}>Suffix</Label>,
  },
};
