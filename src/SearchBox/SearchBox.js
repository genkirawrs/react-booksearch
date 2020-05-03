import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render(){
    return (
        <div className='form-search-books'>
	    <label htmlFor='search'>Search:</label>
	    <input id='search' name='search' placeholder='Search term' required/>
	    <button type='submit'>Search</button>
        </div>
    )

  }
}

export default SearchBox;
