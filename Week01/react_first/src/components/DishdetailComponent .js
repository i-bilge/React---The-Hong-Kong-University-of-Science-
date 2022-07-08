import '../App.scss'

const DishDetail = ({dish})=>{
  //Here i can also use it like "props" then use it like "props.dish".
  return (
    <div className='onClickPart'>
      <div className='onClickCardsL'>
        <img src={dish.image} alt={dish.name} />
        <div className='onClickCardsLTitle'>{dish.name}</div>
        <div className='onClickCardsLText'>{dish.description}</div>
      </div>

      <div className='onClickCardsR'>
          <div className='onClickCardsRTitle'>COMMENTS</div>
          <br></br>
          <div className='onClickCardsLList'>
            <ul>
              {dish.comments.map((person)=>(
                <p key={person.id}>
                <br/>{person.comment}<br/><br/>
                --{person.author}, {`${new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(new Date(Date.parse(person.date)))}`}
                </p>
              ))}
            </ul>
          </div>
      </div>
    </div>
  );
}


export default DishDetail

//-----------PEERS CODE--------------------------
// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

// class DishDetail extends Component{
//     constructor(props) {
//         super(props);

//         console.log(props);
        
//         // stores iproperties of this component
//         this.state = {
//             selectedDishDetail: this.props.dsdetail
//         };


//     }

//     renderDish(dish) {

//         if (dish != null) {
//             return (
//                 <div className='col-12 col-md-5 m-1'>
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle> {dish.name}</CardTitle>
//                             <CardText> {dish.description} </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>   
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }

//     renderComments(comments){
//         if (comments == null) {
//             return (<div></div>)
//         }
//         const cmnts = comments.map(comment => {
//             return (
//                 <li key={comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {cmnts}
//                 </ul>

//             </div>
//         )
//     }


//     render(){
//         const dish = this.props.dish

//         console.log(dish);
        
//         if (dish == null) {
//             return (<div></div>);
//         }

//         const dishItem = this.renderDish(dish);
//         const dishComment = this.renderComments(dish.comments);

//         return (
//             <div className='row'>
//                 {dishItem}
//                 {dishComment}
//             </div>
//         )
//     }

// }

// export default DishDetail;
//
//-----------------------2-----------------------
// import React, { Component } from "react";
// import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from "reactstrap";

// class DishDetail extends Component{
//     constructor(props) {
//         super(props);

//         console.log(props);
        
//         this.state = {
//             selectedDishDetail: this.props.dsdetail
//         };
//     }

//     renderDish(dish) {

//         if (dish != null) {
//             return (
//                 <div className='col-12 col-md-5 m-1'>
//                     <Card>
//                         <CardImg width="100%" src={dish.image} alt={dish.name} />
//                         <CardBody>
//                             <CardTitle> {dish.name}</CardTitle>
//                             <CardText> {dish.description} </CardText>
//                         </CardBody>
//                     </Card>
//                 </div>   
//             );
//         }
//         else {
//             return (
//                 <div></div>
//             );
//         }
//     }

//     renderComments(comments){
//         if (comments == null) {
//             return (<div></div>)
//         }
//         const cmnts = comments.map(comment => {
//             return (
//                 <li key={comment.id}>
//                     <p>{comment.comment}</p>
//                     <p>-- {comment.author},
//                     &nbsp;
//                     {new Intl.DateTimeFormat('en-US', {
//                         year: 'numeric',
//                         month: 'long',
//                         day: '2-digit'
//                     }).format(new Date(comment.date))}
//                     </p>
//                 </li>
//             )
//         })
//         return (
//             <div className='col-12 col-md-5 m-1'>
//                 <h4> Comments </h4>
//                 <ul className='list-unstyled'>
//                     {cmnts}
//                 </ul>

//             </div>
//         )
//     }
//     render(){
//         const dish = this.props.dish

//         console.log(dish);
        
//         if (dish == null) {
//             return (<div></div>);
//         }

//         const dishItem = this.renderDish(dish);
//         const dishComment = this.renderComments(dish.comments);

//         return (
//             <div className='row'>
//                 {dishItem}
//                 {dishComment}
//             </div>
//         )
//     }
// }
// export default DishDetail;