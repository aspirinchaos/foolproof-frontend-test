import styled, { keyframes } from 'styled-components';

const dualRing = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Spinner = styled.div`
  display: inline-block;
  width: 3rem;
  height: 3rem;

  &:after {
    content: " ";
    display: block;
    width: 2rem;
    height: 2rem;
    margin: .5rem;
    border-radius: 50%;
    border: 6px solid ${p => p.theme.colors.main};
    border-color: ${p => p.theme.colors.main} transparent ${p => p.theme.colors.main} transparent;
    animation: ${dualRing} 1.2s linear infinite;
  }
`;

export default Spinner;
