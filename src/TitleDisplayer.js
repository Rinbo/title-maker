import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export class TitleDisplayer extends Component {

    render() {
        return (
            <div className="App">
                <header className="App-header" style={this.props.styles}>
                <img src={logo} style={this.props.spinRate} className="App-logo" alt="logo" />
                <h1>{this.props.text}</h1>
                </header>                
            </div>            
        )
    }
}