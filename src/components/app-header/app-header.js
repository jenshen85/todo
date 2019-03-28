import React from 'react';

import './app-header.css';

const AppHeader = ({toDo, done})=> {
  return (
    <div className='app-header d-flex  flex-column align-items-start'>
      <h1>My todo list</h1>
      <h2>{toDo} more to do, {done} done</h2>
    </div>
  )
}

export default AppHeader;