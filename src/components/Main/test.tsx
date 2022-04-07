import { render, screen } from '@testing-library/react';

import Main from '.';

describe('Should render a component Main', () => {
  it('should render a component', () => {
    const { container } = render(<Main />);

    // expect(
    //   screen.getByRole('heading', { name: /advanced react/i })
    // ).toBeInTheDocument();

    expect(container.firstChild).toMatchSnapshot();
  });

  it('should render a component with styles', () => {
    const { container } = render(<Main />);

    console.log(container);
    // expect(container.firstChild).toHaveStyle({ 'background-color': '#06092b' });
  });
});
