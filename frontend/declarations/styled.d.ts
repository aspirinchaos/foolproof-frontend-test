import { css } from 'styled-components';

declare module 'styled-components' {
  export interface IBreakpoint {
    xs: number;
    sm: number;
    md: number;
    lg: number;
    xl: number;
  }

  export enum COLOURS {
    golden = 'golden',
    spray = 'spray',
  }

  type ResponsiveFunction = (
    breakpoint: keyof IBreakpoint,
  ) => (...args: Parameters<typeof css>) => ReturnType<css>;

  export interface DefaultTheme {
    breakpoints: IBreakpoint;
    colors: {
      main: string;
      secondary: string;
      grey: string;
      body: string;
      headingColor: string;
    };
    typeColours: {
      [key in COLOURS]: string;
    }
    font: string;
    max: ResponsiveFunction;
    min: ResponsiveFunction;
  }
}
