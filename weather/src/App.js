import React, { Component } from 'react';
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {init: null};
  }

  //This is the render applicatio
  render(){
    return(
      <div> 
        <h1> Hello World</h1>
        </div>
    );
  }

}



export default App;
