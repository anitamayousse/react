import React from "react";
import users from "./components/data/users.json";
import "./App.css"

class App extends React.Component  {
  render (){
  return (
    <div className="App">
      <h1>Users</h1>
      {users.map((user) =>
      (<p><b>Id:</b>{user.id} <b>Name:</b>{user.name} <b>Email:</b>{user.email} </p>
        ))}
    </div>
  );
}
}
export default App
