import React from "react";
import Button from "../Button/Button";
import OutputScreen from "../OutputScreen/OutputScreen";
import Title from "../Title/Title";

import './styles.css';

class Calculator extends React.Component {
  constructor(){
    super();
    this.state = {
      display: "0",
      equation: ""
    }
    this.numInput = this.numInput.bind(this);
    this.operInput = this.operInput.bind(this);
    this.decInput = this.decInput.bind(this);
    this.clearInput = this.clearInput.bind(this);
    this.calculate = this.calculate.bind(this);
  }

  numInput(e){
    if(this.state.equation.match(/[0-9\.]$/) && !this.state.equation.includes("=")){
      if(this.state.equation.match(/[+\-*\/]/) == null){
        let val = this.state.equation + e.currentTarget.value;
        this.setState({
          display: val,
          equation: val
        });
      } else {
        this.setState({
          display: this.state.display + e.currentTarget.value,
          equation: this.state.equation + e.currentTarget.value
        });
      }
    } else if(this.state.equation.match(/[+\-*\/]$/)){
      let val = this.state.equation + e.currentTarget.value;
      this.setState({
        display: e.currentTarget.value,
        equation: val
      });
    } else if(this.state.display === "0" && e.currentTarget.value !== "0" || this.state.equation.includes("=")) {
      this.setState({
        display: e.currentTarget.value,
        equation: e.currentTarget.value
      });
    }
  }

  operInput(e){
    if(this.state.equation.includes("=")){
      let val = this.state.display;
      val += e.currentTarget.value;
      this.setState({
        equation: val
      });
    } else {
      if(this.state.equation != "" && this.state.equation.match(/[*\-\/+]$/) == null){
        let val = this.state.equation;
        val += e.currentTarget.value;
        this.setState({
          equation: val
        });
      } else if(this.state.equation.match(/[*\-\/+]$/) != null){
        let val = this.state.equation;
        val = val.substring(0, (val.length-1));
        val += e.currentTarget.value;
        this.setState({
          equation: val
        });
      }
    }
  }

  decInput(e){
    if(this.state.equation == "" || this.state.equation.includes("=")){
      let val = '0.';
      this.setState({
        display: val,
        equation: val
      });
    } else if(this.state.equation.match(/[+\-*\/]$/)){
      let val = '0.';
      this.setState({
        display: val,
        equation: this.state.equation + val
      });
    } else if(!this.state.display.includes(".")){
      this.setState({
        display: this.state.display + e.currentTarget.value,
        equation: this.state.equation + e.currentTarget.value
      });
    }
  }

  clearInput(){
    this.setState({
      display: "0",
      equation: ""
    });
  }

  deleteInput(){
    var str = this.state.equation;
    var length = str.length();
    str = str.substring(0,length-1);
    this.setState({equation: str});
    
  }

  calculate(){
    if(this.state.equation.includes("=")){
      let val = `${this.state.display} = ${this.state.display}`;
      this.setState({
        equation: val
      });
    } else if(this.state.equation != "" && this.state.equation.match(/[+\-*\/]/) != null && this.state.equation.match(/[+\-*\/]$/) == null) {
      let result = Number.isInteger(eval(this.state.equation)) ? eval(this.state.equation) : parseFloat(eval(this.state.equation).toFixed(5));
      let val = this.state.equation;
      val += ` = ${result}`;
      this.setState({
        display: result,
        equation: val
      });
    }
  }


    render(){
    return (
    <div className="frame">
    <div class="mainCalc">
    <Title value="Calculator"/>
    <OutputScreen display={this.state.display} equation={this.state.equation} />
    <div className="button-row">
      <Button label={'Clear'} Click = {this.clearInput}/>
      <Button label={'Delete'} Click = {this.deleteInput}/>
      <Button label={'.'} Click = {this.decInput}/>
      <Button label={'/'} Click = {this.operInput}/>
    </div>
    <div className="button-row">
      <Button label={'7'} Click = {this.numInput}/>
      <Button label={'8'} Click = {this.numInput}/>
      <Button label={'9'} Click = {this.numInput}/>
      <Button label={'*'} Click = {this.operInput}/>
    </div>
    <div className="button-row">
      <Button label={'4'} Click = {this.numInput}/>
      <Button label={'5'} Click = {this.numInput}/>
      <Button label={'6'} Click = {this.numInput}/>
      <Button label={'-'} Click = {this.operInput}/>
    </div>
    <div className="button-row">
      <Button label={'1'} Click = {this.numInput}/>
      <Button label={'2'} Click = {this.numInput}/>
      <Button label={'3'} Click = {this.numInput}/>
      <Button label={'+'} Click = {this.operInput}/>
    </div>
    <div className="button-row">
      <Button label={'0'} Click = {this.numInput}/>
      <Button label={'='} Click = {this.calculate}/>
    </div>
    </div>
    </div>
    );
  }
}


export default Calculator;