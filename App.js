import React, { Component} from 'react'
import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import FunctionClick from './components/FunctionClick'
import ClassClick from  './components/ClassClick'

class App extends Component {
  render() {
   return (
    <div className="App">
      <FunctionClick />
      <ClassClick />
      {/* <Counter />*/}
     {/*  <Message/>*/} 
   {/* <Greet name="Steve Rogers" heroName="Captain America"> 
    <p>This is children props</p> </Greet>
    <Greet name="Tony Starc"  heroName="Iron Man"> 
    <button>Action</button>
     </Greet>
    <Greet name ="tChala" heroName="Black Panther"/>  
     <Welcome name="Steve Rogers" heroName="Captain America"/>
     <Welcome name="Tony Starc" heroName="Iron Man"/>
     <Welcome name ="tChala" heroName="Black Panther"/>
    {/*<Hello /> */}
    </div>
  );
}
}
export default App;
