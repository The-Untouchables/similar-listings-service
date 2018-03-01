import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';


class SimilarListings extends React.Component {
  constructor(props) {
    super(props);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    vibrant.from(this.props.similarListing.photo.data).getPalette((err, palette) => console.log(palette))
  }

  render () {
    //console.log(this.props)
    this.componentDidMount()

    return (
      <div className="similarListing_container" onClick={() => {this.props.handleClick(this.props.currentListing.id)}}>
        <div className="similarListing_inner_container">
          <img className="similarListing_img" src={this.props.similarListing.photo.data} width="237" height="158" />
          <div className="similarListing_category">
            <span>{this.props.similarListing.desc}</span> · <span>{this.props.similarListing.city}</span>
          </div>
          <div className="similarListing_title">{this.props.similarListing.address}</div>
          <div className="similarListing_price">$<span>{this.props.similarListing.price}</span> per night</div>
          <div className="similarListing_rating">
            <Rating
              name={'ratingStars'}
              value={this.props.similarListing.ratings}
              editing={false}
              starColor={'#008489'}
              emptyStarColor={'#D8D8D8'}
            />
            <div className="similarListing_rating">{this.props.similarListing.ratings}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default SimilarListings;