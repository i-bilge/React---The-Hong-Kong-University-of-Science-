import React, { Component } from 'react'
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';
import '../App.css'

const DishDetail = ({dish})=>{
  return (
    <div className='onClickPart wrapper'>
    <Card style={{ width: '25rem', border: "solid" }}>
      <CardImg width="100%" variant="top" src={dish.image} alt={dish.name} />
      <CardBody>
        <CardTitle>{dish.name}</CardTitle>
        <CardText>{dish.description}</CardText>
      </CardBody>
    </Card>

    <Card style={{ width: '25rem', border: "solid" }}>
      <CardBody>
        <CardTitle>Comments</CardTitle>
        {/* <CardText>{dish.comments.forEach(el => {thi.comment});}</CardText> NOT WORKS*/}
        <CardText><ul>
        {dish.comments.map((person)=>(
          <p key={person.id}>
          {person.comment}<br/>
          --{person.author}, {person.date.slice(0,10)}
          </p>
        ))}
        </ul></CardText>
      </CardBody>
    </Card>
    </div>
  );
}


export default DishDetail
