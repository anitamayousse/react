import React from "react";
import List from "../list.json"
import { Link } from "react-router-dom";

class Home extends React.Component {
	render() {
		return (
			<div>
				<h2>Homepage</h2>
            <Link to={'/film'}>
              <ul>
                  <h3>list</h3>
              </ul>
            </Link>
			</div>
		);
	}
}

export default Home;