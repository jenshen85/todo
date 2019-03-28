import React from 'react'

import TodoListItem from '../todo-list-item'

import './todo-list.css'

const TodoList = ({ todos, onDeleted, onToggleDone, onToggleImportant }) => {
  const elements = todos.map((todo)=> {
    const {id, ...data } = todo
    return (
      <li key={ id } className='list-group-item' >
        <TodoListItem
          onDeleted={ () => onDeleted(id) }
          onToggleDone={ () => onToggleDone(id) }
          onToggleImportant={ () => onToggleImportant(id) }
          {...data}
        />
      </li>
    )
  })
  return (
    <ul className="list-group todo-list">
      { elements }
    </ul>
  )
}

export default TodoList;