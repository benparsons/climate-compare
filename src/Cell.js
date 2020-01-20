import React, { Component } from 'react';
import './App.css';

export default class Cell extends Component {
    render() {
        return(<td>
            <div 
            style={{visibility: this.props.data.ok ? 'visible' : 'hidden' }}>
{this.props.data.season}<br />
    <span className="nobr">☔️{this.props.data.rain}mm</span><br />
    <span className="nobr">🌡{this.props.data.temp}℃</span>
            </div>
    </td>)
    }
}

