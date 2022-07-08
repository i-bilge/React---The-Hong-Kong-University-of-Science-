import React, { Component } from 'react';
import '../App.scss'
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
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="Cards">
                <div className="menuCards" onClick={() => this.onDishSelect(dish) }>
                    <div className='menuCardstitle'>{dish.name}</div>
                    <img src={dish.image} alt={dish.name} />
                </div>
              </div>
            );
        });

        return (
          <div className='Menu'>
            <div className='menuFirstContainer'>
              {menu}
            </div>
            <div className='menuSecondContainer'>
              {this.renderDish(this.state.selectedDish)}
            </div>
          </div>
        );
    }
}

export default Menu;


//-----------PEERS CODE--------------------------
// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
// import DishDetail from './DishdetailComponent';

// class Menu extends Component{

//     constructor(props){
//         super(props);

//         // stores iproperties of this component
//         this.state = {
//             selectedDish: null
//         };

//         console.log('Menu component constructed');
        
//     }

//     onDishSelect(dish){

//         this.setState({
//             selectedDish: dish
//         });

//     }



//     render(){
//         console.log('renders menu component');
        
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={ dish.id } className="col-12 col-md-5 m-1">    
//                     <Card onClick={ () => this.onDishSelect( dish ) } >

//                         <CardImg width="100%" src={ dish.image } alt={ dish.name } />
//                         <CardImgOverlay>
//                             <CardTitle> { dish.name }</CardTitle>
//                         </CardImgOverlay>
//                     </Card>                
//                 </div>
//             );
//         });

//         return(
//             <div className="container">
//                 <div className="row">
//                     { menu }
//                 </div>

//                 <DishDetail dish={this.state.selectedDish} />
                

//             </div>
//         );
//     }

//     componentDidMount(){
//         console.log('Menu component componentDidMounbt is invoked');
        
//     }
// }

// export default Menu;
// -------------------2----------------------
// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle  } from "reactstrap";
// import DishDetail from './DishdetailComponent';

// class Menu extends Component{

//     constructor(props){
//         super(props);

//         this.state = {
//             selectedDish: null
//         };

//         console.log('Menu component constructed');
        
//     }

//     onDishSelect(dish){

//         this.setState({
//             selectedDish: dish
//         });

//     }

//     render(){
//         console.log('renders menu component');
        
//         const menu = this.props.dishes.map((dish) => {
//             return (
//                 <div key={ dish.id } className="col-12 col-md-5 m-1">    
//                     <Card onClick={ () => this.onDishSelect( dish ) } >

//                         <CardImg width="100%" src={ dish.image } alt={ dish.name } />
//                         <CardImgOverlay>
//                             <CardTitle> { dish.name }</CardTitle>
//                         </CardImgOverlay>
//                     </Card>                
//                 </div>
//             );
//         });

//         return(
//             <div className="container">
//                 <div className="row">
//                     { menu }
//                 </div>

//                 <DishDetail dish={this.state.selectedDish} />

//             </div>
//         );
//     }

//     componentDidMount(){
//         console.log('Menu component componentDidMounbt is invoked');
        
//     }
// }

// export default Menu;