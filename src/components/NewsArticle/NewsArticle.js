import React from 'react';
import './NewsArticle.css';

const NewsArticle = (props) => {
  return (
    <div className='article'>
      <img className='article-img' src={props.info.img}></img>
      <h3 className='article-header'>{props.info.headline}</h3>
      <p className='article-description'>{props.info.description}</p>
      <a href={props.info.url}>Link To Article</a>
    </div>
  )
}

export default NewsArticle;
