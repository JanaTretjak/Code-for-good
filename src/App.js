import React, { Component } from 'react';
import First from './Components/First'
import './App.css';
import Second from './Second';
import ContactForm from './Components/СontactForm';
import Umfrage from './Components/Umfrage';
import FAQ from './Components/FAQ'

class App extends Component {
  state = {
    class: false,
    class1: false,
    class2: false,
  }
  vonLinks = () => {
    this.setState({ class: !this.state.class });
    console.log("test")
  }
  vonRechts = () => {
    this.setState({ class1: !this.state.class1 });
    console.log("test")
  }
  vonUnten = () => {
    this.setState({ class2: !this.state.class2 });

    console.log("data " + this.state.data)
  }
  render() {
    return (
      <div className="App">
        <Second vonLinks={this.vonLinks} vonRechts={this.vonRechts} vonUnten={this.vonUnten} />
        <ContactForm vonLinks={this.vonLinks} expend={this.state.class} />
        <Umfrage vonUnten={this.vonUnten} expendUnten={this.state.class2} />
        <First vonRechts={this.vonRechts} vonUnten={this.vonUnten} expendRechts={this.state.class1} />
        <FAQ />
      </div >
    );
  }
}

export default App;

