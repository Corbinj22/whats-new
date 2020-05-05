import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
  const {entertainment, health, local, science, technology} = props

  return (
    <div ClassName='news-container'>
      <NewsArticle entertainment={entertainment}/>
      <NewsArticle health={health}/>
      <NewsArticle local={local}/>
      <NewsArticle science={science}/>
      <NewsArticle technology={technology}/>
    </div>
  )
}

export default NewsContainer;
