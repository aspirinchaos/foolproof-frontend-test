import styled from 'styled-components';

const Badge = styled.div`
  background-color: ${p => p.theme.colors.main};
  color: #ffffff;
  display: inline-flex;
  align-items: center;
  padding: .25rem .5rem;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  border-radius: .25rem;
  font-size: 0.825rem;
`;

export default Badge;
