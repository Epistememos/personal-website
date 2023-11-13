import React from 'react'
import CardItem from './CardItem'
import './Cards.css'

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out my current projects</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className="cards__items">
            <CardItem 
            src='images/img-9.jpg'
            text='NeuralCar'
            label='Software'
            path='/NeuralCar'
            />
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Cards;
