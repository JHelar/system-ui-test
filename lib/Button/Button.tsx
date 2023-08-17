import type { ComponentProps } from 'react';
import { styled, css } from 'styled-components';

const baseStyle = css`
  display: flex;
  padding: ${({ theme }) => `${theme.spacing.xxSmall} ${theme.spacing.medium}`};
  justify-content: center;
  align-items: center;
  border-radius: ${({ theme }) => theme.radius.medium};
  appearance: none;
  border: 0;
  background: 0;
  cursor: pointer;

  ${({ theme }) => css(theme.text.medium.body)}

  &:focus {
    outline: none;
  }

  &:disabled {
    opacity: 0.3;
    cursor: not-allowed;
  }
`;

const normalStyle = css`
  color: ${({ theme }) => theme.colors.base.text.highContrast};
  background-color: ${({ theme }) => theme.colors.base.surface.normal};

  &:hover {
    background-color: ${({ theme }) => theme.colors.base.surface.hovered};
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.border.normal};
    background-color: ${({ theme }) => theme.colors.base.surface.normal};
  }
`;

const variants = {
  normal: normalStyle,
} as const;

type ButtonVariant = keyof typeof variants;
type BaseButtonProps = {
  $variant: ButtonVariant;
};
const BaseButton = styled.button<BaseButtonProps>`
  ${baseStyle}
  ${({ $variant }) => variants[$variant]}
`;

type ButtonProps = Omit<
  ComponentProps<typeof BaseButton>,
  keyof BaseButtonProps
> & {
  /** Variant of button to render */
  variant: ButtonVariant;
};
export function Button({ variant, ...buttonProps }: ButtonProps) {
  return <BaseButton {...buttonProps} $variant={variant} />;
}
