import React, { Component } from 'react';
import { connect } from 'react-redux';

class Squadstats extends Component {
  strength() {
    let strength = 0;
    this.props.heroes.forEach(hero => (strength += hero.strength));
    return strength;
  }

  intelligence() {
    let intelligence = 0;
    this.props.heroes.forEach(hero => (intelligence += hero.intelligence));
    return intelligence;
  }

  speed() {
    let speed = 0;
    this.props.heroes.forEach(hero => (speed += hero.speed));
    return speed;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="list-group">
          <li className="list-group-item">
            <span className="stat-key">
              <b>Overall Strength: </b>
            </span>
            <span className="stat-nr">{this.strength()}</span>
          </li>
          <li className="list-group-item">
            <span className="stat-key">
              <b>Overall Intelligence: </b>
            </span>
            <span className="stat-nr">{this.intelligence()}</span>
          </li>
          <li className="list-group-item">
            <span className="stat-key">
              <b>Overall Speed: </b>
            </span>
            <span className="stat-nr">{this.speed()}</span>
          </li>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    heroes: state.heroes,
  };
};

export default connect(mapStateToProps, null)(Squadstats);
