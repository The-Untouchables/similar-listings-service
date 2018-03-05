import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';


function SimilarListings (props) {
  return (
    <div className="similarListing_container" onClick={() => {this.props.value.handleClick(this.props.key)}}>
      <div className="similarListing_inner_container">
        <img className="similarListing_img" src={this.props.value.photo.data} width="237" height="158" />
        <div className="similarListing_category">
          <span>{this.props.similarListing.desc}</span> · <span>{this.props.value.city}</span>
        </div>
        <div className="similarListing_title">{this.props.value.address}</div>
        <div className="similarListing_price">$<span>{this.props.value.price}</span> per night</div>
        <div className="similarListing_rating">
          <Rating
            name={'ratingStars'}
            value={this.props.value.ratings}
            editing={false}
            starColor={'#008489'}
            emptyStarColor={'#D8D8D8'}
          />
          <div className="similarListing_rating">{this.props.value.ratings}</div>
        </div>
      </div>
    </div>
  );
}


export default SimilarListings;