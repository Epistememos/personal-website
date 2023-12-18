import React from 'react';
import "./Showcase.css";
import { Link } from 'react-router-dom';

function ShowcaseItem(props) {
  return (
    <div>
       <div className='showcase'>
      <h2>{props.name}</h2>
      <li className='showcase__item'>
        <Link className='showcase__item__link' to={props.path}>
          <figure className='showcase__item__pic-wrap' data-category={props.label}>
            <img className='showcase__item__img' alt='Project' src={props.src}/>
          </figure>
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
