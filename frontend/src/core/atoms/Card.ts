import styled from 'styled-components';

import { paddingMixin, PaddingProps, marginMixin, MarginProps } from 'core/services/styled-spacing';

interface CardProps extends PaddingProps, MarginProps {

}

export const Card = styled.div<CardProps>`
  background-color: ${p => p.theme.colors.secondary};
  box-shadow: 0 0 20px 0 rgba(76, 87, 125, 0.02);
  display: flex;
  flex-direction: column;
  border-radius: 0.85rem;
  ${paddingMixin}
  ${marginMixin}
`;

export const CardContent = styled.div<CardProps>`
  padding: 2rem 2.25rem;
  ${paddingMixin}
  ${marginMixin}
`;
