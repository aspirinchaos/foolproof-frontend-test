import { paddingMixin } from '../styled-spacing';

describe('styled-spacing paddingMixin', () => {
  it('no padding', () => {
    expect(paddingMixin({})).toBe('');
  });

  it('padding top', () => {
    expect(paddingMixin({ pt: '2rem' })).toBe('padding-top: 2rem;');
  });

  it('padding bottom', () => {
    expect(paddingMixin({ pb: '3rem' })).toBe('padding-bottom: 3rem;');
  });

  it('padding right', () => {
    expect(paddingMixin({ pr: '1rem' })).toBe('padding-right: 1rem;');
  });

  it('padding left', () => {
    expect(paddingMixin({ pl: '1.5rem' })).toBe('padding-left: 1.5rem;');
  });

  it('padding top and bottom', () => {
    expect(paddingMixin({ py: '0.5rem' })).toBe('padding-top: 0.5rem; padding-bottom: 0.5rem;');
  });

  it('padding left and right', () => {
    expect(paddingMixin({ px: '1.25rem' })).toBe('padding-right: 1.25rem; padding-left: 1.25rem;');
  });

  it('padding top, right, bottom, left', () => {
    expect(paddingMixin({ p: '10rem' })).toBe('padding: 10rem;');
  });

  it('padding props order', () => {
    expect(paddingMixin({ py: '2rem', pt: '3rem', p: '1rem',  }))
      .toBe('padding: 1rem; padding-top: 2rem; padding-bottom: 2rem; padding-top: 3rem;');
    expect(paddingMixin({ pb: '2rem', pl: '2rem', pr: '2rem', pt: '2rem', p: '1rem',  }))
      .toBe('padding: 1rem; padding-top: 2rem; padding-right: 2rem; padding-bottom: 2rem; padding-left: 2rem;');
  });
});
