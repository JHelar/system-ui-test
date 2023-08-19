import { ComponentProps } from 'react';
import { SwitchRoot, SwitchThumb } from './Switch.styles';
import { isDefined } from '../utils/isDefined';
import { InputRow, InputRowDescription, InputRowLabel } from '../InputRow';

type SwitchProps = ComponentProps<typeof SwitchRoot> & {
  /** Assign a label to be rendered together with the switch */
  label?: string;
  /** Assign a description text to be rendered together with the label and switch */
  description?: string;
};

/**
 * Switch inputfield
 *
 * [Figma spec](https://www.figma.com/file/DBMDh1LNNvp9H99N9lZgJ7/PeerDB?type=design&node-id=1-1328&mode=design&t=b6qwokbWgkPCcgVS-4)
 */
export function Switch({
  label,
  description,
  name,
  id,
  className,
  ...switchRootProps
}: SwitchProps) {
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
      {Label}
      <SwitchRoot name={name} id={htmlFor} {...switchRootProps}>
        <SwitchThumb />
      </SwitchRoot>
    </InputRow>
  );
}
