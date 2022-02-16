import React from 'react'
import { Link } from "react-router-dom";

import movies from "../movies.json"


class List extends React.Component {

    render() {

        return <div>

                <h2> List of Movies </h2>
                <ul>
                    {movies.map((movie) => {
                        return (
                        <li>
                            {/* show names of movies with the link with ID */}
                            <Link to={`/movie/${movie.id}`} key={movie.id}> {movie.title} </Link>

                            {/* show names of movies with the link with title*/}
                             {/* <Link to={`/movie/${movie.title}`}> {movie.title} </Link> */}
                        </li> 
                        );
                    })}
                    </ul>
  
           
            </div>
        
    }
}

export default List;