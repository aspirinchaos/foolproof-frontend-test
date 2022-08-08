import { DefaultTheme, IBreakpoint } from 'styled-components';

import { min, max } from './styled-responsive';

const BREAKPOINTS: IBreakpoint = {
  xs: 576,
  sm: 600,
  md: 992,
  lg: 1200,
  xl: 1700,
};

const theme: DefaultTheme = {
  breakpoints: BREAKPOINTS,
  colors: {
    main: '#009ef7',
    secondary: '#1e1e2d',
    grey: '#565674',
    body: '#151521',
    headingColor: '#ffffff'
  },
  typeColours: {
    golden: '#ffd700',
    spray: '#a5ced0',
  },
  font: 'Inter,sans-serif',
  min,
  max,
};

export default theme;
