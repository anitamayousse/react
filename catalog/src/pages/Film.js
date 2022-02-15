import React from "react";
import { Link } from "react-router-dom";
import List from "../list.json"

class Film extends React.Component {
	render() {
		return (
			<div>
				<h2>List:</h2>
				 {List.map(element =>
                    { return (
                    <>
					<ul>
                    <Link to={`/film/${List.id}`}>{element.title}</Link>
					</ul>
                    </>
                )})}
				<Link to="/">Back to homepage</Link>
			</div>
		);
	}
}

export default Film;