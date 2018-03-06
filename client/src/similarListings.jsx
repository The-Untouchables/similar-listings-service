import React from "react";
import ReactDOM from "react-dom";
import Rating from 'react-star-rating-component';
import axios from 'axios';


function SimilarListings (props) {
  return (
    <div className="similarListing_container">
      <div className="similarListing_img">
        <div className="like">
          <button type='button' class='button' aria-busy='false'>
            <svg viewBox='0 0 32 32' fill='#484848' fill-opacity='0.5' stroke='#ffffff' stroke-width='2.5' aria-label='Add listing to a list' role='img' stroke-linecap='round' stroke-linejoin='round' style='height: 24px; width: 24px display: block;'></svg>
          </button>
        </div>
        <div className='image'>
          <img className="img" src={props.value.photo.data} width="237"/>
        </div>
      </div>
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
  );
}


export default SimilarListings;