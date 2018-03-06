import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';


function SimilarListings (props) {
  return (
    <div className="similarListing_container">
      <div className="similarListing_inner_container">
        <img className="similarListing_img" src={props.value.photo.data} width="237" height="158" />
        <div className="similarListing_category">
          <span>ENTIRE APARTMENT</span> · <span>{props.value.beds} BEDS</span>
        </div>
        <div className="similarListing_title">{props.value.desc}</div>
        <div className="similarListing_price">$<span>{props.value.price}</span> per night</div>
        <div>
          <Rating
            name={'ratingStars'}
            value={props.value.stars}
            editing={false}
            starColor={'#484848'}
            emptyStarColor={'#D8D8D8'}
          />
          <div className="similarListing_rating">{props.value.ratings}</div>
        </div>
      </div>
    </div>
  );
}


export default SimilarListings;