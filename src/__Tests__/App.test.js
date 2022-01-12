import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import Home from '../components/Home/Home';
import Quote from '../components/Quote/Quote';
import Calculator from '../components/Calculator/Calculator';

describe('Testing components render', () => {
  it('Tests Home.js component render', () => {
    const tree = render(<Home />);
    expect(tree).toMatchSnapshot();
  });
  it('Tests Quote.js component render', () => {
    const tree = render(<Quote />);
    expect(tree).toMatchSnapshot();
  });
  it('Tests Calculator.js component render', () => {
    const tree = render(<Calculator />);
    expect(tree).toMatchSnapshot();
    const output = screen.getByTestId('output');
    userEvent.click(screen.getByText('1'));
    expect(output).toHaveValue('1');
    userEvent.click(screen.getByText('+'));
    userEvent.click(screen.getByText('3'));
    userEvent.click(screen.getByText('='));
    expect(output).toHaveValue('4');
  });
});
