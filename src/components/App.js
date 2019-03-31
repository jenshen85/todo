import React, { Component } from 'react';
import './App.css';

import AppHeader from './app-header'
import SearchPanel from './search-panel'
import ItemStatusFilter from './item-status-filter'
import TodoList from './todo-list'
import AddItemForm from './add-item-form'

export default class App extends Component {
  maxId = 100
  state = {
    todoData: [
      this.createTodoItem('Drink Coffee'),
      this.createTodoItem('Build React App'),
      this.createTodoItem('Do Someting'),
    ],
    term: '',
    filter: 'all',
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

  search = (todoData, term) => {
    if(term.length === 0) return todoData
    const patern = new RegExp(term, 'gi')
    return todoData.filter((todo) => todo.label.search(patern) !== -1 )
  }

  setTermHandler = (ev) => {
    this.setState({ term: ev.target.value })
  }

  filter = (items, filter) => {
    switch(filter) {
      case 'all':
        return items
      case 'active':
        return items.filter((item) => !item.done)
      case 'done':
        return items.filter((item) => item.done)
      default:
        return items
    }
  }

  onFilterChange = (filter) => {
    this.setState({ filter })
  }

  render() {
    const { todoData, term, filter } = this.state
    const filteredTodo = this.filter(this.search(todoData, term), filter)
    const todoDone = todoData.filter(el => el.done)
    const todoDoneCount = todoDone.length
    const todoCount = todoData.length - todoDoneCount

    return (
      <div className="todo-app">
        <AppHeader toDo={todoCount} done={todoDoneCount} />
        <div className="top-panel d-flex flex-column">
          <SearchPanel setTermHandler={ this.setTermHandler } />
          <ItemStatusFilter
            onFilterChange={ this.onFilterChange }
            filter={ filter } />
        </div>
        <TodoList todos={ filteredTodo }
                  onDeleted= { this.deleteTodo }
                  onToggleDone= { this.toggleDoneHandler }
                  onToggleImportant= { this.toggleImportantHandler } />
        <AddItemForm addItemHandler={ this.addItemHandler } />
      </div>
    );
  }
}
