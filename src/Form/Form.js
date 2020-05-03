import React, { Component } from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';
  
import './Form.css';

class Form extends Component {
  render(){
    return (
        <section className='section-form'>
	  <form onSubmit={e=>this.props.searchSubmit(e) }>
            <SearchBox/>
  	    <FilterOptions filterResults={(filterCat, filter)=>this.props.filterResults(filterCat,filter)}/>
	  </form>
        </section>
    )

  }
}

export default Form;
