import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render(){
    return (
        <div className='form-search-books'>
	    Search: 
	    <input />
	    <button>Search</button>
        </div>
    )

  }
}

export default SearchBox;
