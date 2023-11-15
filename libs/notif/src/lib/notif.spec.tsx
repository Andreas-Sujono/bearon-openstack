import { render } from '@testing-library/react';

import Notif from './notif';

describe('Notif', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Notif />);
    expect(baseElement).toBeTruthy();
  });
});
