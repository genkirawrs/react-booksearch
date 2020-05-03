import React, { Component } from 'react';

import './BookSummary.css';

class BookSummary extends Component {
  render(){
	const authorString = this.props.book.volumeInfo.authors
		? this.props.book.volumeInfo.authors.join(', ')
		: 'n/a';

        const price = this.props.book.saleInfo.saleability === 'FOR_SALE'
                ? '$'+ this.props.book.saleInfo.listPrice.amount
                : 'n/a';

	const thumbImg = this.props.book.volumeInfo.imageLinks
		? this.props.book.volumeInfo.imageLinks.smallThumbnail
		: 'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        const thumbAlt = this.props.book.volumeInfo.title + 'cover image';
    return (
        <div className='book-item'>
            <div className='book-img'>
                <img
                src={thumbImg}
                alt={thumbAlt}
                title={this.props.book.volumeInfo.title}
                />
            </div>
            <div className='book-summary'>
                <span className='book-title'>{this.props.book.volumeInfo.title}</span>
                <br/>
                Author(s): {authorString}
                <br/>
                Price: {price}
                <br/>
                <p>
                    {this.props.book.volumeInfo.subtitle}
                </p>
            </div>
	</div>
    )

  }
}

export default BookSummary;
