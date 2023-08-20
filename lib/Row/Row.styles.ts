import styled, { css } from 'styled-components';

type WrapperProps = {
  direction: 'row' | 'column';
};

const labelStyle = css<WrapperProps>`
  .row-label {
    flex: 1 1 50%;
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
`;

const descriptionStyle = css<WrapperProps>`
  .row-description {
    color: ${({ theme }) => theme.colors.base.text.lowContrast};
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
`;

const textFieldStyle = css<WrapperProps>`
  .row-text-field {
    flex: 1 1 50%;
  }
`;

const instructionStyle = css<WrapperProps>`
  .row-instruction {
    color: ${({ theme }) => theme.colors.destructive.text.lowContrast};
    ${({ direction }) => direction === 'row' && `padding-left: 0px`}
  }
`;

const baseStyles = css<WrapperProps>`
  ${labelStyle}
  ${descriptionStyle}
  ${textFieldStyle}
  ${instructionStyle}
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
