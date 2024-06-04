import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './Button';

describe('Button component', () => {
  it('renders the button with the correct text', () => {
    const { getByText } = render(<Button text="Click me" onClick={() => {}} />);
    expect(getByText('Click me')).toBeInTheDocument();
  });

  it('calls the onClick handler when clicked', () => {
    const handleClick = jest.fn();
    const { getByText } = render(<Button text="Click me" onClick={handleClick} />);
    fireEvent.click(getByText('Click me'));
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it('applies the correct class names and styles', () => {
    const { getByText } = render(<Button text="Click me" onClick={() => {}} className="custom-class" style={{ backgroundColor: 'red' }} />);
    const button = getByText('Click me');
    expect(button).toHaveClass('custom-class');
    expect(button).toHaveStyle({ backgroundColor: 'red' });
  });

  it('disables the button when the disabled prop is true', () => {
    const { getByText } = render(<Button text="Click me" onClick={() => {}} disabled />);
    const button = getByText('Click me');
    expect(button).toBeDisabled();
  });
});
