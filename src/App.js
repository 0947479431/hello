import React, { Component } from 'react';
import SayHello from './Components/SayHello';
import Border from './Components/Border';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Pornthep Piromruk",
      age: 21
    };
  }
  incrementAge(){
    this.setState({age: this.state.age + 10});
  }
  decrementAge(){
    this.setState({age: this.state.age - 10});
  }
  render() {
    return <div className="App">
     <SayHello name={this.state.name} age={this.state.age}></SayHello>
    <p>age, {this.state.age}</p>
    <div
         style={{
           width: this.state.age,
           border: 20,
           borderStyle: "solid",
           color: "#deab53"
         }}
       />
    <Border>
        <button onClick={() => this.incrementAge()}>เพิ่มอายุ</button>
        <button onClick={() => this.decrementAge()}>ลบอายุอายุ</button>
    </Border>
    </div>
  }
  
 }
export default App;
