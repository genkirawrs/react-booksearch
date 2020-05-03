import React, { Component } from 'react';

import './FilterOptions.css';

class FilterOptions extends Component {
  render(){
    return (
        <div className='search-filter-options'>
            <label htmlFor='print_type'>Print Type: </label>
		<select name='print_type' id='print_type' onChange={(e)=>this.props.filterResults('print_type',e.target.value)}>
		  <option value='all'>All</option>
		  <option value='books'>Book</option>
		  <option value='magazines'>Magazine</option>
		</select>
	    <label htmlFor='book_type'>Book Type:</label>
		<select name='book_type' onChange={(e)=>this.props.filterResults('book_type',e.target.value)}>
		  <option value=''>All</option>
		  <option value='ebooks'>eBooks</option>
                  <option value='free-ebooks'>Free eBooks</option>
                  <option value='full'>Full Book</option>
                  <option value='paid-ebooks'>Paid eBooks</option>
                  <option value='partial'>Partial Book</option>
		</select>
        </div>
    )

  }
}

export default FilterOptions;
