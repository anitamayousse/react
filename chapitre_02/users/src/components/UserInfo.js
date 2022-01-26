import React from "react";

class UserInfo extends React.Component {

    render()
    {
        return (

    (<p><b>Id:</b>{this.props.id} <b>Name:</b>{this.props.name} <b>Email:</b>{this.props.email} </p>)
        )
}
}

export default UserInfo