import React, { Component } from 'react';
import {DISHES} from '../shared/dishes'; //Here is my data
//And then comes my components to UI:
import Menu from './MenuComponent'; 
import Navbar from './Navbar';
import DishDetail from './DishdetailComponent ';

class Main extends Component {
   constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }
  onDishSelect(dishId){
    this.setState({ selectedDish: dishId});
  }
  renderDish(dish) {
    //And now if its not null i am going to call DishDetail
    if (dish != null) {
      return(
        <DishDetail dish={dish}/>
      );
    } else {
      return(
        <div></div>
      );
    }
  }
  render() {
    return (
      <div className='App'>
        <div className='navApp'>
          <Navbar/>
        </div>
        <div className='menuApp'>
         <Menu dishes={this.state.dishes}
         onClick={(dishId) => this.onDishSelect(dishId)} />
        </div>
        <div className='dishApp'>
         <DishDetail 
            dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
        </div>
      </div>
    );
  }
}


export default Main;