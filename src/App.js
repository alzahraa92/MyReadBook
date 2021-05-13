import React from 'react';
import {
 BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
} from "react-router-dom";
import Home from './component/Home'
import Search from './component/Search'
import './App.css';
class BooksApp extends React.Component {
  render() {
    return (
      <div className="app">
      <provider>
        <Router>
      <div>
        <ul className="listNav">
          <li className="itemListNav">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="itemListNav">
            <NavLink to="/Search">Search</NavLink>
          </li>
        </ul>

        <Switch>
          <Route path="/Search" >
            <Search />
          </Route>
          <Route  exact path="/" >
          <Home />
          </Route> 
        </Switch>
      </div>
    </Router>
      </provider>
      </div>
    )
  }
}

export default BooksApp
