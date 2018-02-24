import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};



class SimilarListings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="similarListings" />
    );
  }
}

SimilarListings.propTypes = propTypes;
SimilarListings.defaultProps = defaultProps;

export default SimilarListings;