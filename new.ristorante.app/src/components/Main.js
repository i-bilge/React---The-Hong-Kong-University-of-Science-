import React from 'react'
import DISHES from '../data/dishes'

const Main = () => {
  const Dishes = DISHES;
  return (
    <div className='menu'>
      {Dishes.map((dish) =>{
        return (
          <div key={dish.id} className="Cards">
            <div className='menuCards'>
              <p className='menuCardsTitle'>
                {dish.name}
              </p>
              <img src={dish.image} alt={dish.name}/>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default Main