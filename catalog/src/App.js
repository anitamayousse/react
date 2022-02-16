import React from 'react'
import { BrowserRouter, Switch, Route } from "react-router-dom"

import List from "./pages/List"
import Movie from "./pages/Movie"


class App extends React.Component {
  

  render() {
    return ( 
      <BrowserRouter>

            <Switch>
              {/* List of movies */}
              <Route exact path="/" component={List} />

              {/* Info of movie */}
              <Route path="/movie/:id" component={Movie} />

            </Switch>

      </BrowserRouter>
    )
          
  }
}

export default App