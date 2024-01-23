import React, {Component} from "react";
import './App.css';



class App extends Component{

  state={
  welcomeText:"Welcome",
  myName:"Akshay"
  }

  render(){
    return(
      <div className="App">
      <h1>{this.state.welcomeText}</h1>
      <>
      <h1>{this.state.myName}</h1>
      </>
     </div>
    )
  }
};

export default App;
