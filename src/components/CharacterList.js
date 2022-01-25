import React, { Component } from 'react';

import Title from './Title';
import CharCard from './CharCard';

import characters from '../data/characters';

class CharacterList extends Component {
  render() {
    return (
      <div data-testid="character-list">
        <Title headline="Characters" />
        {
          characters.map(({ fullName, title, quote, imageUrl }) => (
            <CharCard
              key={ fullName }
              charName={ fullName }
              charTitle={ title }
              charQuote={ quote }
              charImage={ imageUrl }
            />
          ))
        }
      </div>
    );
  }
}

export default CharacterList;
