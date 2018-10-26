import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ChartJS from 'react-chartjs-wrapper';

class App extends Component {
  constructor(props) {
    super(props);
    let data = {
      datasets: [{
        data: [10, 20, 30],
        backgroundColor: ["#F7464A", "#46BFBD", "#FDB45C"],
        hoverBackgroundColor: ["#FF5A5E", "#5AD3D1", "#FFC870"]
      }],
      labels: ['Red', 'Yellow', 'Blue']
    };
    this.state = {
      data: data,
      type: 'bar'
    };
  }
  render() {
    return (
        <div className="App">
      <h1>Chart.js Demo</h1>
      <ChartJS type={this.state.type} data={this.state.data} />
    </div>
    );
  }
}

export default App;
