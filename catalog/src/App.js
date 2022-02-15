import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import './App.css';
import Home from "./pages/Home";
import Film from "./pages/Film";

class App extends React.Component {
  render() {
    return (
			<BrowserRouter>
				<Switch>
          <Route exact path="/" component={Home} />
					<Route exact path="/film" component={Film} />
				</Switch>
			</BrowserRouter>
    )
  }
}

export default App