import styled, { css } from 'styled-components';

type WrapperProps = {
  direction: 'row' | 'column';
};

const baseStyles = css<WrapperProps>`
  .row-label {
    flex: 1 1 50%;
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
  .row-description {
    color: ${({ theme }) => theme.colors.base.text.lowContrast};
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
  .row-text-field {
    flex: 1 1 50%;
  }
  .row-progress-bar {
    flex: 1 1 auto;
  }
  .row-progress-slot {
    flex: 0 0 0%;
  }
  .row-instruction {
    color: ${({ theme }) => theme.colors.destructive.text.lowContrast};
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
`;

export const RowWrapper = styled.div<WrapperProps>`
  display: flex;
  flex-direction: ${({ direction }) => direction};
  ${baseStyles}
`;

export const StyledFlexRow = styled.div`
  display: flex;
  flex-flow: row nowrap;
  flex: 1 1 auto;
`;

export const StyledFlexColumn = styled.div`
  display: flex;
  flex-flow: column nowrap;
  flex: 1 1 auto;
`;
