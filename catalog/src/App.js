import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Film from "./pages/Film";

class App extends React.Component {
  render() {
    return (
			<BrowserRouter>
				<ul>
					<li><Link to="/film">A Wrinkle in Time</Link></li>
          <li><Link to="/">A Wrinkle in Time</Link></li>
					<li><Link to="/contact">Contact</Link></li>
				</ul>

				<Switch>
					<Route exact path="/film" component={Film} />
				</Switch>
			</BrowserRouter>
    )
  }
}

export default App