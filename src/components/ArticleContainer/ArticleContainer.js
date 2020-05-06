import React from 'react'
import NewsArticle from '../NewsArticle/NewsArticle'
import './ArticleContainer.css'

const ArticleContainer = (props) => {
  const allArticles = props.articlesData.map(newsTopic => {
    return newsTopic.map(article => {
      return <NewsArticle id={article.description} info={article}/>
    })
  })

  return (
    <div className='article-container'>
      {allArticles}
    </div>
  )
}

export default ArticleContainer
