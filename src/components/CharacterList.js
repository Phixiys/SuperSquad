import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addCharacterById } from '../actions';

class CharacterList extends Component {
  render() {
    return (
      <div>
        <h4>Characters</h4>
        <ul className="list-group">
          {this.props.characters.map(character => {
            return (
              <li key={character.id} className="list-group-item">
                <div className="list-item">{character.name}</div>
                <div className="list-item right-button" onClick={() => this.props.addCharacterById(character.id)}>
                  <i className="fa fa-plus" />
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
    characters: state.characters,
  };
};

// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ addCharacterById }, dispatch);
// }

export default connect(mapStateToProps, { addCharacterById })(CharacterList);
