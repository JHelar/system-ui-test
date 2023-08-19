import styled, { css } from 'styled-components';
import * as RadixForm from '@radix-ui/react-form';
import { ComponentProps } from 'react';
import { Button } from '../Button';

export const FormLabel = styled(RadixForm.Label)`
  flex: 1;
  display: flex;
  flex-flow: column;
  row-gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.base.text.highContrast};
  ${({ theme }) => css(theme.text.regular.body)}
`;

export const FormLabelDescription = styled.p`
  all: unset;

  display: block;
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => css(theme.text.regular.subheadline)}
`;

export const FormField = styled(RadixForm.Field)`
  display: flex;
  flex-flow: row nowrap;
  column-gap: ${({ theme }) => theme.spacing.medium};
`;

/** Form component based on [Radix form](https://www.radix-ui.com/primitives/docs/components/form) */
export const Form = styled(RadixForm.Root)``;

type FormControlProps = ComponentProps<typeof RadixForm.Control>;
export function FormControl({ ...controlProps }: FormControlProps) {
  return <RadixForm.Control asChild {...controlProps} />;
}

type FromSubmitProps = ComponentProps<typeof Button>;
export function FormSubmit({ ...buttonProps }: FromSubmitProps) {
  return (
    <RadixForm.Submit asChild>
      <Button {...buttonProps} />
    </RadixForm.Submit>
  );
}
