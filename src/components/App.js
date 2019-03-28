import React, { Component } from 'react';
import './App.css';

import AppHeader from './app-header'
import SearchPanel from './search-panel'
import ItemStatusFilter from './item-status-filter'
import TodoList from './todo-list'
import AddItem from './add-item'

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [
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
  }

  deleteTodo = (id)=> {
    this.setState(({todoData})=> {
      const filteredTodo = todoData.filter(todo => todo.id !== id)

      return {
        todoData: filteredTodo
      }
    })
  }

  addItemHandler = (text)=> {
    const todo = {
      label: text,
      important: false,
      id: this.maxId++,
    }

    this.setState(({todoData})=> {
      return {
        todoData: [...todoData, todo]
      }
    })
  }

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex flex-column">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={ this.state.todoData }
                  onDeleted= { this.deleteTodo } />
        <AddItem addItemHandler={ this.addItemHandler } />
      </div>
    );
  }
}
