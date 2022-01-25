import React from "react";
import Counter from "./components/Counter";
import  "./styles/global.css"
class App extends React.Component {
  constructor() {
    super();

    this.state = { 
      count:0
    };
  }

  render() {
    return (
  <div>
    <h1>Counter</h1>
    <h2>{this.state.count}</h2>
    <button
    onClick={()=> this.setState({count: this.state.count -1})}>-</button>
    <button
    onClick={()=> this.setState({count: this.state.count +1})}>+</button>
  </div>
)
  }
}

export default App


/*version 2 not working*/
/*
class App extends React.Component  {


  constructor() {
    super();
    this.state = { 
      count:0
    };
  }
  render (){
  return (
    <div className="app">
      <div>
        </div>
        <div class="buttons">
          <Counter  increment  />
        </div>
    </div>
  );
}
}
export default App

*/