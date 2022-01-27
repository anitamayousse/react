
import React from "react";
import users from "./users.json"
//components 
import Counter from "./components/Counter";
import UserInfo from "./components/UserInfo";
//css
import "./App.css"

class App extends React.Component {
  constructor () {
    super();
    this.state = {
      count:10,
    };
    this.increment = this.increment.bind(this);
    this.substract = this.substract.bind(this);
  }
increment(){
  this.setState((prevState) => {
    return {
      count: prevState.count +1,
    };
  });
}

substract(){
  this.setState((prevState) => {
    return {
      count: prevState.count -1,
    };
  });
}
  render (){

    const userNumber = this.state.count;
    return <div>
      <Counter
      count ={this.state.count}
      increment ={this.increment}
      substract = {this.substract}/>
      {
        users.map((user, i) =>{
          if (i < userNumber){
          return (
        <UserInfo
          key ={user.id}
            id ={user.id}
            name={user.name}
            email ={user.email}
          />
          );
        }
      })}
    </div>
  }
}

export default App