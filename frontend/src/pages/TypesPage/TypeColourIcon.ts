import styled, { COLOURS } from 'styled-components';

const TypeColourIcon = styled.span<{ colour: COLOURS }>`
  display: flex;
  align-items: center;
  color: ${p => p.theme.typeColours[p.colour]};
  svg {
    margin-right: .5rem;
  }
`;

export default TypeColourIcon;
