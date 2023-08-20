import { css, styled } from 'styled-components';

const baseStyle = css`
  all: unset;
  padding: ${({ theme }) => `${theme.spacing.xSmall} ${theme.spacing.medium}`};
`;

const variants = {
  body: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.regular.body}
  `,
  action: css`
    color: ${({ theme }) => theme.colors.accent.text.lowContrast};
    text-decoration: none;
    ${({ theme }) => theme.text.medium.body}
  `,
  footnote: css`
    color: ${({ theme }) => theme.colors.base.text.lowContrast};
    ${({ theme }) => theme.text.regular.footnote}
  `,
  subheadline: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.medium.subheadline}
  `,
  headline: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.semiBold.headline}
  `,
  title3: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.semiBold.title3}
  `,
  title2: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.semiBold.title2}
  `,
  title1: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.semiBold.title1}
  `,
  largeTitle: css`
    color: ${({ theme }) => theme.colors.base.text.highContrast};
    ${({ theme }) => theme.text.semiBold.largeTitle}
  `,
};

export type LabelVariant = keyof typeof variants;

type BaseLabelProps = {
  $variant: LabelVariant;
};
export const BaseLabel = styled.span<BaseLabelProps>`
  ${baseStyle}
  ${({ $variant }) => variants[$variant]}
`;
