import React, { useState } from 'react';
import styles from './TodoInput.module.css';
import Button from '../Button/Button';

interface TodoInputProps {
  onAddTask: (task: string) => void;
}

/**
 * Renders a TodoInput component that allows users to input a task and add it to a list.
 *
 * @param {TodoInputProps} onAddTask - A callback function that is called when a task is added.
 * @return {JSX.Element} A JSX element representing the TodoInput component.
 */
const TodoInput: React.FC<TodoInputProps> = ({ onAddTask }) => {
  const [task, setTask] = useState('');

  /**
   * Handles the addition of a task.
   *
   * @return {void} This function does not return anything.
   */
  const handleAddTask = () => {
    if (task.trim()) {
      onAddTask(task);
      setTask('');
    }
  };

  return (
    <div>
      <input
        className={`${styles.input}`}
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        onKeyDown={(e) => e.key === 'Enter' && handleAddTask()}
        placeholder="Add a new task"
      />
      <Button style={{ marginTop: '1rem', width: '100%' }} text="Create new task" onClick={handleAddTask} />
    </div>
  );
};

export default TodoInput;