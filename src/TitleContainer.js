import React, { Component } from 'react';
import {TitleDisplayer} from './TitleDisplayer';
import {TitleInput} from './TitleInput';
import {TitleSize} from './TitleSize';
import {TitleColor} from './TitleColor';
import {TitleBackground} from './TitleBackground';
import {LogoSpin} from './LogoSpin';

export class TitleContainer extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      text: "Enter a title!",
      styles: {
        fontSize: "25px",
        color: "white",
        background: "#222"
      },
      spinRate: {animationDuration: "20s"}
    };
    this.handleInput = this.handleInput.bind(this);
    this.handleColor = this.handleColor.bind(this);
    this.handleSize = this.handleSize.bind(this);
    this.handleBg = this.handleBg.bind(this);
    this.handleCustomColor = this.handleCustomColor.bind(this);
    this.handleCustomBg = this.handleCustomBg.bind(this);
    this.handleSpin = this.handleSpin.bind(this);
  }

  handleInput(e) {
    this.setState({text: e.target.value});
  }

  handleColor(e) {
    let buttonContainer = document.getElementById('colorButtons');
    let currentActive = buttonContainer.getElementsByClassName('active');
    currentActive[0].className = currentActive[0].className.replace(" active", "");    
    e.target.classList.add('active');       
    this.setState({ 
      styles: {
        fontSize: this.state.styles.fontSize,
        color: e.target.value,
        background: this.state.styles.background
      }
    });    
  }

  handleCustomColor(e) {
    this.setState({ 
      styles: {
        fontSize: this.state.styles.fontSize,
        color: e.target.value,
        background: this.state.styles.background
      }
    });    
  }
  
  handleBg(e) {
    let buttonContainer = document.getElementById('bgButtons');
    let currentActive = buttonContainer.getElementsByClassName('active');
    currentActive[0].className = currentActive[0].className.replace(" active", "");    
    e.target.classList.add('active');       
    this.setState({ 
      styles: {
        fontSize: this.state.styles.fontSize,
        color: this.state.styles.color, 
        background: e.target.value
      }
    });    
  }

  handleCustomBg(e) {
    this.setState({ 
      styles: {
        fontSize: this.state.styles.fontSize,
        color: this.state.styles.color,
        background: e.target.value
      }
    });    
  }

  handleSize(e) {
    this.setState({ 
      styles: {
        fontSize: e.target.value,
        color: this.state.styles.color,
        background: this.state.styles.background
      }
    });
  }

  handleSpin(e) {
    let newSpin = e.target.value + "s";
    this.setState({spinRate: {animationDuration: newSpin}})
  }

  render() {
    return (
      <div className="App">
        <TitleDisplayer styles={this.state.styles} text={this.state.text} 
                                spinRate={this.state.spinRate} />
        <TitleInput onInput={this.handleInput} text={this.state.text} />
        <TitleSize onChange={this.handleSize} />
        <TitleColor onClick={this.handleColor} onChange={this.handleCustomColor} />
        <TitleBackground onClick={this.handleBg} onChange={this.handleCustomBg} />
        <LogoSpin onChange={this.handleSpin} />        
      </div>
    );
  }
}
