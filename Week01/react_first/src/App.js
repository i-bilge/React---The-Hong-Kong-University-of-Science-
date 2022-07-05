// import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import Navbar from './components/Navbar';
// import {DISHES} from './shared/dishes';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Menu/>
    </div>
  );
}

export default App;

// class App extends Component {
//    constructor(props) {
//     super(props);
//     this.state = {
//       dishes: DISHES
//     };
//   }
// }
// <Menu dishes={this.state.dishes} />

// export default App;