import React from 'react'
import NewsContainer from './NewsContainer'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe(NewsContainer, () => {
  const getSearchedArticles = jest.fn()
  const newsData = {
    id: 1,
    headline: 'The Who postpones Denver Concert at the Pepsi Center',
    img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
    description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
    url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  }

  it('renders without crashing', () => {
    const newsContainer = render(<NewsContainer articlesData={[newsData]} results= {[]} getSearchedArticles={getSearchedArticles}/>)
  })

})
