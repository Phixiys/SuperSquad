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

  total() {
    let total = 0;
    this.props.heroes.forEach(hero => (total += hero.strength + hero.intelligence + hero.speed));
    return total;
  }

  render() {
    return (
      <div>
        <h4>Squad Stats</h4>
        <ul className="collection">
          <li className="collection-item">
            <span className="stat-key">
              <b>Overall Strength: </b>
            </span>
            <span className="stat-nr">{this.strength()}</span>
          </li>
          <li className="collection-item">
            <span className="stat-key">
              <b>Overall Intelligence: </b>
            </span>
            <span className="stat-nr">{this.intelligence()}</span>
          </li>
          <li className="collection-item">
            <span className="stat-key">
              <b>Overall Speed: </b>
            </span>
            <span className="stat-nr">{this.speed()}</span>
          </li>
        </ul>
        <h3>Total Strenght</h3>
        <ul className="collection with-header">
          <li className="collection-item with-header">
            <h3>{this.total()}</h3>
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
