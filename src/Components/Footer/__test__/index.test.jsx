import { render } from '@testing-library/react';
import React from 'react';

import Footer from '..';

describe('Footer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Footer />);
    expect(baseElement).toBeTruthy();
  });
  it('should have a span with text Made with ❤️ by Pranav', () => {
    const { getByText } = render(<Footer />);
    expect(getByText('Made with ❤️ by Pranav')).toBeTruthy();
  });
});
