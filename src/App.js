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
      searchTerm: 'flowers',
      books: [],
      showBookDetails: false,
      showBook:null,
      filter_print_type: 'all',
      filter_book_type: '',
      error: ''
    };
  }

  formatURL(){
	const currentState = this.state;
	let url = 'https://www.googleapis.com/books/v1/volumes?maxResults=30&key=AIzaSyByEs7GIq8IuuracMg6mMtTMZVhpE_Jsnk&printType='+currentState.filter_print_type+'&q='+currentState.searchTerm;
	if( currentState.filter_book_type.length > 0){
	  url = url+'filter='+currentState.filter_book_type;
	}

	return url;
  }

  doSearch(){
    const url = this.formatURL();
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
	if(data.totalItems > 0){
          this.setState({
            books: data.items,
            showBookDetails: false,
            showBook:null,
            error: ''
          });
	}else{
	    this.setState({
	      showBookDetails: false,
              showBook:null,
	      books:[],
              error: "no results found, please try again!"
            });
	}
      })
      .catch(err => {
        this.setState({
          error: err.message
        });
      });
  }

  componentDidMount() {
    this.doSearch();
  }

  showBookDetail(showBookID){
    this.setState({
      showBookDetails: true,
      showBook: showBookID
    });
  }

  showBookList(){
    this.setState({
      showBookDetails: false,
      showBook: null
    });
  }

  handleSearchSubmit(e){
    e.preventDefault();
    const term = e.target.elements.search.value
    this.setState({
	searchTerm: term
    }, function(){
	this.doSearch();
    });
  }

  filterResults(filterCat,filter){
	if(filterCat === 'print_type'){
	    this.setState({
		filter_print_type: filter
	    }, function(){
                this.doSearch();
	    });
	}else if(filterCat === 'book_type'){
            this.setState({
                filter_book_type: filter
            }, function(){
                this.doSearch();
            });
	}


  }

  render() {
    const books = this.state.books
    const bookID = this.state.showBook
    const page = this.state.showBookDetails
          ? <BookDetails showList={()=>this.showBookList()} bookID={this.state.showBook} bookDetails={books[bookID]}/>
          : <BookList books={this.state.books} showBook={(bookID)=>this.showBookDetail(bookID)} error={this.state.error}/>;

    return (
      <div className="App">
	<Header/>
	<main>
	    <Form searchSubmit={(e)=>this.handleSearchSubmit(e)} filterResults={(filterCat, filter)=>this.filterResults(filterCat,filter)}/>
	    {page}
	</main>
      </div>
    );
  } 
}

export default App;
