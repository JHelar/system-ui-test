import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { Icon } from '../Icon';
import {
  CheckboxIndicator,
  CheckboxRoot,
  CheckboxWrapper,
  StyledDescription,
  StyledLabel,
} from './Checkbox.styles';
import { ComponentProps } from 'react';
import { isDefined } from '../utils/isDefined';

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
  className,
  ...checkboxProps
}: CheckboxProps) {
  const Description = isDefined(description) && (
    <StyledDescription>{description}</StyledDescription>
  );

  const Label = isDefined(label) && (
    <StyledLabel htmlFor={name}>
      {label}
      {Description}
    </StyledLabel>
  );

  return (
    <CheckboxWrapper className={className}>
      <CheckboxRoot {...checkboxProps} id={name}>
        <CheckboxIndicator>
          <Icon name='check' />
        </CheckboxIndicator>
      </CheckboxRoot>
      {Label}
    </CheckboxWrapper>
  );
}
