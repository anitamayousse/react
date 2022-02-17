import React, { Component } from 'react'
import { Link } from "react-router-dom";
import List from "../components/List"
import moment from 'moment';


export class Weekly extends Component{
  constructor(){
    super();
    this.state = {
      movies:[],
    };

  }


  componentDidMount= () => {
      const today = moment().format("YYYY-MM-DD");
      console.log(today);

      const lastWeek = moment().add(-7, "days").format("YYYY-MM-DD");
      console.log(lastWeek); 

    fetch(`http://api.themoviedb.org/3/discover/movie?primary_release_date.gte=${lastWeek}&primary_release_date.lte=${today}&api_key=f4549ced8461edfa9c7cadea3873a4d8`)
      .then(data => data.json())
      .then(data => {
        console.log(data);
        this.setState({movies:[...data.results]})
      })
}


  render() {
    return (

			<div className='container'>
				<h2 className='text-center'>Weekly</h2>
        {this.state.movies.map((movie,index) => (
          <List                     
            image={movie.poster_path}
            title={movie.title}
            release_date={movie.release_date}
            overview={movie.overview}
            key={index} />
          ))}
				<Link to="/">Back to homepage</Link>
			</div>

    );
  }
}

export default Weekly