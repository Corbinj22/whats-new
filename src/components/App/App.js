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
      selected: 'local',
      results: []
    }
  }

  changeSelected = (event) => {
    this.setState({
      selected: event.target.id
    })
    this.setState({results : []})
  }

  getSearchedArticles = (value) => {
    let results = this.state.allTopics[this.state.selected].filter(topic => topic.headline.includes(value));
    this.setState({results: results})
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
            results={this.state.results}
            getSearchedArticles={this.getSearchedArticles}
        />
      </main>
    );
  }
}

export default App;
