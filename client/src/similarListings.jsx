import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';


class SimilarListings extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      similarListing: {}
    }

  } 

  componentDidMount() {
    vibrant.from(this.props.similarListing.photo.data).getPalette((err, palette) => console.log(palette))
  }

  render () {
    return (
      <div 
        onClick={() => {this.props.handleClick(this.props.currentListing.id)}}
        className="similarListing_container">
          <div className="similarListing_inner_container">
            <img className="similarListing_img" src={this.props.currentListing.photo.data} width="237" height="158" />
            <div className="similarListing_category"><span>{this.props.currentListing.desc}</span> · <span>{this.props.currentListing.city}</span></div>
            <div className="similarListing_title">{this.props.currentListing.address}</div>
            <div className="similarListing_price">
              $<span>{this.props.currentListing.price}
              </span> per night
            </div>
            <div className="similarListing_rating">
                <Rating
                  name={'ratingStars'}
                  value={this.props.currentListing.ratings}
                  editing={false}
                  starColor={'#008489'}
                  emptyStarColor={'#D8D8D8'}
                />
            <div className="similarListing_rating">{this.props.currentListing.ratings}</div>
            </div>
        </div>
      </div>
    );
  }
}

export default SimilarListings;