import React from 'react'
import NewsArticle from '../NewsArticle/NewsArticle'
import './ArticleContainer.css'

const ArticleContainer = (props) => {
  var allDataArray = Object.keys(props.articlesData).map(key => {
    return props.articlesData[key];
})

const allArticles = allDataArray.map(newsTopic => {
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
