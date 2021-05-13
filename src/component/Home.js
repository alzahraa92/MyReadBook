import React, {Component} from 'react';
import AddBook from './AddBook';
import Shelf from './Shelf';
import {getAll} from '../BooksAPI'
class Home extends Component{
  async componentDidMount() {
    try{
      const books = await getAll()
      console.log(books)//this.props.addBook(books)
      //console.log(data)
    }catch(error) {
    console.log("error", error);
    // appropriately handle the error
  }
  }
  render(){
    return( 
     <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelf />
            </div>
            <AddBook />
          </div>
     )
  }
}
export default Home