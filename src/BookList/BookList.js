import React, { Component } from 'react';
import BookListItem from '../BookListItem/BookListItem';
 
import './BookList.css';

class BookList extends Component {
  render(){
    if(this.props.error.length > 0){
	return(
	    <section className='section-book-results'>
		<p className='error'>{this.props.error}</p>
	    </section>
	)
    }else{
      const booklist = this
          .props
          .books
          .map((book, i) => <li key={i} className='section-book-list-item' onClick={()=>this.props.showBook(i)}><BookListItem book={book}/></li>);
      return (
        <section className='section-book-results'>
	    <ul className='section-book-list'>
		{booklist}
	    </ul>
        </section>
      )
    }
  }
}

export default BookList;
