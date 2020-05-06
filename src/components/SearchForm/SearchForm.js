import React from 'react';
import './SearchForm.css';

class SearchForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      value: ''
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.setSearchedTerm(this.state.value)
  }

  render() {
    return (
      <form className='article-search-form'>
        <input className='article-search-input' placeholder='Search Available Articles' onChange={this.handleChange} value={this.state.value} type='text'></input>
        <button className='article-search-btn' onClick={this.handleSubmit} disabled={!this.state.value.length}>Search Now</button>
      </form>
    )
  }
}

export default SearchForm
