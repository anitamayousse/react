import React, { Component } from 'react'
import List from "../components/List"
import { Link } from "react-router-dom"; 

export class popularbattle extends Component {
    constructor(){
      super();
      this.state = {
        movies:[],
        currentBattle: 0,
        isLoaded: false,
        favorites: JSON.parse(localStorage.getItem("favorite")) || [],
      };
      this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount(){
      fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
        .then(data => data.json())
        .then(data => {
          console.log(data);
          this.setState({
            movies:[...data.results
            ],
            isLoaded: true})
        })
  }

    handleClick(){

      this.setState({
          currentBattle: this.state.currentBattle + 1,
          favorites: [...this.state.favorites],
      },

      localStorage.setItem("favorites", JSON.stringify([...this.state.favorites])),
      
      console.log("localeStorage", localStorage),
      
      );



      console.log("id", this.state.movies[this.state.currentBattle]);
      
      
  }

  render() {
    const movies = this.state.movies;
    const currentBattle = this.state.currentBattle;
    if( this.state.isLoaded === true && currentBattle <= 18){
    return (
      <div className='container'> 
      <h2 className='text-center py-5'>Popular-Battle</h2>
      <div className='row'>
        <div className='col-6'>
        <List        
          onClick={() => this.handleClick(movies[currentBattle])}             
          image={movies[currentBattle].poster_path}
          title={movies[currentBattle].title}
          release_date={movies[currentBattle].release_date}
          overview={movies[currentBattle].overview} />
        </div>
        <div className='col-6'>
        <List        
          onClick={() => this.handleClick(movies[currentBattle])}             
          image={movies[currentBattle+1].poster_path}
          title={movies[currentBattle+1].title}
          release_date={movies[currentBattle+1].release_date}
          overview={movies[currentBattle+1].overview} />
        </div>
        <Link to="/">Back to homepage</Link>
      </div>

    </div>
    )
  } else {
    return (
      <div>
        <p>“Vous avez parcouru tous les films !”</p>
        <Link to="/">Back to homepage</Link>
      </div>
    );
  }
}}

export default popularbattle

//css

