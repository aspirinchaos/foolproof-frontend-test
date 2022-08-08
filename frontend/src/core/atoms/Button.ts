import styled, { css } from 'styled-components';

const activeStyles = css`
  color: #fff;
  background-color: ${p => p.theme.colors.main};
`;

const Button = styled.button<{ active?: boolean; }>`
  background-color: #212e48;
  color: ${p => p.theme.colors.main};
  border: 1px solid transparent;
  padding: .5rem 1rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  cursor: pointer;
  transition: .2s;
  appearance: none;
  border-radius: 0.65rem;

  &:hover, &:active {
    ${activeStyles}
  }

  ${p => p.active ? activeStyles : ''};
  
`;

export default Button;
