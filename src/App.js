import React, { Component } from 'react';
import './App.css';
//import ContactForm from './Components/СontactForm';
//import Umfrage from './Components/Umfrage';
//import Umfrage from './Components/Umfrage1';
//import FAQ from './Components/FAQ'
//import { Router } from 'react-router-dom';
import Second from './Components/Second';
//import history from './Components/history'
//import Routes from './Components/Routes';
import history from './Components/history'
import ContactForm from './Components/СontactForm';
import First from './Components/First';
import Umfrage from './Components/Umfrage';
import Routes from './Components/Routes';

class App extends Component {
  state = {
    class: false,
    class1: false,
    class2: false,
    class3: false,
    // expendRechts: this.state.class1
  }
  vonLinks = () => {
    this.setState({ class: !this.state.class });
    console.log("test")
  }
  vonRechts = () => {
    this.setState({ class1: true });
    history.push('/')
    console.log("test")
  }
  vonUnten = () => {
    this.setState({ class2: !this.state.class2 });

    console.log("data " + this.state.data)
  }
  vonOben = () => {
    this.setState({ class3: !this.state.class3 });

    console.log("fragen ")
  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div >
    );
  }
}

export default App;

