import React, { Component } from 'react';
import BookSummary from '../BookSummary/BookSummary';

import './BookListItem.css';

class BookListItem extends Component {
  render(){
    return (
	    <BookSummary book={this.props.book}/>
    )

  }
}

export default BookListItem;
