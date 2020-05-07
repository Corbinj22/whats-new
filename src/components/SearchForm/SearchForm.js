import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      value: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.getSearchedArticles(this.state.value)
  }

  render() {
    return (
      <form className='article-search-form'>
        <input className='article-search-input' onChange={this.handleChange} placeholder='Search' value={this.state.value} type='text'></input>
        <button className='article-search-btn' onClick={this.handleSubmit} disabled={!this.state.value.length}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm
