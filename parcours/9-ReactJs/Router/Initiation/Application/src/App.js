import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Test from './Component/Test';

export default class App extends Component {

  state={todo:['faire la vaiselle']}

  myfunction(bonjour){
    var table = this.state.todo;
    table.push(bonjour);
    console.log(table);
    this.setState({todo: table});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Test fnc={this.myfunction.bind(this)} titi='hello' state={this.state.todo}/>
      </div>
    );
  }
}
