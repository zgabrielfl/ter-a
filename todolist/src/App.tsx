import React from 'react';
import './App.css';
import CriarTodo from './components/criarTodo';
import TodoList from './components/todolist';

function App() {
  return (
    <div className="App">
      <CriarTodo />
      <TodoList />
    </div>
  );
}

export default App;
