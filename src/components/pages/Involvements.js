import React from 'react';
import Header from '../Header';
import backendData from '../../backendData';
import ShowcaseItem from '../ShowcaseItem';
import Button from '../Button';

function Involvements() {
  const  data = backendData[1];
  return (
    <div>
    <Button name='Return Home' path='/'/>
    <Header />
    <div className='showcase__container' id={data.id}>
      <h1>{data.section}</h1>
      <div className='showcase__wrapper'>
        <ul className='showcase__items'>
        {data.categories.map(item => (
          <ShowcaseItem title={item.title} data={item} />
        ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Involvements
