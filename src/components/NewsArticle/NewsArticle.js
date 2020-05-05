import React from 'react';
import './NewsArticle.css';

const NewsArticle = () => {
  return (
    <div ClassName='article'>
      <img ClassName='article-img'></img>
      <h3 ClassName='article-header'>Headline Goes Here</h3>
      <p ClassName='article-description'>Description of Article goes here</p>
      <button ClassName='article-webSearch-button'>This is the buttons</button>
    </div>
  )
}

export default NewsArticle;
