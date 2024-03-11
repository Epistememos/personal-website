import React from 'react'
import Header from '../Header';
import backendData from '../../backendData';
import ShowcaseItem from '../ShowcaseItem';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Blog() {
  const  data = backendData[2];
  return (
    <div className="home-main">
    <Button name='Return Home' path='/'/>
    <Header />
    <div className='showcase__container' id={data.id}>
      <h1>{data.section}</h1>
      <div className='showcase__wrapper'>
        <ul className='showcase__items'>
        {data.categories.map(item => (
          <Link to={`/blog/${item.title.toLowerCase().replace(/ /g, '-')}`}>
          <ShowcaseItem title={item.title} data={item} />
          </Link>
        ))}
        </ul>
      </div>
    </div>
    </div>
  )
}

export default Blog
