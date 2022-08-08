import React from 'react';
import { render } from '@testing-library/react';
import 'jest-styled-components';

import { Flex } from '..';

describe('Flex atom', () => {
  it('renders correctly', () => {
    const { container } = render(<Flex>Content</Flex>);
    expect(container.firstChild).toMatchSnapshot();
  });

  it('renders with default styles', () => {
    const { container } = render(<Flex>Content</Flex>);
    expect(container.firstChild).toHaveStyleRule('display', 'flex');
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'row');
    expect(container.firstChild).toHaveStyleRule('align-items', 'flex-start');
    expect(container.firstChild).toHaveStyleRule(
      'justify-content',
      'flex-start',
    );
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'nowrap');
    expect(container.firstChild).not.toHaveStyleRule('width', '100%');
  });

  it('renders with props styles', () => {
    const { container } = render(
      <Flex
        direction={'column'}
        alignItems={'center'}
        justifyContent={'center'}
        wrap={'wrap'}
        fullWidth
      >
        Content
      </Flex>,
    );
    expect(container.firstChild).toHaveStyleRule('flex-direction', 'column');
    expect(container.firstChild).toHaveStyleRule('align-items', 'center');
    expect(container.firstChild).toHaveStyleRule('justify-content', 'center');
    expect(container.firstChild).toHaveStyleRule('flex-wrap', 'wrap');
    expect(container.firstChild).toHaveStyleRule('width', '100%');
  });

  it('renders with margin and padding mixins', () => {
    const { container } = render(
      <Flex
        m={'5rem'}
        pl={'10rem'}
      >
        Content
      </Flex>,
    );
    expect(container.firstChild).toHaveStyleRule('margin', '5rem');
    expect(container.firstChild).toHaveStyleRule('padding-left', '10rem');
  });
});
