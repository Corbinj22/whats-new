import React from 'react'
import App from './App'
import { render, fireEvent } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'

describe(App, () => {

  it('renders without crashing', () => {
   const app = render(<App />)
  });

  it('it should load the app with correct data', () => {
    const { container } = render(<App />)
    const appContainer = container.firstChild
    expect(appContainer).toHaveClass('app')
    expect(appContainer).toBeInTheDocument
  })
})
