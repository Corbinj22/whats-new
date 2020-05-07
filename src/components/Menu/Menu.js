import React from 'react';
import './Menu.css'

const Menu = (props) => {
  let articleTitles = Object.keys(props.articlesData)
  let articleTopics = articleTitles.map(article => {
    return <button onClick={props.changeSelected} autoFocus={true} className='nav-icon' id={article} key={article}>{article}</button>
  })
  return (
    <div className='nav-container'>
      <h2>Whats New?</h2>
      <div>
        {articleTopics}
      </div>
    </div>
  )
}

export default Menu;
