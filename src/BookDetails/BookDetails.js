import React, { Component } from 'react';
import BookSummary from '../BookSummary/BookSummary'; 


import './BookDetails.css';

class BookDetails extends Component {
  render(){
console.log(this.props);
    return (
        <section className='section-book-details'>
	    <BookSummary book={this.props.bookDetails}/>
	    <p>{this.props.bookDetails.volumeInfo.description}</p>
	    <div className='more-info'>
		<div className='book-list' onClick={()=>this.props.showList()}>&lt;&lt; Back to List</div>
		<div className='preview-link'><a href={this.props.bookDetails.volumeInfo.previewLink} target='_blank' rel="noopener noreferrer" alt='Open Preview in new window'>View Preview &gt;&gt;</a></div>
	    </div>
        </section>
    )

  }
}

export default BookDetails;
