import styled, { css } from 'styled-components';

export const InputRowLabel = styled.label`
  flex: 1;
  display: flex;
  flex-flow: column;
  row-gap: ${({ theme }) => theme.spacing.medium};
  color: ${({ theme }) => theme.colors.base.text.highContrast};
  ${({ theme }) => css(theme.text.regular.body)}
`;

export const InputRowDescription = styled.p`
  all: unset;

  display: block;
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => css(theme.text.regular.subheadline)}
`;

export const InputRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  column-gap: ${({ theme }) => theme.spacing.medium};
`;
