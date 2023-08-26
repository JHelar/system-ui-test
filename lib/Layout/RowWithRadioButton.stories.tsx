import { Meta, StoryObj } from '@storybook/react';
import { RowWithRadiobutton } from './Layout';
import { Label } from '../Label';
import { RadioButton, RadioButtonGroup } from '../RadioButtonGroup';

export default {
  title: 'Components / Layout / RowWithRadioButton',
  component: RowWithRadiobutton,
  args: {
    label: () => <Label>Label</Label>,
    action: () => <RadioButton value='storybook' />,
    description: () => <Label>Description</Label>,
  },
  render: (props) => (
    <RadioButtonGroup>
      <RowWithRadiobutton {...props} />
    </RadioButtonGroup>
  ),
} satisfies Meta<typeof RowWithRadiobutton>;

export const Default: StoryObj<typeof RowWithRadiobutton> = {};
