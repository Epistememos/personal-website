import React from 'react';
import "./Showcase.css";
import ShowcaseItem from './ShowcaseItem';

function Showcase(props) {
  return (
    <div className='showcase'>
    <h1>{props.name}</h1>
    <div className='showcase__container'>
      <div className='showcase__wrapper'>
        <ul className='showcase__items'>
          <ShowcaseItem
            src='/assets/img-pilot2.jpg'
            text='Explore the hidden waterfall deep inside the Amazon Jungle'
            label='Adventure'
            path='/services'
          />
          <ShowcaseItem
            src='/assets/img-profile.jpg'
            text='Travel through the Islands of Bali in a Private Cruise'
            label='Luxury'
            path='/services'
          />
        </ul>
        <ul className='showcase__items'>
          <ShowcaseItem
            src='/assets/img-profile.jpg'
            text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
            label='Mystery'
            path='/services'
          />
          <ShowcaseItem
            src='/assets/img-profile.jpg'
            text='Experience Football on Top of the Himilayan Mountains'
            label='Adventure'
            path='/products'
          />
          <ShowcaseItem
            src='/assets/img-profile.jpg'
            text='Ride through the Sahara Desert on a guided camel tour'
            label='Adrenaline'
            path='/sign-up'
          />
        </ul>
      </div>
    </div>
  </div>
  )
}

export default Showcase
