import React from 'react';
import "./Showcase.css";
import ShowcaseItem from './ShowcaseItem';

function Showcase(props) {
  return (
    <div className='showcase__container'>
      <h1>{props.name}</h1>
      <div className='showcase__wrapper'>
        <ul className='showcase__items'>
          <ShowcaseItem
            src='/assets/img-neuralcar.jpg'
            text='NeuralCar'
          />
          <ShowcaseItem
            src='/assets/img-taskmaster.jpg'
            text='TaskMaster'
          />
          <ShowcaseItem
            src='/assets/img-projecto.jpg'
            text='Projecto (Coming soon: February 2024)'
            
          />
        </ul>
      </div>
    </div>
  )
}

export default Showcase
