import React, { Component } from 'react';

import './add-item-form.css';

export default class AddItemForm extends Component {
  state = {
    label: '',
    isValid: true,
  }

  onInputHandler = (ev) => {
    this.setState({
      label: ev.target.value,
      isValid: true,
    })
  }

  onSubmitHandler = (ev) => {
    ev.preventDefault()
    if(this.state.label.length){
      this.props.addItemHandler(this.state.label)
      this.setState({
        label: '',
        isValid: true,
      })
    } else {
      this.setState({
        isValid: false
      })
    }
  }

  render() {
    return (
      <form className='d-flex add-item-form'
            onSubmit={ this.onSubmitHandler } >
        <input  type='text'
                className={
                  `${this.state.isValid ?
                    '' : 'is-invalid'}
                    form-control add-item-form-control`
                  }
                placeholder='Whats needs to be done'
                onChange={ this.onInputHandler }
                value={ this.state.label } />
        <button type='submit'
                className='btn btn-primary add-item-form-btn' >
          Add todo
        </button>
      </form>
    )
  }
}