import React, { Component } from "react";
import './App.css';
import SecondComponent from "./components/SecondComponent";
import IncrementFnc from "./components/IncrementFnc";
import Forms from "./components/Forms";


class App extends Component {
  state = {
    welcomeText: "Welcome",
    myName: "Akshay",
    myId: "props works"
  };

  handleProps = () =>{
        this.setState({
          myId:"props works when button clicked"
        }) 
  };

  handlePropsTwo = ()=>{
    this.setState({
      myName:"tj akshay"
    })
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.welcomeText}</h1>
        <div>
          <SecondComponent propsSendingsndpge = {this.state.myName}/> <button onClick={this.handlePropsTwo}>Click to change </button>
          <IncrementFnc/>
        </div>
        <div>
          <Forms/>
        </div>
      </div> 
    );
  }
}

export default App;
