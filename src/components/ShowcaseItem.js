import React from 'react';
import "./Showcase.css";
import { Link } from 'react-router-dom';

const ShowcaseItem = ({data}) => {
  return (
    <div>
       <div className='showcase__row'>
      <li className='showcase__item'>
        <Link className='showcase__item__link' to={data.path} target='_blank'>
          <img className='showcase__item__img' alt='Project' src={data.src}/>
          <div className='showcase__item__info'>
            <h5 className='showcase__item__text'>{data.title}</h5>
            <h3 className='showcase__item__text'>{data.time}</h3>
          </div>
        </Link>
      </li>
    </div>
    </div>
  )
}

export default ShowcaseItem
