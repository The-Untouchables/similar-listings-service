import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import SimilarListings from './similarListings.jsx';
import axios from 'axios';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      similarListings: [
       { photo: 
           { data: '../images/pexels-photo-259580.jpeg',
             contentType: 'image/jpg' },
          id: 20828195,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: '' },
        { photo: 
           { data: '../images/pexels-photo-276625.jpeg',
             contentType: 'image/jpg' },
          id: 17012402,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: '' },
        { photo: 
           { data: '../images/pexels-photo-189333.jpeg',
             contentType: 'image/jpg' },
          id: 15445591,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: 'Traveler and Host\r\n' },
        { photo: 
           { data: '../images/pexels-photo-271654.jpeg',
             contentType: 'image/jpg' },
          id: 22744156,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: '' },
        { photo: 
           { data: '../images/pexels-photo-276663.jpeg',
             contentType: 'image/jpg' },
          id: 14029654,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: '' },
        { photo: 
           { data: '../images/pexels-photo-271654.jpeg',
             contentType: 'image/jpg' },
          id: 21414157,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: 'Hello, \r\n\r\nMy name is TJ. My Fiancee, Maria and I love to travel and are extremely passionate about making sure that your trip is everything you\'ve dreamt of and more. \r\n\r\nWhen you book with us, you have truly found "Your home away from home."' },
        { photo: 
           { data: '../images/pexels-photo-276663.jpeg',
             contentType: 'image/jpg' },
          id: 19035681,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: 'Born and raised in Houston, Texas very familiar with the area. I\'m a club promoter' },
        { photo: 
           { data: '../images/pexels-photo-210552.jpeg',
             contentType: 'image/jpg' },
          id: 15375322,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: '' 
        }
      ]
    }
    this.fetch = this.fetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetch('12026845');
  }

  fetch(id) {
    axios.get(`/rooms/${id}/similarListings`)
    .then((res) => {
      this.setState({
        similarListings: res.data
      }, function() {
        console.log('State: ', this.state.similarListings.length);
      });
      console.log('Res: ', res.data.length, this.state.similarListings.length);
    })
    .catch((err) => {
      console.error('Error fetching similar listings', err);
    });
  }

  handleClick (id) {
    this.fetch(id);
  }

  render() {
    const settings =  {
      className: 'center',
      infinite: true,
      centerPadding: '60px',
      slidesToShow: 5,
      swipeToSlide: true,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };
    return (
      <div>
        <h1>HackBnB</h1>
        <div className="similarListings">
          <div className="similarListingsTitle">
            <h2>Other highly rated experiences in <span>{this.state.similarListings[0].city}</span></h2>
          </div>
          <div className="similarExp">
          	{this.state.similarListings.map((listing, index) => <SimilarListings key={index} value={listing}/>)}
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));