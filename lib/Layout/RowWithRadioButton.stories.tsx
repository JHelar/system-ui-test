import { Meta, StoryObj } from '@storybook/react';
import { RowWithRadiobutton } from './Layout';
import { Label } from '../Label';
import { RadioButton, RadioButtonGroup } from '../RadioButtonGroup';

export default {
  title: 'Components / Layout / RowWithRadioButton',
  component: RowWithRadiobutton,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    action: (props) => <RadioButton {...props} value='storybook' />,
    description: (props) => <Label {...props}>Description</Label>,
  },
} satisfies Meta<typeof RowWithRadiobutton>;

export const Default: StoryObj<typeof RowWithRadiobutton> = {
  render: (props) => (
    <RadioButtonGroup>
      <RowWithRadiobutton {...props} />
    </RadioButtonGroup>
  ),
};
