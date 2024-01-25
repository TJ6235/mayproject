import React, { Component } from "react";
import './App.css';
import FirstComponent from "./components/FirstComponent";
import SecondComponent from "./components/SecondComponent";


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
          <FirstComponent propsSending = {this.state.myId}/> <button onClick={this.handleProps} >Click to chamge</button>
          <SecondComponent propsSendingsndpge = {this.state.myName}/> <button onClick={this.handlePropsTwo}>Click to change Name </button>
        </div>
      </div> 
    );
  }
}

export default App;
