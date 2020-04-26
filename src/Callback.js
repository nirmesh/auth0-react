import React, { Component } from "react";

class Callback extends Component {
  componentDidMount() {
    if (/access_token|id|error/.test(this.props.location.hash)) {
      this.props.auth.handleAuthentication();
    } else {
      throw new Error("invalid authentication");
    }
  }
  render() {
    return (
      <div>
        <h1>loading...</h1>
      </div>
    );
  }
}

export default Callback;
