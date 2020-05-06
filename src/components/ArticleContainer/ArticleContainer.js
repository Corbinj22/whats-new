import React from 'react'
import NewsArticle from '../NewsArticle/NewsArticle'
import './ArticleContainer.css'

const ArticleContainer = (props) => {

const selectedArticles = props.articlesData.map(article => {
    return <NewsArticle id={article.id} info={article}/>
  })

  return (
    <div className='article-container'>
      {selectedArticles}
    </div>
  )
}

export default ArticleContainer
