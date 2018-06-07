import React, { Component } from "react";


class HelloMessage extends Component {
  render() {
    return <button>Hello {this.props.name}</button>;
  }
}

export default HelloMessage;