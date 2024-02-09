import React from 'react';
import "./Showcase.css";
import ShowcaseItem from './ShowcaseItem';

const Showcase = ({data}) => {
  return (
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
  )
}

export default Showcase
