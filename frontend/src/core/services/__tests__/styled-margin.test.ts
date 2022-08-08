import { marginMixin } from '../styled-spacing';

describe('styled-spacing marginMixin', () => {
  it('no margin', () => {
    expect(marginMixin({})).toBe('');
  });

  it('margin top', () => {
    expect(marginMixin({ mt: '2rem' })).toBe('margin-top: 2rem;');
  });

  it('margin bottom', () => {
    expect(marginMixin({ mb: '3rem' })).toBe('margin-bottom: 3rem;');
  });

  it('margin right', () => {
    expect(marginMixin({ mr: '1rem' })).toBe('margin-right: 1rem;');
  });

  it('margin left', () => {
    expect(marginMixin({ ml: '1.5rem' })).toBe('margin-left: 1.5rem;');
  });

  it('margin top and bottom', () => {
    expect(marginMixin({ my: '0.5rem' })).toBe('margin-top: 0.5rem; margin-bottom: 0.5rem;');
  });

  it('margin left and right', () => {
    expect(marginMixin({ mx: '1.25rem' })).toBe('margin-right: 1.25rem; margin-left: 1.25rem;');
  });

  it('margin top, right, bottom, left', () => {
    expect(marginMixin({ m: '10rem' })).toBe('margin: 10rem;');
  });

  it('margin props order', () => {
    expect(marginMixin({ my: '2rem', mt: '3rem', m: '1rem',  }))
      .toBe('margin: 1rem; margin-top: 2rem; margin-bottom: 2rem; margin-top: 3rem;');
    expect(marginMixin({ mb: '2rem', ml: '2rem', mr: '2rem', mt: '2rem', m: '1rem',  }))
      .toBe('margin: 1rem; margin-top: 2rem; margin-right: 2rem; margin-bottom: 2rem; margin-left: 2rem;');
  });
});
