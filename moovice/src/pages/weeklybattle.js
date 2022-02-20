import React, { Component } from 'react'
import { Link } from "react-router-dom";
import List from "../components/List"
import moment from 'moment';

export class weeklybattle extends Component {
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

    componentDidMount= () => {
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

      const today = moment().format("YYYY-MM-DD");
      console.log(today);

      const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD");
      console.log(lastWeek); 

      fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({
          movies:[...data.results
          ],
          currentBattle: this.state.currentBattle + 1,
          favorites: [...this.state.favorites]},
          localStorage.setItem("favorites", JSON.stringify([...this.state.favorites])),
      
          console.log("localeStorage", localStorage),
          )
      })
          console.log("id", this.state.movies[this.state.currentBattle]);
      
    }

    
  render()  {
    const movies = this.state.movies;
    const currentBattle = this.state.currentBattle;
    if( this.state.isLoaded === true && currentBattle <= 18){
    return (
      <div className='container'> 
      <h2 className='text-center'>Weekly-Battle</h2>
        <List        
          onClick={() => this.handleClick(movies[currentBattle])}             
          image={movies[currentBattle].poster_path}
          title={movies[currentBattle].title}
          release_date={movies[currentBattle].release_date}
          overview={movies[currentBattle].overview} />
        <List        
          onClick={() => this.handleClick(movies[currentBattle])}             
          image={movies[currentBattle+1].poster_path}
          title={movies[currentBattle+1].title}
          release_date={movies[currentBattle+1].release_date}
          overview={movies[currentBattle+1].overview} />
          <Link to="/">Back to homepage</Link>

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

export default weeklybattle