import React, { Component } from 'react'

import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

import Home from './pages/home'
import Weekly from './pages/weekly'
import WeeklyBattle from './pages/weeklybattle'
import Popular from './pages/popular'
import PopularBattle from './pages/popularbattle'
import Favorites from './pages/favorites'
export class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <nav>
        <Link to="/">Homepage|</Link>
        <Link to="/weekly">weekly|</Link>
        <Link to="/weeklybattle">weekly-battle</Link>
        <Link to="/popular">Popular</Link>
        <Link to="/popularbattle">Popular-battle</Link>
        <Link to="/favorites">Favorites</Link>
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
