import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CharCard extends Component {
  render() {
    const { charName, charTitle, charQuote, charImage } = this.props;

    return (
      <div data-testid="char-card">
        <p data-testid="char-name">{ charName }</p>
        <p data-testid="char-title">{ charTitle }</p>
        <p data-testid="char-quote">{ charQuote }</p>
        <img src={ charImage } alt={ `Character ${charName}` } />
      </div>
    );
  }
}

const { string } = PropTypes;

CharCard.propTypes = {
  charName: string.isRequired,
  charTitle: string.isRequired,
  charQuote: string.isRequired,
  charImage: string.isRequired,
};

export default CharCard;
