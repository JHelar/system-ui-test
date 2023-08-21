// your-select.jsx
import React, { PropsWithChildren } from 'react';
import * as RadixSelect from '@radix-ui/react-select';
import { Icon } from '../Icon';
import { StyledSelectIcon, StyledSelectTrigger } from './Select.styles';

type SelectProps = PropsWithChildren<RadixSelect.SelectProps> & {
  placeholder?: string;
  id?: string;
  className?: string;
};
export function Select({
  placeholder,
  children,
  id,
  className,
  ...selectRootProps
}: SelectProps) {
  return (
    <RadixSelect.Root {...selectRootProps}>
      <StyledSelectTrigger id={id} className={className}>
        <RadixSelect.Value placeholder={placeholder} />
        <StyledSelectIcon asChild>
          <Icon name='expand_more' />
        </StyledSelectIcon>
      </StyledSelectTrigger>
      <RadixSelect.Portal>
        <RadixSelect.Content>
          <RadixSelect.ScrollUpButton>
            <Icon name='expand_less' />
          </RadixSelect.ScrollUpButton>
          <RadixSelect.Viewport>{children}</RadixSelect.Viewport>
          <RadixSelect.ScrollDownButton>
            <Icon name='expand_more' />
          </RadixSelect.ScrollDownButton>
        </RadixSelect.Content>
      </RadixSelect.Portal>
    </RadixSelect.Root>
  );
}

type SelectItemProps = PropsWithChildren<RadixSelect.SelectItemProps>;
export function SelectItem({ children, ...selectItemProps }: SelectItemProps) {
  return (
    <RadixSelect.Item {...selectItemProps}>
      <RadixSelect.ItemText>{children}</RadixSelect.ItemText>
      <RadixSelect.ItemIndicator>
        <Icon name='check' />
      </RadixSelect.ItemIndicator>
    </RadixSelect.Item>
  );
}
