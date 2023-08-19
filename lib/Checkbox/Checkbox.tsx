import { Icon } from '../Icon';
import { CheckboxIndicator, CheckboxRoot } from './Checkbox.styles';
import { ComponentProps } from 'react';
import { isDefined } from '../utils/isDefined';
import { InputRow, InputRowDescription, InputRowLabel } from '../InputRow';

type CheckboxProps = ComponentProps<typeof CheckboxRoot> & {
  /** Assign a label to be rendered together with the checkbox */
  label?: string;
  /** Assign a description text to be rendered together with the label and checkbox */
  description?: string;
};

/**
 * Checkbox inputfield
 *
 * [Figma spec](https://www.figma.com/file/DBMDh1LNNvp9H99N9lZgJ7/PeerDB?type=design&node-id=1-473&mode=design&t=b6qwokbWgkPCcgVS-4)
 */
export function Checkbox({
  label,
  description,
  name,
  id,
  className,
  ...checkboxProps
}: CheckboxProps) {
  const htmlFor = id ?? name;

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
      <CheckboxRoot name={name} {...checkboxProps} id={htmlFor}>
        <CheckboxIndicator>
          <Icon name='check' />
        </CheckboxIndicator>
      </CheckboxRoot>
      {Label}
    </InputRow>
  );
}
