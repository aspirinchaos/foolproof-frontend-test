import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import theme from 'core/services/theme';

import { Container } from '..';

describe('Container atom', () => {
  it('renders correctly', () => {
    const { container } = render(<Container theme={theme}>Content</Container>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('has correct styles', () => {
    const { container } = render(<Container theme={theme}>Content</Container>);
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });
});
