import { render } from '@testing-library/react';

import Tailwind from './tailwind';

describe('Tailwind', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Tailwind />);
    expect(baseElement).toBeTruthy();
  });
});
