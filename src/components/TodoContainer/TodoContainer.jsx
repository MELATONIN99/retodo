import { useState } from 'react';
import TodoForm from '../TodoForm/TodoForm';
import TodoList from '../TodoList.jsx/TodoList';
import { Layout } from './TodoContainerStyle';

export default function TodoContainer() {
  const [isRefreshTrigger, setIsRefreshTrigger] = useState(false);

  return (
    <Layout>
      <TodoForm setIsRefreshTrigger={setIsRefreshTrigger} />
      <TodoList isRefreshTrigger={isRefreshTrigger} setIsRefreshTrigger={setIsRefreshTrigger} />
    </Layout>
  );
}
