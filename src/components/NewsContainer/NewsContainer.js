import React from 'react';
import './NewsContainer.css'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import SearchForm from '../SearchForm/SearchForm'

const NewsContainer = ({ articlesData, setSearchedTerm }) => {

  return (
    <div className='news-container'>
      <SearchForm setSearchedTerm={setSearchedTerm}/>
      <ArticleContainer articlesData={articlesData}/>
    </div>
  )
}

export default NewsContainer;
