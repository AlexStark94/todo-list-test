import React from 'react';
import TodoItem from '../TodoItem/TodoItem';
import styles from './TodoList.module.css';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

interface TodoListProps {
  todos: Todo[];
  onToggleComplete: (id: number) => void;
}

/**
 * Renders a list of todo items.
 *
 * @param {TodoListProps} props - The props for the TodoList component.
 * @param {Todo[]} props.todos - The array of todo objects to render.
 * @param {(id: number) => void} props.onToggleComplete - The function to toggle the completed status of a todo.
 * @return {JSX.Element} The rendered TodoList component.
 */
const TodoList: React.FC<TodoListProps> = ({ todos, onToggleComplete }) => {
  return (
    <div className={styles.container}>
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggleComplete={onToggleComplete} />
      ))}
    </div>
  );
};

export default TodoList;