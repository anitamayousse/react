import React, { Component } from 'react'

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

// Pages
import Home from './pages/home'
import Weekly from './pages/weekly'
import WeeklyBattle from './pages/weeklybattle'
import Popular from './pages/popular'
import PopularBattle from './pages/popularbattle'
import Favorites from './pages/favorites'


// BOOTSTRAP
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css"

export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav>
        <ul>
          <li>
        <Link to="/">Homepage</Link>
          </li>
          <li>
        <Link to="/weekly">Weekly</Link>
          </li>
          <li>
        <Link to="/weeklybattle">Weekly-battle</Link>
          </li>
          <li>
        <Link to="/popular">Popular</Link>
          </li>
          <li>
        <Link to="/popularbattle">Popular-battle</Link>
          </li>
          <li>
        <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      </nav>

      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/weekly" component={Weekly} />
        <Route exact path="/weeklybattle" component={WeeklyBattle} />
        <Route path="/popular" component={Popular} />
        <Route path="/popularbattle" component={PopularBattle} />
        <Route path="/favorites" component={Favorites} />
      </Switch>
    </BrowserRouter>
    )
  }
}

export default App