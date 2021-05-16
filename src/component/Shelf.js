import React, {Component} from 'react';
import * as BooksAPI from '../BooksAPI'
import ShelfList from "./ShelfList";
class Shelf extends Component{
 state= {
  	allBooks: []
  }
 
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ allBooks: books })
	  })
  }

  onBookUpdate = (book, shelfName) => {
    const { allBooks } = this.state
	  const updateId = allBooks.findIndex(b => b.id === book.id)
    const updateBook = allBooks[updateId]
    updateBook.shelf = shelfName
    this.setState({
      allBooks: [...allBooks.slice(0, updateId), updateBook, ...allBooks.slice(updateId + 1)]
    })
    BooksAPI.update(book, shelfName)
  }
  render() {
    const { allBooks } = this.state
    const shelfLists = [
        {
            id:1,
            name: 'Current Reading',
            books: allBooks.filter(book => book.shelf === 'currentlyReading')
        },
        {
            id:2,
            name: 'Want To Read',
            books: allBooks.filter(book => book.shelf === 'wantToRead')
        },
        {
            id:3,
            name: 'Read',
            books: allBooks.filter(book => book.shelf === 'read')
        }  
    ]
    return(
          <div>
              {shelfLists && shelfLists.map((shelf, id) => (
              <ShelfList
                key={id}
                title={shelf.name}
                books={shelf.books}
                onBookUpdate={this.onBookUpdate}/>
            ))}
          </div>
     )
  }
}
export default Shelf