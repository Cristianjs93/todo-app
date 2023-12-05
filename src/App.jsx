import React from 'react';
import TodosList from './components/TodosList';
import CreateForm from './components/CreateForm';
import ClearTodos from './components/ClearTodos';
import './App.scss';

function App() {
  return (
    <>
      <CreateForm />
      <TodosList />
      <ClearTodos />
    </>
  );
}

export default App;
