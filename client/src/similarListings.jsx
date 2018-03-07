import React from "react";
import ReactDOM from "react-dom";
import Rating from 'react-star-rating-component';
import axios from 'axios';
import style from './style.css';


function SimilarListings (props) {
  return (
    <div className="similarListing_container">
      <div className="similarListing_img">
        <div className='image'>
          <div className="like">
            <button type='button' className='button' aria-busy='false'>
              <svg viewBox='0 0 32 32' fill='#484848' fillOpacity='0.5' stroke='#ffffff' strokeWidth='2.5' aria-label='Add listing to a list' role='img' strokeLinecap='round' strokeLinejoin='round' style={{height: 24 + 'px'}, {width: 24 + 'px'}, {display: 'block'}}></svg>
            </button>
          </div>
          <img className="img" src={props.value.photo.data}/>
        </div>
      </div>
      <div className="similarListing_category">
        <div className='similarListing_top'>
          <small>
            Entire house <span> · </span> {props.value.beds} BEDS
          </small>
        </div>
        <div className="similarListing_title">{props.value.desc}</div>
        <div className="similarListing_price">$<span>{props.value.price}</span> per night</div>
        <div className='ratings'>
          <span className='stars'>
            <Rating
              name={'ratingStars'}
              value={props.value.stars}
              editing={false}
              starColor={'#008489'}
              emptyStarColor={'#D8D8D8'}
            />
          </span>
          <div className="reviews">{props.value.ratings}</div>
        </div>
      </div>
    </div>
  );
}


export default SimilarListings;
