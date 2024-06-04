import React from 'react';
import styles from './TodoItem.module.css';

interface TodoItemProps {
  todo: {
    id: number;
    description: string;
    completed: boolean;
  };
  onToggleComplete: (id: number) => void;
}

/**
 * Renders a single todo item with a checkbox and description.
 *
 * @param {TodoItemProps} props - The props for the TodoItem component.
 * @param {Object} props.todo - The todo object containing id, description, and completed status.
 * @param {Function} props.onToggleComplete - The function to toggle the completed status of a todo.
 * @return {JSX.Element} The rendered TodoItem component.
 */
const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggleComplete }) => {
  return (
    <li className={`${styles.todoItem} ${todo.completed ? styles.completed : ''}`}>
      <input
        className={styles.checkbox}
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
      />
      {todo.description}
    </li>
  );
};

export default TodoItem;