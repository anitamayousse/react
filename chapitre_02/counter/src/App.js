import React from "react";
import Counter from "./components/Counter";
import  "./styles/global.css"
/*class App extends React.Component {
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

export default App*/


/*version 2 working*/

class App extends React.Component  {


  constructor() {
    super();
    this.state = { 
      count:0
    };
  }
  render (){
  return (
    <div>
      <h1>Counter</h1>
      <Counter 
      count= {this.state.count}
      increment = {() => {this.setState((prevState) =>{
        return {
          count: prevState.count +1
            };
          });
      }} 
      substract = {() => {this.setState((prevState) =>{
        return {
          count: prevState.count - 1,
            };
          });
      }}/>
    </div>
  );
}
}
export default App
