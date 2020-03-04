import styled, { css } from 'styled-components';

const Button = styled.button`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  box-sizing: border-box;
  padding: 0 ${({ theme }) => theme.spacing.medium}px;

  font-family: inherit;
  font-size: ${({ theme }) => theme.fontSize.larger}px;
  white-space: nowrap;
  text-align: center;
  line-height: 2;

  transition-timing-function: ease;
  transition-duration: 0.1s;
  transition-property: background-color, color, border-color;

  user-select: text;

  &:focus {
    outline: none;
  }

  color: ${({ theme }) => theme.color.secondary};
  background-color: transparent;
  border-color: ${({ theme }) => theme.background.secondary};
  border-width: 1px;
  border-style: solid;
  border-radius: 4px;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.color.primary};
    background-color: ${({ theme }) => theme.background.secondary};
    border-color: ${({ theme }) => theme.background.primary};
  }

  &:active {
    background-color: ${({ theme }) => theme.background.primary};
    border-color: ${({ theme }) => theme.utility.highlight};
  }

  ${({ disabled }) =>
    disabled
      ? css`
          pointer-events: none;
        `
      : css`
          cursor: pointer;
        `}
`;

Button.defaultProps = {
  type: 'button'
};

export default Button;
