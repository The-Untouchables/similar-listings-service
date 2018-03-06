import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';


function SimilarListings (props) {
  return (
    <div className="similarListing_container" onClick={() => {this.handleClick(props.value.id)}}>
      <div className="similarListing_inner_container">
        <img className="similarListing_img" src={props.value.photo.data} width="237" height="158" />
        <div className="similarListing_category">
          <span>{props.value.desc}</span> · <span>{props.value.city}</span>
        </div>
        <div className="similarListing_title">{props.value.address}</div>
        <div className="similarListing_price">$<span>{props.value.price}</span> per night</div>
        <div className="similarListing_rating">
          <Rating
            name={'ratingStars'}
            value={props.value.ratings}
            editing={false}
            starColor={'#008489'}
            emptyStarColor={'#D8D8D8'}
          />
          <div className="similarListing_rating">{props.value.ratings}</div>
        </div>
      </div>
    </div>
  );
}


export default SimilarListings;