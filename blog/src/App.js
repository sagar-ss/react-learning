import logo from './logo.svg';
import './App.css';
// import {useState} from 'react';
import React,{Component} from 'react'

class App extends Component {

  constructor()
  {
    super();
    this.state= {
      data:"Sagar"
    }
  }

  updateData()
  {
    // this.setState({data:Number(0)});
    this.setState({data:this.state.data+1})
  }
  render()
  {

    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={()=>{this.updateData()}}>Update Data</button>
      </div>
    );
   
  }
  
}

export default App;
