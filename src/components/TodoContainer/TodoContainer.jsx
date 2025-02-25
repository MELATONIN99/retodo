import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList.jsx/TodoList';

export default function TodoContainer() {
  const [isRefreshTrigger, setIsRefreshTrigger] = useState(false);

  return (
    <>
      <TodoForm setIsRefreshTrigger={setIsRefreshTrigger} />
      <TodoList isRefreshTrigger={isRefreshTrigger} setIsRefreshTrigger={setIsRefreshTrigger} />
    </>
  );
}
