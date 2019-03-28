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
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Do Someting'),
    ]
  }

  createTodoItem(label) {
    return {
      label: label,
      important: false,
      done: false,
      id: this.maxId++,
    }
  }

  toggleProperty(arr, id, propName) {
    const todoInd = arr.findIndex(todo => todo.id === id)
    const todo = arr[todoInd]
    const updatedTodo = {
      ...todo,
      [propName]: !todo[propName]
    }

    return [
      ...arr.slice(0, todoInd),
      updatedTodo,
      ...arr.slice(todoInd + 1)
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
    const todo = this.createTodoItem(text)

    this.setState(({todoData})=> {
      return {
        todoData: [...todoData, todo]
      }
    })
  }

  toggleDoneHandler = (id)=> {
    this.setState(({ todoData })=> {
      return {
        todoData: this.toggleProperty(todoData, id, 'done')
      }
    })
  }

  toggleImportantHandler = (id)=> {
    this.setState(({ todoData })=> {
      return {
        todoData: this.toggleProperty(todoData, id, 'important')
      }
    })
  }

  render() {
    const { todoData } = this.state
    const todoDoneCount = todoData.filter(el => el.done).length
    const todoCount = todoData.length - todoDoneCount
    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={todoDoneCount} />
        <div className="top-panel d-flex flex-column">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList todos={ todoData }
                  onDeleted= { this.deleteTodo }
                  onToggleDone= { this.toggleDoneHandler }
                  onToggleImportant= { this.toggleImportantHandler } />
        <AddItem addItemHandler={ this.addItemHandler } />
      </div>
    );
  }
}
