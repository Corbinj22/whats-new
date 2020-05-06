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
      allTopics: [entertainment, health, local, science, technology]
    }
  }

  render () {
    return (
      <main className="app">
        <Menu />
        <NewsContainer
          articlesData={this.state.allTopics}
        />
      </main>
    );
  }
}

export default App;
