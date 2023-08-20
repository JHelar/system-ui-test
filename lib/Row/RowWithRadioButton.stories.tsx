import { Meta, StoryObj } from '@storybook/react';
import { RowWithRadiobutton } from './Row';
import { Label } from '../Label';
import { RadioButton, RadioButtonGroup } from '../RadioButtonGroup';

export default {
  title: 'Components / Row / RowWithRadioButton',
  component: RowWithRadiobutton,
  args: {
    label: (props) => <Label {...props}>Label</Label>,
    radioButton: () => <RadioButton value='storybook' />,
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
