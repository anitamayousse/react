import React, { Component } from 'react'
import { Link } from "react-router-dom";
import List from "../components/List"
export class popularbattle extends Component {
    constructor(){
      super();
      this.state = {
        movies:[],
        currentBattle: 0
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
            currentBattle: 0})
        })
  }

    componentDidUpdate(prevProps, prevState) {

      console.log(prevState, this.state);
    }


    handleClick(){
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies:[...data.results
          ],
          currentBattle: 0})
      })
    }

    
  render() {
    return (
      <div>
      <h2>List:</h2>
      {this.state.movies.slice(0,2).map((movie, index) => (
        <List        
          onClick={() => this.handleClick()}             
          image={movie.poster_path}
          title={movie.title}
          release_date={movie.release_date}
          overview={movie.overview}
          key={index} />
        ))}
      <Link to="/">Back to homepage</Link>
    </div>
    )
  }
}

export default popularbattle