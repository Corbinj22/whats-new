import React, { Component } from 'react';
import entertainment from '../../data/entertainment';
import health from '../../data/health';
import local from '../../data/local';
import science from '../../data/science';
import technology from '../../data/technology';
import NewsContainer from '../NewsContainer/NewsContainer'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      local
    }
  }

  render () {
    return (
      <div className="app">
        <NewsContainer
          entertainment={entertainment}
          health={health}
          local={local}
          science={science}
          technology={technology}
        />
      </div>
    );
  }
}

export default App;
