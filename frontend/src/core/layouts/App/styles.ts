import { createGlobalStyle } from 'styled-components';
import styledNormalize from 'styled-normalize';

import INTER_MEDIUM from 'core/assets/fonts/Inter-Medium.ttf';
import INTER_SEMI_BOLD from 'core/assets/fonts/Inter-SemiBold.ttf';

const Styles = createGlobalStyle`
  ${styledNormalize}
  body {
    background-color: ${(p) => p.theme.colors.body};
    font-family: ${(p) => p.theme.font};
    color: ${p => p.theme.colors.headingColor};
  }

  @font-face {
    font-family: 'Inter';
    src: url(${INTER_MEDIUM});
    font-weight: 500;
    font-style: normal;
  }

  @font-face {
    font-family: 'Inter';
    src: url(${INTER_SEMI_BOLD});
    font-weight: 600;
    font-style: normal;
  }
`;

export default Styles;
