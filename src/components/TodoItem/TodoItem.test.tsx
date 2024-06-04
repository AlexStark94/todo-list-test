import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import TodoItem from './TodoItem';

describe('TodoItem component', () => {
  const todo = {
    id: 1,
    description: 'Test Todo',
    completed: false,
  };

  it('renders the todo item with the correct description', () => {
    const { getByText } = render(<TodoItem todo={todo} onToggleComplete={() => {}} />);
    expect(getByText('Test Todo')).toBeInTheDocument();
  });

  it('renders the checkbox with the correct checked status', () => {
    const { getByRole } = render(<TodoItem todo={todo} onToggleComplete={() => {}} />);
    const checkbox = getByRole('checkbox') as HTMLInputElement;
    expect(checkbox.checked).toBe(false);
  });

  it('calls onToggleComplete when the checkbox is clicked', () => {
    const handleToggleComplete = jest.fn();
    const { getByRole } = render(<TodoItem todo={todo} onToggleComplete={handleToggleComplete} />);
    const checkbox = getByRole('checkbox');

    fireEvent.click(checkbox);
    expect(handleToggleComplete).toHaveBeenCalledWith(todo.id);
  });

  it('applies the completed class when the todo is completed', () => {
    const completedTodo = { ...todo, completed: true };
    const { container } = render(<TodoItem todo={completedTodo} onToggleComplete={() => {}} />);
    expect(container.firstChild).toHaveClass('completed');
  });
});
