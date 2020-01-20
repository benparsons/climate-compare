import React, { Component } from 'react';
import { Range } from 'rc-slider';
import './App.css';
import Cell from './Cell';

import 'rc-slider/assets/index.css';
const rows = require("./rows.json")


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      minRain: 0,
      maxRain: 80,
      minTemp: 12,
      maxTemp: 30
    };
  }
  render() {
    var filteredRows = [];
    rows.forEach(row => {
      var newRow = {};
      newRow.name = row.name;
      newRow.data= [];
      row.data.forEach(month => {
        var newMonth = {};
        if (
          month.rain >= this.state.minRain &&
          month.rain <= this.state.maxRain && 
          month.temp >= this.state.minTemp &&
          month.temp <= this.state.maxTemp) {
            newMonth.ok = true;
            newMonth.rain = month.rain;
            newMonth.temp = month.temp;
            newMonth.season = month.season;
        }
        newRow.data.push(newMonth);
      });
      filteredRows.push(newRow);
    })

  return (
    <div className="App">
      <div className="inner">
        <div>
          Rain (mm):
          <Range
          min={0}
          max={700}
          defaultValue={[this.state.minRain, this.state.maxRain]}
          onChange={value => {
            console.log(value[0]);
            this.setState({minRain: value[0], maxRain: value[1]}) ;
            }} />
            {this.state.minRain}/{this.state.maxRain}
        </div>
        <div>
          Temp (mean C):
          <Range
          min={0}
          max={60}
          defaultValue={[this.state.minTemp, this.state.maxTemp]}
          onChange={value => {
            console.log(value[0]);
            this.setState({minTemp: value[0], maxTemp: value[1]}) ;
            }} />
            {this.state.minTemp}/{this.state.maxTemp}
        </div>

        <table>
          <thead>
            <tr>
              <td>Where</td>
              <td>Jan</td>
              <td>Feb</td>
              <td>Mar</td>
              <td>Apr</td>
              <td>May</td>
              <td>Jun</td>
              <td>Jul</td>
              <td>Aug</td>
              <td>Sep</td>
              <td>Oct</td>
              <td>Nov</td>
              <td>Dec</td>
            </tr>
          </thead>
          <tbody>{filteredRows.map(row =>
            <tr key={row.name}>
              <td>{row.name}</td>
              {row.data.map((month,i) =>
                <Cell
                  key={row.name + i}
                  data={month}/>)}
            </tr>)}</tbody>
        </table>

      </div>

    </div>
  );
}
}
//<td key={row.name + i}>{JSON.stringify(month, null, 2)}</td>
export default App;
