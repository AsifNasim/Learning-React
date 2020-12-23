import './App.css';
import Greet from './component/Greet'
// import {myComponent} from './component/Greet'
import { Component } from 'react';
import Hello from './component/Hello'

import Welcome from './component/Welcome'

import Message from './component/Message'
import Counter from './component/Counter';
import FunctionClicks from './component/FunctionClicks';
import ClassClicks from './component/ClassClicks';
import EventBind from './component/EventBind';
import ParentComponent from './component/ParentComponent';




class App extends Component{
  render(){
    return (
    <div className= "App">
      <ParentComponent />
      {/* <EventBind /> */}
        {/* <Counter /> */}
        {/* <ClassClicks />
        <Greet name = 'Asif' heroName = 'Full Stack Developer'></Greet>
        <Welcome name = 'Nasim' heroName = 'Last Name'/>
        <FunctionClicks /> */}
      {/* <Message /> */}
      {/* <Greet></Greet> */}
       {/* WHEN WE DONT HAVE ANYTHING BETWEEN OPENING 
//       AND CLOSING TAG THEN WE CAN ALSO WRITE
//       <GREET/> AND IT WILL WORK AS THE ABOVE */}
      {/* <Greet name = 'Md' heroName = 'Intial'>
        <p>This is children component</p>
      </Greet>

      <Greet name = 'Asif' heroName = 'Middle'>
        <input type= "text"></input>
      </Greet>

      <Greet name = 'Nasim' heroName = 'Last'></Greet>
      
      <Welcome name = 'Md' heroName = 'Intial' />
      <Welcome name = 'Asif' heroName = 'Middle'/>
      <Welcome name = 'Nasim' heroName = 'Last'/>
      <Hello /> */}
    </div>
    );
  }
}

// function App() {
//   return (
//     <div className="App">
//       {/* <h1>Hello Asif!</h1> */}
//       {/* <Greet></Greet> */}
//       {/* WHEN WE DONT HAVE ANYTHING BETWEEN OPENING 
//       AND CLOSING TAG THEN WE CAN ALSO WRITE
//       <GREET/> AND IT WILL WORK AS THE ABOVE */}
//       <Greet />
//   </div>
//   );
// }

export default App;
