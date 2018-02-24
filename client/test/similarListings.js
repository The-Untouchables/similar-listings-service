import React, { PropTypes } from 'react';

const propTypes = {};

const defaultProps = {};

class SimilarListings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="similarListings">Similar Listings Service</div>
    );
  }
}

SimilarListings.propTypes = propTypes;
SimilarListings.defaultProps = defaultProps;

export default SimilarListings;