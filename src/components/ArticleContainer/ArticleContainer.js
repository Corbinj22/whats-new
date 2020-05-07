import React from 'react'
import NewsArticle from '../NewsArticle/NewsArticle'
import './ArticleContainer.css'

const ArticleContainer = (props) => {
var array = props.articlesData

if (props.results.length) {
  array = props.results
}

const selectedArticles = array.map(article => {
    return <NewsArticle info={article} key={article.id.toString()}/>
  })

  return (
    <div className='article-container' key={props}>
      {selectedArticles}
    </div>
  )
}

export default ArticleContainer
