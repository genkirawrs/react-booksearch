import React, { Component } from 'react';
import Header from './Header';
import Form from './Form/Form';
import BookList from './BookList/BookList';
import BookDetails from './BookDetails/BookDetails';


import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showBookDetails: false,
      showBook:{},
      error: ''
    };
  }

  componentDidMount() {
    const url = 'https://www.googleapis.com/books/v1/volumes?&q=henry';
    const options = {
      method: 'GET',
    };
    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later.');
        }
        return res;
      })
      .then(res => res.json())
      .then(data => {
        this.setState({
          books: data.items,
          error: ''
        });
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });

  }


  render() {
console.log(this.state.books);
    const page = this.state.showBookDetails
          ? <BookDetails/>
          : <BookList/>;

    return (
      <div className="App">
	<Header/>
	<main>
	    <Form/>
	    {page}
	</main>
      </div>
    );
  } 
}

export default App;
