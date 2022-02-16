import React, { Component } from 'react'


export class List extends Component {

  render() {
    return (
      <>
      <div className='row py-5'>
            <div className='d-flex py-2'>
            <button onClick={this.props.onClick }>
                <img
                  src={
                    `https://image.tmdb.org/t/p/w300/${this.props.image}`
                  }
                  alt="img"
                />
              </button>
            <div className='py-5 text-center'>
                <h5>{this.props.title}</h5>
                <p>
                  {this.props.overview}
                </p>
              <p>
                  {this.props.release_date}
              </p>
              </div>
            </div>
          </div>
      </>
    );
  }
}

export default List