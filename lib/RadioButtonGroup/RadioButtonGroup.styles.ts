import { css, styled } from 'styled-components';
import * as RadixRadioGroup from '@radix-ui/react-radio-group';

export const RadioButtonGroupRoot = styled(RadixRadioGroup.Root)`
  display: flex;
  flex-flow: column;
  row-gap: ${({ theme }) => theme.spacing.xSmall};
`;

export const RadioButtonItem = styled(RadixRadioGroup.Item)`
  --border-color: ${({ theme }) => theme.colors.base.border.normal};
  --background-color: transparent;

  display: flex;
  justify-content: center;
  align-items: center;
  margin: ${({ theme }) => theme.spacing.xxSmall};

  border-radius: ${({ theme }) => theme.radius.xxLarge};
  border: 1px solid var(--border-color);
  background-color: var(--background-color);

  width: 20px;
  height: 20px;

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

export const RadioButtonIndicator = styled(RadixRadioGroup.Indicator)`
  width: 8px;
  height: 8px;
  flex: 0 0 8px;
  background-color: ${({ theme }) => theme.colors.special.fixed.white};
  border-radius: 50%;
`;

export const StyledLabel = styled.label`
  display: flex;
  flex-flow: column;
  row-gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.base.text.highContrast};
  ${({ theme }) => css(theme.text.regular.body)}
`;

export const StyledDescription = styled.p`
  all: unset;

  display: block;
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => css(theme.text.regular.subheadline)}
`;

export const RadioButtonWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: ${({ theme }) => theme.spacing.medium};
`;
