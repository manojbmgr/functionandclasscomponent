import React, { Component } from "react";
class counterClassBased extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }
    increase = () => {
        this.setState({ count: this.state.count + 1 });
    };
    decrease = () => {
        this.setState({ count: this.state.count - 1 });
    };
    render() {
      return(
        <div className="counterDiv">
            <h1>Class Counter</h1>
            <h2>{this.state.count}</h2>
            <button onClick={this.increase}>+</button>
            <button onClick={this.decrease}>-</button>
        </div>
      )
    }
}


export default counterClassBased;