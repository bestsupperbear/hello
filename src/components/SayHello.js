import React, { Component } from 'react';
class SayHello extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <div>
                <h1>Welcome , {this.props.name}</h1>
                <h2>Age is , {this.props.age}</h2>
            </div>
        );
    }
}

export default SayHello;