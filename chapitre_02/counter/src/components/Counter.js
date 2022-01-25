import React from "react";

class Counter extends React.Component {

    render()
    {
        return (
            <div className="box col-sm-3 col-6">
                <h2>{this.props.count} </h2>
                <button> {this.props.increment}</button>
                <button> {this.props.substract} </button>

            </div>
        )
    }
}

export default Counter