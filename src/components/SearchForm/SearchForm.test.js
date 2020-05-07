import React from 'react'
import SearchForm from './SearchForm'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe(SearchForm, () => {
  const mockSearch = jest.fn()

  it('renders without crashing', () => {
    const searchForm = render(<SearchForm getSearchedArticles={mockSearch}/>)
  })

  //should take input
  it('should be able to display a user input', () => {
    const { getByPlaceholderText } = render(<SearchForm getSearchedArticles={mockSearch}/>)
    const searchInput = getByPlaceholderText('Search')
    expect(searchInput).toBeInTheDocument();
  })

  it('should be able to change based on user input', () => {
    const{ getByPlaceholderText } = render(<SearchForm getSearchedArticles={mockSearch}/>)
    const searchInput = getByPlaceholderText('Search')
    fireEvent.change(searchInput, {target: {value: 'Owe, now, brown, cow'}})
    expect(searchInput.value).toEqual('Owe, now, brown, cow')
  })

  it('should be able to submit searched articles', () => {
    const{ getByText, getByPlaceholderText } = render(<SearchForm getSearchedArticles={mockSearch}/>)
    const searchInput = getByPlaceholderText('Search')
    fireEvent.change(searchInput, {target: {value: 'Owe, now, brown, cow'}})
    const searchButton = getByText('Search Now')
    fireEvent.click(searchButton)
    expect(mockSearch).toHaveBeenCalledWith(searchInput.value)
  })




})
