import React, { Component } from 'react';
import SayHello from "./components/SayHello";
import Border from "./components/Border";
import './App.css';

class App extends Component {

  constructor() {
    super();
    this.state = {
      name: "Thongchai Munkhluen",
      age: 23
    };
  }
  incrementAge(){
    this.setState({age: this.state.age+20});
  }
  decrementAge(){
    this.setState({age: this.state.age-20});
  }

  render() {
    return (
      <div className="App">
      <SayHello name={this.state.name} age={this.state.age} />
        <p>Hello, {this.state.name}</p>
        <p>age, {this.state.age}</p>
        <div
          style={{
            width: this.state.age,
            border: 2,
            borderStyle: "solid",
            color: "#deab53"
          }}
        />
        <Border>
        <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>{" "}
        <button onClick={() => this.decrementAge()}>ลดอายุ</button>
        </Border>
      </div>      
    );
  }
 
}

export default App;
