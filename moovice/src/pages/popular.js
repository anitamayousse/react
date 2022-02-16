import React, { Component } from 'react'
import { Link } from "react-router-dom";
import List from "../components/List"

export class Popular extends Component {
  constructor(){
    super();
    this.state = {
      movies:[],
    };

  }

  componentDidMount= () => {
    fetch(`https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({movies:[...data.results]})
      })
}


  render() {
    return (

			<div>
				<h2>List:</h2>
        {this.state.movies.map((movie) => (
          <List                     
            image={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            key={movie} />
          ))}
				<Link to="/">Back to homepage</Link>
			</div>

    );
  }
}
export default Popular