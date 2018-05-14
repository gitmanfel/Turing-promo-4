import React, { Component } from 'react';
import Bonjour from './Bonjour';

export default class Test extends Component {
  test(){
    console.log(this.props.titi);
    this.props.fnc(this.props.titi);
  }

  showState(state){
    return(
      state.map((title, key) => {
        return(
          <Bonjour key={key} title={title} />
        )
      })
    )
  }

  render() {
    return (
      <div className="App">
        {this.props.toto}
        {this.showState(this.props.state)}
        <button onClick={this.test.bind(this)}>{this.props.titi}</button>
      </div>
    );
  }
}

