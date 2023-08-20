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

type LabelVariant = keyof typeof variants;
type LabelProps = {
  /** The variant to render */
  $variant: LabelVariant;
};
/**
 * Label text component
 *
 * Ensure to set the `as` prop to render the semantically correct html element.
 *
 * [Figma spec](https://www.figma.com/file/DBMDh1LNNvp9H99N9lZgJ7/PeerDB?type=design&node-id=1-797&mode=design&t=9iulGHxuTu4LG7O2-4)
 */
export const Label = styled.span<LabelProps>`
  ${baseStyle}
  ${({ $variant }) => variants[$variant]}
`;
