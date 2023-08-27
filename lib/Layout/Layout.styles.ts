import { styled } from 'styled-components';

export const LayoutWrapper = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  background-color: ${({ theme }) => theme.colors.base.background.normal};
  min-height: 100vh;
`;

export type ContentWrapperProps = {
  $fullWidth?: boolean;
  $alignItems: 'center' | 'flex-start' | 'flex-end';
  $justifyContent: 'center' | 'flex-start' | 'flex-end';
};

export const ContentWrapper = styled.div<ContentWrapperProps>`
  grid-column: ${({ $fullWidth = false }) =>
    $fullWidth ? '1 / -1' : '2 / -1'};
  background-color: ${({ theme }) => theme.colors.base.background.normal};
  padding: ${({ theme, $fullWidth }) =>
    `${$fullWidth ? theme.spacing.xxSmall : theme.spacing['6xLarge']} ${
      theme.spacing.medium
    }`};
  overflow-y: auto;

  display: flex;
  align-items: ${({ $alignItems }) => $alignItems};
  justify-content: ${({ $justifyContent }) => $justifyContent};
  height: 100vh;
  overflow-y: auto;
`;
