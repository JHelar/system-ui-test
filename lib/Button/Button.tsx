import type { ComponentPropsWithRef } from 'react';
import {
  BaseButton,
  BaseButtonProps,
  ButtonVariant,
  StyledIcon,
} from './Button.styles';

type ButtonProps = Omit<
  ComponentPropsWithRef<typeof BaseButton>,
  keyof BaseButtonProps
> & {
  /** Variant of button to render */
  variant?: ButtonVariant;
  /** Set if the button is in a loading state */
  loading?: boolean;
};
export function Button({
  variant = 'normal',
  children,
  loading = false,
  ...buttonProps
}: ButtonProps) {
  const LoadingIcon = loading && <StyledIcon name='sync' />;
  return (
    <BaseButton {...buttonProps} $variant={variant} $loading={loading}>
      {LoadingIcon}
      {children}
    </BaseButton>
  );
}
