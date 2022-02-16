import React from 'react'
import { Link } from "react-router-dom";
import movies from "../movies.json"

class Movie extends React.Component {
 
	render() {
        const movie = movies.find((movie) => {
            return (movie.id.toString() === this.props.match.params.id.toString()
            );
        });
		return (
			<div>
				<h2>List:</h2>
                <ul>
                    <li>{movie.title}</li> 
					<li>{movie.stars}</li> 
					<img src={movie.image} alt="pic"/>
                </ul>
				<Link to="/">Back to homepage</Link>
			</div>
		);
	}
}

export default Movie;


