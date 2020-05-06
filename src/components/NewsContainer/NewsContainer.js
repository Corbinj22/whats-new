import React from 'react';
import './NewsContainer.css'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import SearchForm from '../SearchForm/SearchForm'

const NewsContainer = ({ articlesData }) => {

  return (
    <div className='news-container'>
      <SearchForm />
      <ArticleContainer articlesData={articlesData}/>
    </div>
  )
}

export default NewsContainer;
