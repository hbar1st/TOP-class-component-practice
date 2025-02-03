import React, { Component } from "react";

class Count extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <p>Count: {this.props.todos.reduce((acc) => acc + 1, 0)}</p>;
  }
}
export default Count;
