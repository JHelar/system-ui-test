import { styled } from 'styled-components';

export const BaseItem = styled.button`
  all: unset;

  display: flex;
  flex-flow: row nowrap;
  column-gap: ${({ theme }) => theme.spacing.medium};
  padding: ${({ theme }) => theme.spacing.xxSmall} 0px;
  align-items: flex-start;
`;
