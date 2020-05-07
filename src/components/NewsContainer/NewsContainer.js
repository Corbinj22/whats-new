import React from 'react';
import './NewsContainer.css'
import ArticleContainer from '../ArticleContainer/ArticleContainer'
import SearchForm from '../SearchForm/SearchForm'

const NewsContainer = ({ articlesData, setSearchedTerm, getSearchedArticles, results }) => {
  return (
    <div className='news-container'>
      <SearchForm
        getSearchedArticles={getSearchedArticles}
      />

      <ArticleContainer
        articlesData={articlesData}
        results={results}
      />
    </div>
  )
}

export default NewsContainer;
