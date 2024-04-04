import React, { useState, useEffect } from 'react';
import backendData from '../../backendData';
import { useParams } from 'react-router-dom';
import './Article.css'

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
          {id}
          <div dangerouslySetInnerHTML={createMarkup()} />
      </div>
  );
}

export default Article
