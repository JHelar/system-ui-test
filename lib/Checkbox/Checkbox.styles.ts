import * as RadixCheckbox from '@radix-ui/react-checkbox';
import { css, styled } from 'styled-components';

export const CheckboxRoot = styled(RadixCheckbox.Root)`
  --background-color: ${({ theme }) => theme.colors.base.background.normal};
  --border-color: ${({ theme }) => theme.colors.base.border.normal};

  all: unset;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxSmall};

  border: 1px solid var(--border-color);
  background-color: var(--background-color);
  border-radius: ${({ theme }) => theme.radius.xSmall};

  color: ${({ theme }) => theme.colors.special.fixed.white};

  width: 20px;
  height: 20px;
  flex: 0 0 20px;

  &:hover {
    --border-color: ${({ theme }) => theme.colors.base.border.hovered};
  }

  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.accent.border.normal};
    outline-offset: -2px;
  }

  &[data-disabled] {
    opacity: 0.3;
  }

  &[data-state='checked'] {
    --background-color: ${({ theme }) => theme.colors.accent.fill.normal};
    --border-color: ${({ theme }) => theme.colors.accent.fill.normal};
  }
`;

export const CheckboxIndicator = styled(RadixCheckbox.Indicator)`
  display: flex;
  align-items: center;
  justify-content: center;
`;
