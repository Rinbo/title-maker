import React, { Component } from 'react';
import './App.css';

export class LogoSpin extends Component {
    render() {
        return( 
            <div id="logoSpinDiv">
                <label for="spin">Logo rotation speed:</label>
                <input name="spin" type="text" className="spinField" onChange={this.props.onChange} 
                    placeholder="sec/rot" maxlength="3"></input>
            </div>            
        )
    };
}