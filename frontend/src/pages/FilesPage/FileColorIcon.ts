import styled from 'styled-components';

const FileColorIcon = styled.span`
  display: flex;
  align-items: center;
  svg {
    color: ${p => p.theme.colors.main};
    margin-right: .5rem;
  }
`;

export default FileColorIcon;
