import { ComponentProps } from 'react';
import {
  RadioButtonGroupRoot,
  RadioButtonIndicator,
  RadioButtonItem,
} from './RadioButtonGroup.styles';
import { isDefined } from '../utils/isDefined';
import { InputRow, InputRowDescription, InputRowLabel } from '../InputRow';

type RadioButtonProps = ComponentProps<typeof RadioButtonItem> & {
  label?: string;
  description?: string;
};

export function RadioButton({
  label,
  description,
  id,
  value,
  className,
  ...radioButtonItemProps
}: RadioButtonProps) {
  const htmlFor = id ?? value;

  const Description = isDefined(description) && (
    <InputRowDescription>{description}</InputRowDescription>
  );

  const Label = isDefined(label) && (
    <InputRowLabel htmlFor={htmlFor}>
      {label}
      {Description}
    </InputRowLabel>
  );

  return (
    <InputRow className={className}>
      <RadioButtonItem value={value} id={htmlFor} {...radioButtonItemProps}>
        <RadioButtonIndicator />
      </RadioButtonItem>
      {Label}
    </InputRow>
  );
}

type RadioButtonGroupProps = ComponentProps<typeof RadioButtonGroupRoot>;

/**
 * Radio button group inputfield
 *
 * [Figma spec](https://www.figma.com/file/DBMDh1LNNvp9H99N9lZgJ7/PeerDB?type=design&node-id=1-1147&mode=design&t=b6qwokbWgkPCcgVS-4)
 */
export function RadioButtonGroup({
  children,
  ...radioButtonGroupProps
}: RadioButtonGroupProps) {
  return (
    <RadioButtonGroupRoot {...radioButtonGroupProps}>
      {children}
    </RadioButtonGroupRoot>
  );
}
