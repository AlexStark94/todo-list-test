import React, { useState } from 'react';
import TodoInput from './components/TodoInput/TodoInput';
import TodoList from './components/TodoList/TodoList';
import useLocalStorage from './hooks/useLocalStorage';
import styles from './App.module.css';
import Button from './components/Button/Button';

interface Todo {
  id: number;
  description: string;
  completed: boolean;
}

const App: React.FC = () => {
  const [todos, setTodos] = useLocalStorage<Todo[]>('todos', []);
  const [filter, setFilter] = useState<'all' | 'active' | 'completed'>('all');

  const addTask = (description: string) => {
    const newTask = { id: Date.now(), description, completed: false };
    setTodos([...todos, newTask]);
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)));
  };

  const filteredTodos = todos.filter(todo => {
    if (filter === 'active') return !todo.completed;
    if (filter === 'completed') return todo.completed;
    return true;
  });

  return (
    <div className={`${styles.container}`}>
      <div className={`${styles.titleContainer}`}>
        <h1>My Tasks</h1>
      </div>
      
      <TodoInput onAddTask={addTask} />

      <div className={`${styles.divider}`}></div>

      <h3 className={`${styles.filterTitle}`}>Filter by status</h3>
      <div className={`${styles.filtersContainer}`}>
        <Button 
          text="All" 
          disabled={filter === 'all'} 
          onClick={() => setFilter('all')}
        />
        <Button 
          text="Active" 
          disabled={filter === 'active'} 
          onClick={() => setFilter('active')}
        />
        <Button 
          text="Completed" 
          disabled={filter === 'completed'} 
          onClick={() => setFilter('completed')}
        />
      </div>

      <TodoList todos={filteredTodos} onToggleComplete={toggleComplete} />

      <h3 className={`${styles.taskCount}`}>{filteredTodos.length} task{filteredTodos.length > 1 ? 's' : ''}</h3>
    </div>
  );
};

export default App;
