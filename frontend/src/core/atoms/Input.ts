import styled from 'styled-components';

const Input = styled.input<{ maxWidth?: string; }>`
  display: block;
  width: 100%;
  padding: .5rem .75rem;
  font-size: 1rem;
  font-weight: 500;
  line-height: 1.5;
  color: #92929F;
  background-color: #1b1b29;
  background-clip: padding-box;
  border: 1px solid #1b1b29;
  appearance: none;
  border-radius: 0.65rem;
  transition: color 0.2s ease;
  outline: none;

  &:active, &:focus {
    background-color: #1f1f2f;
    border-color: ${p => p.theme.colors.main};
    color: #92929F;
  }

  &::placeholder {
    color: #565674;
  }
  
  ${p => p.maxWidth ? `max-width: ${p.maxWidth}` : ''}
`;

export default Input;
