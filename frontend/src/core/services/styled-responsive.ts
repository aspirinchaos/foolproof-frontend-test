import { css, IBreakpoint, ResponsiveFunction } from 'styled-components';

export const min: ResponsiveFunction =
  (breakpoint: keyof IBreakpoint) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (min-width: ${(p) => p.theme.breakpoints[breakpoint]}px) {
        ${css(...args)};
      }
    `;

export const max: ResponsiveFunction =
  (breakpoint: keyof IBreakpoint) =>
  (...args: Parameters<typeof css>) =>
    css`
      @media (max-width: ${(p) => p.theme.breakpoints[breakpoint]}px) {
        ${css(...args)};
      }
    `;
