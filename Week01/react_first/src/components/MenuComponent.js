import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css'
import DishDetail from './DishdetailComponent ';

class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
          selectedDish: null
        };
    }
    //Here we have to use setState to change state of selectDish and work with onClick:
    onDishSelect(dish){
      this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
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
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id}>
                <Card onClick={() => this.onDishSelect(dish) }>
                    <CardImg width="50%" src={dish.image} alt={dish.name} />
                    <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });

        return (
          <div>
            <div className='menuPart'>
              {menu}
            </div>
            <div>
              {/* <DishDetail dish/> */}
              {this.renderDish(this.state.selectedDish)}
              {/* this yerine DishDetail */}
            </div>
          </div>
        );
    }
}

export default Menu;