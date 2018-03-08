import React, { Component } from 'react';
import CharacterList from './CharacterList';
import HeroList from './HeroList';
import SquadStats from './SquadStats';
import '../styles/index.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="mb-5">Super Squad</h1>
        <div className="row">
          <div className="col s4">
            <CharacterList />
          </div>
          <div className="col s4">
            <HeroList />
          </div>
          <div className="col s4">
            <SquadStats />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
