import { PolymorphicComponentProps } from '../types';
import { BaseButton, ButtonVariant, StyledIcon } from './Button.styles';

type ButtonProps = {
  /** Variant of button to render */
  variant?: ButtonVariant;
  /** Set if the button is in a loading state */
  loading?: boolean;

  className?: string;
};

export function Button<AsTarget extends React.ElementType>({
  variant = 'normal',
  children,
  loading = false,
  ...buttonProps
}: PolymorphicComponentProps<AsTarget, ButtonProps>) {
  const LoadingIcon = loading && <StyledIcon name='sync' />;
  return (
    <BaseButton {...buttonProps} $variant={variant} $loading={loading}>
      {LoadingIcon}
      {children}
    </BaseButton>
  );
}
