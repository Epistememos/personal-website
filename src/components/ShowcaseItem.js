import React from 'react';
import "./Showcase.css";
import { Link } from 'react-router-dom';

function ShowcaseItem(props) {
  return (
    <div>
       <div className='showcase__row'>
      <h2>{props.name}</h2>
      <li className='showcase__item'>
        <Link className='showcase__item__link' to={props.path}>
          
          <img className='showcase__item__img' alt='Project' src={props.src}/>
          <div className='showcase__item__info'>
            <h5 className='showcase__item__text'>{props.text}</h5>
          </div>
        </Link>
      </li>
    </div>
    </div>
  )
}

export default ShowcaseItem
