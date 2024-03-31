import React from 'react';
import Header from '../Header';
import ShowcaseItem from '../ShowcaseItem';
import backendData from '../../backendData';
import Button from '../Button';


function Projects() {
  const  data = backendData[0];
  return (
    <div>
    <Button name='Return Home' path='/'/>
    <Header/>
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

export default Projects
