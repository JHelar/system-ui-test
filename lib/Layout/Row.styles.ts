import styled from 'styled-components';

export const RowWrapper = styled.div`
  display: flex;
  flex-flow: row nowrap;
  align-items: flex-start;
  column-gap: ${({ theme }) => theme.spacing.medium};
`;

export const TextContent = styled.div`
  display: flex;
  flex-flow: column;
  row-gap: ${({ theme }) => theme.spacing.xxSmall};
`;

export const StyledPreTitle = styled.span`
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => theme.text.regular.subheadline};
`;

export const StyledTitle = styled.span`
  flex: 1;

  color: ${({ theme }) => theme.colors.base.text.highContrast};
  ${({ theme }) => theme.text.medium.body};
`;

export const StyledTitleSuffix = styled.span`
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => theme.text.regular.subheadline};
`;

export const StyledDescription = styled.span`
  flex: 1;

  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => theme.text.regular.subheadline};
`;

export const StyledDescriptionSuffix = styled.span`
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => theme.text.regular.subheadline};
`;

export const StyledFootnote = styled.span`
  color: ${({ theme }) => theme.colors.base.text.lowContrast};
  ${({ theme }) => theme.text.regular.footnote};
`;
