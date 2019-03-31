import React, { Component } from 'react';

import './item-status-filter.css';

const buttons = [
  {name:'all', label:'All'},
  {name:'active', label:'Active'},
  {name:'done', label:'Done'}
]

export default class ItemStatusFilter extends Component {

  render() {
    const {filter, onFilterChange } = this.props
    const btns = buttons.map(({name, label}) => {
      const isActive = filter === name
      const clazz = isActive ? 'btn-info' : 'btn-outline-secondary'
      return (
        <button type='button'
                className={ `btn ${clazz}` }
                key={ name }
                onClick={ () => onFilterChange(name) }>
          { label }
        </button>
      )
    })
    return (
      <div className="btn-group">
        { btns }
      </div>
    );
  }
}
