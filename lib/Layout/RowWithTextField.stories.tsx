import { Meta, StoryObj } from '@storybook/react';
import { RowWithTextField } from './Layout';
import { Label } from '../Label';
import { TextField } from '../TextField';

export default {
  title: 'Components / Layout / RowWithTextField',
  component: RowWithTextField,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    action: (props) => (
      <TextField {...props} variant='simple' placeholder='Placeholder' />
    ),
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithTextField>;

export const Default: StoryObj<typeof RowWithTextField> = {};

export const WithInstruction: StoryObj<typeof RowWithTextField> = {
  args: {
    instruction: (props) => <Label {...props}>Instruction</Label>,
  },
};
