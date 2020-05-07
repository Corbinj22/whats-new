import React from 'react'
import NewsArticle from './NewsArticle'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe('NewsArticle', () => {
  const articleData = {
    id: 1,
    headline: 'The Who postpones Denver Concert at the Pepsi Center',
    img: 'https://theknow.denverpost.com/wp-content/uploads/2016/03/CDXXTHEWHODSC_4082x.jpg',
    description: 'Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.',
    url: 'https://theknow.denverpost.com/2019/09/27/the-who-postpones-denver-concert/225182/'
  }

  it('renders without crashing', () => {
    const article = render(<NewsArticle info={articleData} />)
  })

  it('should render with a headline', () => {
    const { getByText } = render(<NewsArticle info={articleData} />)
    expect(getByText('The Who postpones Denver Concert at the Pepsi Center')).toBeInTheDocument();
    expect(getByText('Classic-rock band The Who has postponed its Denver concert, set for Sunday, Sept. 29, after an illness robbed singer Roger Daltrey of his voice, the band said on Twitter.')).toBeInTheDocument();
  })




})
