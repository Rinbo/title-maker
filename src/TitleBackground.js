import React, {Component} from 'react';
import './App.css';

export class TitleBackground extends Component {
    render() {
        return(
            <div id="bgButtons">
                <p>Background Color</p>
                <button id="WhiteButton" className="colorButton active" value="white" onClick={this.props.onClick}></button>
                <button id="greenButton" className="colorButton" value="green" onClick={this.props.onClick}></button>
                <button id="redButton" className="colorButton" value="red" onClick={this.props.onClick}></button>
                <button id="blueButton" className="colorButton" value="blue" onClick={this.props.onClick}></button>
                <button id="blackButton" className="colorButton" value="black" onClick={this.props.onClick}></button>
                <input type="text" className="customField" placeholder="#Custom (RGB)" 
                    onChange={this.props.onChange} maxlength="7"></input>
            </div>
        )
    };
}