import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'
class ShelfList extends Component {
  render() {
    const {title, books, onBookUpdate} = this.props
    return (
      <div className="bookshelf">
        <h1 className="bookshelf-title">{title}</h1>
      	<hr />
        <div className="bookshelf-books">
      	  <ol className="books-grid">
            {books.map((book, id) => (
              <Book
                key={id}
                book={book}
                onBookUpdate={onBookUpdate}
      		  />
            ))
            }
  		  </ol>
        </div>
      </div>
    )
  }
}
ShelfList.propTypes = {
  title: PropTypes.string.isRequired,
  books: PropTypes.array,
  onBookUpdate: PropTypes.func
}

export default ShelfList