import React from 'react';

import './search-panel.css';

const SearchPanel = ({ setTermHandler })=> {
  return (
    <input type='text'
      className='form-control search-input'
      placeholder='type to search'
      onChange={ setTermHandler }/>
  )
}

export default SearchPanel;