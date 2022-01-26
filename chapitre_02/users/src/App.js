import React from "react";
import users from "./components/data/users.json";
import "./App.css"
import UserInfo from "./components/UserInfo";

class App extends React.Component  {
  render (){
  return (
    <div className="App">
      <h1>Users</h1>
      {users.map( user =>
      (
      <UserInfo id = {user.id} name = {user.name} email = {user.email} 
      />
        ))}
    </div>
  );
}
}
export default App
