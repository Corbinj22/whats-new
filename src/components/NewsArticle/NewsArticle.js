import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='article' data-testid='article' key={props.info.id}>
      <img className='article-img' alt='{props.info.headline}' src={props.info.img}></img>
      <h3 className='article-header'>{props.info.headline}</h3>
      <p className='article-description'>{props.info.description}</p>
      <a href={props.info.url}>Link To Article</a>
    </div>
  )
}

export default NewsArticle;
