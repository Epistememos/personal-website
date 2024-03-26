import React from 'react';
import "./Showcase.css";
import ShowcaseItem from './ShowcaseItem';
import Button from './Button';

const Showcase = ({data}) => {
  return (
    <div className='showcase__container' id={data.id}>
      <h1>{data.section}</h1>
      
        <ul className='showcase__items'>
        {data.categories.slice(0, 3).map(item => (
          <ShowcaseItem title={item.title} data={item} />
        ))}
        </ul>
    
      <Button name="See more" path={data.link}/>
    </div>
  )
}

export default Showcase
