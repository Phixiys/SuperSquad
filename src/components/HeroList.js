import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeCharacterById } from '../actions/index';

class HeroList extends Component {
  render() {
    return (
      <div>
        <h4>Your Hero Squad</h4>
        <ul className="collection">
          {this.props.heroes.map(hero => {
            return (
              <li key={hero.id} className="collection-item">
                <div className="list-item">{hero.name}</div>
                <div className="list-item right-button" onClick={() => this.props.removeCharacterById(hero.id)}>
                  <i className="material-icons md-18 md-red">clear</i>
                </div>
              </li>
            );
          })}
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

export default connect(mapStateToProps, { removeCharacterById })(HeroList);
