import React, { Component } from 'react';
import FilterOptions from '../FilterOptions/FilterOptions';
import SearchBox from '../SearchBox/SearchBox';
  
import './Form.css';

class Form extends Component {
  render(){
    return (
        <section className='section-form'>
	  <form>
            <SearchBox/>
  	    <FilterOptions/>
	  </form>
        </section>
    )

  }
}

export default Form;
