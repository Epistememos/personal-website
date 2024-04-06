import React, { useState, useEffect } from 'react';
import backendData from '../../backendData';
import { useParams } from 'react-router-dom';
import './Article.css'
import Button from '../Button';

function Article() {
  const { id } = useParams();
  const [article, setArticle] = useState('');

  useEffect(() => {
      const fetchArticle = async () => {
        const response = await fetch(`/articles/${id}.txt`);
        const data = await response.text();
        setArticle(data);
      };

      fetchArticle();
  }, [id]);

  const createMarkup = () => {
      return { __html: article };
  };

  return (
      <div className='article'>
        <Button name='Return Home' path='/'/>
          <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
  );
}

export default Article
