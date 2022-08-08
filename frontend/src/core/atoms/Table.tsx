import styled, { css } from 'styled-components';

const Table = styled.table<{ hovered?: boolean; striped?: boolean; }>`
  width: 100%;
  color: #6D6D7D;
  border-width: 0;
  border-style: none;
  border-spacing: 0;

  td, th {
    padding: .75rem;
    border-bottom: 1px solid #2B2B40;
  }

  th {
    color: #474761;
    text-transform: uppercase;
  }

  td {
    color: #CDCDDE;

    &.grey {
      color: #6D6D80;
    }
  }

  thead {
    color: #474761;
    text-align: left;
  }

  ${p => p.hovered ? css`
    tr:hover td {
      background-color: ${p.theme.colors.main}15;
      cursor: pointer;
    }
  ` : ''}
  
  ${p => p.striped ? css`
    tr:nth-of-type(even) {
      background-color: ${p.theme.colors.main}05;
    }
  ` : ''}
`;

export default Table;
