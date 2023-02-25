import { render } from '@testing-library/react';
import React from 'react';

import Home from '..';

describe('Home', () => {
  it('should render successfully', () => {
    const screen = render(<Home />);
    expect(screen.asFragment()).toMatchSnapshot();
  });
});
