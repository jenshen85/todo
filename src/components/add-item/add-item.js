import React, { Component } from 'react';

import './add-item.css';

export default class AddItem extends Component {

  render() {
    const { addItemHandler } = this.props
    return (
      <div className='add-item'>
        <button type='button'
                className='btn btn-primary add-item-btn'
                onClick={ ()=> addItemHandler('hello!!!') }>
          Add todo
        </button>
      </div>
    )
  }
}