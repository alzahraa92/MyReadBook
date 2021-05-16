import React, {Component} from 'react';
import PropTypes from 'prop-types'
class Book extends Component{
  render(){
    const {book, onBookUpdate} = this.props
    return( <div>
                <li>
                  <div className="book">
                    <div className="book-top">
                      <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${
                        this.props.book.imageLinks ? this.props.book.imageLinks.thumbnail :""})` }}></div>
                      <div className="book-shelf-changer">
                        <select value={book.shelf} onChange={e => onBookUpdate(book, e.target.value)}>
                        <option value="moveTo" disabled>Move to...</option>
                        <option value="currentlyReading">Currently Reading</option>
                        <option value="wantToRead">Want to Read</option>
                        <option value="read">Read</option>
                        <option value="none">None</option>
                        </select>
                      </div>
                      </div>
                  <div className="book-title">{book.title ? book.title : ''}</div>
                  <div className="book-authors">{this.props.book.authors ? this.props.book.authors.join(',') :""}</div>
                  </div>
                </li>
             </div>
)}
}
Book.propTypes = {
  book: PropTypes.object.isRequired,
  onBookUpdate: PropTypes.func
}
export default Book