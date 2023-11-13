import { render } from '@testing-library/react';

import Autoform from './autoform';

describe('Autoform', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Autoform />);
    expect(baseElement).toBeTruthy();
  });
});
