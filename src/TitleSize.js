import React, {Component} from 'react';
import './App.css';

export class TitleSize extends Component {
    render() {
        return(
            <select onChange={this.props.onChange} defaultValue="25px">
                <option value="20px">20px</option>
                <option value="25px">25px</option>
                <option value="30px">30px</option>
                <option value="35px">35px</option>
                <option value="40px">40px</option>
                <option value="45px">45px</option>
            </select>
        )
    };
}