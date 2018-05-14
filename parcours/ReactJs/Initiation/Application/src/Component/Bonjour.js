import React, { Component } from 'react';

export default class Bonjour extends Component {
  render() {
    return (
      <div className="App">
        {this.props.title}
      </div>
    );
  }
}

