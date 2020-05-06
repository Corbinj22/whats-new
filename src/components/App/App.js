import React, { Component } from 'react';
import NewsContainer from '../NewsContainer/NewsContainer'
import Menu from '../Menu/Menu'
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      allTopics: {local, entertainment, health, science, technology},
      searchTerm: '',
      selected: 'local'
    }
  }

  setSearchedTerm = (term) => {
    this.setState({
      searchTerm : term
    })
  }

  changeSelected = (event) => {
    this.setState({
      selected: event.target.id
    })
  }

  render () {
    return (
      <main className="app">
        <Menu
          articlesData={this.state.allTopics}
          changeSelected={this.changeSelected}
        />
        <NewsContainer
            articlesData={this.state.allTopics[this.state.selected]}
            setSearchedTerm={this.setSearchedTerm}
        />
      </main>
    );
  }
}

export default App;
