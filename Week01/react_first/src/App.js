import React, { Component } from 'react';
import './App.scss'; //Here comes my styling
import {DISHES} from './shared/dishes'; //Here is my data
//And then comes my components to UI:
import Menu from './components/MenuComponent'; 
import Navbar from './components/Navbar';


class App extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className='App'>
        <div className='navApp'>
          <Navbar/>
        </div>
        <div className='menuApp'>
         <Menu dishes={this.state.dishes} />
        </div>
      </div>
    );
  }
}


export default App;