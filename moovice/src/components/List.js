import React, { Component } from 'react'


export class List extends Component {

  render() {
    return (
      <>
            <div className=''>
            <button onClick={this.props.onClick }>
                <img
                  src={
                    `https://image.tmdb.org/t/p/w300/${this.props.image}`
                  }
                  alt="img"
                />
              </button>
            <div className='text-center' >
                <h5>{this.props.title}</h5>
                <p>
                  {this.props.overview}
                </p>
              <p>
                  {this.props.release_date}
              </p>
              </div>
            </div>
      </>
    );
  }
}

export default List