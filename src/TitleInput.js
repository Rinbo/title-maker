import React, { Component } from 'react';
import './App.css';

export class TitleInput extends Component {
    render() {
        return( 
            <div className="App-intro">
                <input type="text" className="titleField" onChange={this.props.onInput} value={this.props.text}></input>
            </div>            
        )
    };
}