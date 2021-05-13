import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
import * as BooksAPI from '../BooksAPI'
import {search} from '../BooksAPI'
import {DebounceInput} from 'react-debounce-input'
import Book from './Book'
class Search extends Component{
    state = {
       books: [],
       bookAdd: [],
       query: ''
      }
    componentDidMount() {
        BooksAPI.getAll().then(allBooks => {
        this.setState({
            bookAdd: allBooks.filter(book => book.shelf !== 'none')
        })
        })
    }

    updateQuery(query) {
        this.setState({ query })
    }

  bookUpdate = (book, shelfName) => {
        BooksAPI.update(book, shelfName)
        const { books } = this.state
        const updateId = books.findIndex(b => b.id === book.id)
        const updateBook = books[updateId]
        updateBook.shelf = shelfName

        this.setState({
        books: [...books.slice(0, updateId), updateBook, ...books.slice(updateId + 1)]
        })
    }
  handleChange= async e =>{
    try{
      const query = e.target.value
      this.setState({query})
      if(query.trim()){
      const searchFinid = await search(query)
      if(searchFinid.error){
        this.setState({books:[]})
      }else{
        this.setState({books:searchFinid})
      }
      console.log(query)
      console.log(searchFinid)
      }else{
        this.setState({books:[]})
      }
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
  }
  render(){
    return( 
      <div className="search-books">
            <div className="search-books-bar">
              <NavLink  to="/" className="close-search">Close</NavLink>
              <div className="search-books-input-wrapper">
                    <DebounceInput
                    minLength={2}
                    debounceTimeout={300}
                    onChange={(e) => this.searchBooks(e.target.value)}
                    />
                <input type="text" placeholder="Search by title or author" onChange={this.handleChange} value={this.state.query}/>
              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid">
              {this.state.books.length > 0 ? (this.state.books.map((book, id) => (
              <Book
                key={id}
                book={book}
                bookUpdate={this.bookUpdate}
      		  />
            )))
  			: ( this.state.query.length === 0 ? (<p>No query entered</p>) : (<p>No Results Found</p>) )
            }  
              </ol>
            </div>
          </div>
     )
  }
}
export default Search