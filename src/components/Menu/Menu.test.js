import React from 'react'
import Menu from './Menu'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'


describe(Menu, () => {
  const changeSelected = jest.fn()

  it('renders without crashing', () => {
    const menu = render(<Menu articlesData={{local: 'local', entertainment: 'entertainment', health: 'health', science: 'science', technology: 'technology'}} changeSelected={changeSelected}/>)
  })

  it('should have a title', () => {
    const { getByText } = render(<Menu articlesData={{local: 'local', entertainment: 'entertainment', health: 'health', science: 'science', technology: 'technology'}} changeSelected={changeSelected}/>)
    const title = getByText('Whats New?')
    expect(title).toBeInTheDocument()
  })

  it('should be able to change selected topic', () => {
    const { getByText } = render(<Menu articlesData={{local: 'local', entertainment: 'entertainment', health: 'health', science: 'science', technology: 'technology'}} changeSelected={changeSelected}/>)
    const localButton = getByText('local')
    fireEvent.click(localButton)
    expect(changeSelected).toHaveBeenCalled()
  })
})
