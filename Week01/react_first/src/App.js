import React, { Component } from 'react';
import './App.css';
import Menu from './components/MenuComponent';
import Navbar from './components/Navbar';
import {DISHES} from './shared/dishes';

// function App() {
//   return (
//     <div className="App">
//       <Navbar/>
//       <Menu/>
//     </div>
//   );
// }

// export default App;

class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className='container'>
        <div className='row col-12'>
          <Navbar/>
        </div>
        <div className='nav'>
         <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}


export default App;