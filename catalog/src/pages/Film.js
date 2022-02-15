import React from "react";
import { Link } from "react-router-dom";
import List from "../list.json"

class Film extends React.Component {
	render() {
		return (
			<div>
				<h2>About the movie</h2>
				 {List.map(element =>
                    { return (
                    <>
                    <p>{ element.title}</p>
                    </>
                )})}
				<Link to="/">Back to homepage</Link>
			</div>
		);
	}
}

export default Film;