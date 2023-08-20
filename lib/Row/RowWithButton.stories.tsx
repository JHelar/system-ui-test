import { Meta, StoryObj } from '@storybook/react';
import { RowWithButton } from './Row';
import { Label } from '../Label';
import { Button } from '../Button';

export default {
  title: 'Components / Row / RowWithButton',
  component: RowWithButton,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    button: () => <Button>Action</Button>,
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithButton>;

export const Default: StoryObj<typeof RowWithButton> = {};
