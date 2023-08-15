import type { PropsWithChildren, ComponentProps } from 'react';

export type ButtonProps = ComponentProps<'button'>;

export function Button({ children, ...buttonProps }: ButtonProps) {
  return <button {...buttonProps}>{children}</button>;
}
