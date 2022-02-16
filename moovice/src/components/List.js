import React, { Component } from 'react'


export class List extends Component {
  render() {
    return (
      <>
          <div>
                <img
                  src={
                    `https://image.tmdb.org/t/p/w300/${this.props.image}`
                  }
                  alt="img"
                />
            <div>
                <h5>{this.props.title}</h5>
                <p>
                  {this.props.overview}
                </p>
            </div>
              <p>
                  {this.props.release_date}
              </p>
          </div>
      </>
    );
  }
}

export default List