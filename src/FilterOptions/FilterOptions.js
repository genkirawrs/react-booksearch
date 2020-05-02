import React, { Component } from 'react';

import './FilterOptions.css';

class FilterOptions extends Component {
  render(){
    return (
        <div className='search-filter-options'>
            Print Type: 
		<select/>
	    Book Type:
		<select/>
        </div>
    )

  }
}

export default FilterOptions;
