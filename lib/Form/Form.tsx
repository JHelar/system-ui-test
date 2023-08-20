import styled, { css } from 'styled-components';
import * as RadixForm from '@radix-ui/react-form';
import { ComponentProps } from 'react';
import { Button } from '../Button';

export const FormLabel = styled(RadixForm.Label)`
  all: unset;
  display: block;

  color: ${({ theme }) => theme.colors.base.text.highContrast};
  padding: ${({ theme }) =>
    `${theme.spacing.xSmall} ${theme.spacing.medium} ${theme.spacing.xSmall} 0px`};
  ${({ theme }) => css(theme.text.regular.body)}
`;

export const FormLabelDescription = styled.p`
  all: unset;
  display: block;

  grid-area: description;

  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  padding: ${({ theme }) =>
    `${theme.spacing.xSmall} ${theme.spacing.medium} ${theme.spacing.xSmall} 0px`};
  ${({ theme }) => css(theme.text.regular.subheadline)}
`;

export const FormField = styled(RadixForm.Field)`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.spacing.medium};
`;

export const FormFieldRow = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
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
