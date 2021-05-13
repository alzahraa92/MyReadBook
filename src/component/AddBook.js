import React, {Component} from 'react';
import { NavLink } from "react-router-dom";
class AddBook extends Component{
  render(){
    return( 
      <div className="open-search">
              <NavLink to="/Search">Add a book</NavLink>
       </div>
     )
  }
}
export default AddBook