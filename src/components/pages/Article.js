import React, { useState, useEffect } from 'react';
import backendData from '../../backendData';
import { useParams } from 'react-router-dom';

function Article() {
    const { id } = useParams();
    const [article, setArticle] = useState('');
    useEffect(() => {
        fetch('/public/articles/${id}')
          .then(response => response.text())
          .then(data => {
            setArticle(data);
          })
      }, [id]);
  return (
    <div>
      <h2>{ id }</h2>
      <div dangerouslySetInnerHTML={{ __html: article }} />
    </div>
  )
}

export default Article
