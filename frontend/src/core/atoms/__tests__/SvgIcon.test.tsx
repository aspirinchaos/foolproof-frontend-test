import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';
import '@testing-library/jest-dom';

import { SvgIcon } from '..';

describe('SvgIcon atom', () => {
  it('renders correctly', () => {
    const { container } = render(
      <SvgIcon width={100} height={100}>
        <path />
      </SvgIcon>,
    );
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders correct width height', () => {
    const { container } = render(
      <SvgIcon width={123} height={321}>
        <path />
      </SvgIcon>,
    );
    expect(container.firstChild).toHaveAttribute('viewBox', '0 0 123 321');
  });
});
