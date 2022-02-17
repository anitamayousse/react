import React, { Component } from 'react'
import { Link } from "react-router-dom";
import List from "../components/List"
export class popularbattle extends Component {
    constructor(){
      super();
      this.state = {
        movies:[],
        currentBattle: 0,
        favorites: JSON.parse(localStorage.getItem("favorites")),
      };
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount= () => {
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.setState({
            movies:[...data.results
            ],
            currentBattle: this.state.currentBattle})
        })
  }




    handleClick(){
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies:[...data.results
          ],
          currentBattle: this.state.currentBattle + 1})
      })
    }

    
  render() {
    if( this.state.movies.length !== 0 ){
    return (
      <div className='container'> 
      <h2 className='text-center'>Popular-Battle</h2>
      {this.state.movies.splice(0,1).map((index) => (
        <List        
          onClick={() => this.handleClick()}             
          image={this.state.movies[this.state.currentBattle].poster_path}
          title={this.state.movies[this.state.currentBattle].title}
          release_date={this.state.movies[this.state.currentBattle].release_date}
          overview={this.state.movies[this.state.currentBattle].overview}
          key={index} />
        
        ))}
        {this.state.movies.splice(0,1).map((index) => (
        <List        
          onClick={() => this.handleClick()}             
          image={this.state.movies[this.state.currentBattle+1].poster_path}
          title={this.state.movies[this.state.currentBattle+1].title}
          release_date={this.state.movies[this.state.currentBattle+1].release_date}
          overview={this.state.movies[this.state.currentBattle+1].overview}
          key={index} />
        
        ))}
      <Link to="/">Back to homepage</Link>
    </div>
    )
  }else{
    return (
      <div>
        <p>“Vous avez parcouru tous les films !”</p>
      </div>
    )
  }
}}

export default popularbattle