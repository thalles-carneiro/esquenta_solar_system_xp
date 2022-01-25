import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;

    return (
      <h2>{ headline }</h2>
    );
  }
}

const { string } = PropTypes;

Title.propTypes = {
  headline: string.isRequired,
};

export default Title;
