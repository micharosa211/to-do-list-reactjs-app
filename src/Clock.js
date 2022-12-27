import { render } from "@testing-library/react";
import React, { Component } from "react";




class Clock extends Component {

    constructor(props) {
        super(props)

        this.state = { data: new Date }
    }
    
    componentDidMount() {
        this.timer = setInterval(() => {this.tick()}, 1000);
    }
    tick = () => {
        this.setState({ data: new Date })
    }


    render() {
        return (
        <h2 className="clock">{this.state.data.toLocaleString()}</h2>
)

    }

}

export default Clock;