import React from 'react';
import './App.css';

import AppHeader from './app-header'
import SearchPanel from './search-panel'
import ItemStatusFilter from './item-status-filter'
import TodoList from './todo-list'

const App = () => {

  const todoData = [
    {
      label: 'Drink Coffee',
      important: false,
      id:1,
    },
    {
      label: 'Build React App',
      important: true,
      id:2,
    },
    {
      label: 'Do Someting',
      important: false,
      id:3,
    },
  ]
  return (
    <div className="todo-app">
      <AppHeader toDo={1} done={3} />

      <div className="top-panel d-flex">
        <SearchPanel />
        <ItemStatusFilter />
      </div>
      <TodoList todos={ todoData }
                onDeleted= { (id)=> console.log(id) } />
    </div>
  );
}

export default App;
