import React from "react";
import ReactDOM from "react-dom";
import Rating from 'react-star-rating-component';
import Slider from "react-slick";
import SimilarListings from './similarListings.jsx';
import style from './style.css';
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
          beds: 2,
          stars: 5,
          address: 'Houston, TX, United States',
          city: 'Houston',
          price: 220,
          desc: 'Private Guest House in Top Location' },
        { photo: 
           { data: '../images/pexels-photo-276625.jpeg',
             contentType: 'image/jpg' },
          id: 17012402,
          beds: 2,
          stars: 5,
          price: 200,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: 'Awesome bungalow at the heart of the city' },
        { photo: 
           { data: '../images/pexels-photo-189333.jpeg',
             contentType: 'image/jpg' },
          id: 15445591,
          beds: 2,
          stars: 5,
          price: 120,
          address: 'Houston, TX, United States',
          city: 'Houston',
          desc: 'Traveler and Host\r\n' },
        { photo: 
           { data: '../images/pexels-photo-271654.jpeg',
             contentType: 'image/jpg' },
          id: 22744156,
          address: 'Houston, TX, United States',
          city: 'Houston',
          beds: 2,
          price: 190,
          stars: 5,
          desc: 'Nice camp house' },
        { photo: 
           { data: '../images/pexels-photo-276663.jpeg',
             contentType: 'image/jpg' },
          id: 14029654,
          address: 'Houston, TX, United States',
          city: 'Houston',
          beds: 2,
          price: 200,
          stars: 5,
          desc: 'Beautiful Chalet' },
        { photo: 
           { data: '../images/pexels-photo-271654.jpeg',
             contentType: 'image/jpg' },
          id: 21414157,
          address: 'Houston, TX, United States',
          city: 'Houston',
          beds: 2,
          stars: 5,
          price: 205,
          desc: 'Awesome bungalow with ocean view' },
        { photo: 
           { data: '../images/pexels-photo-276663.jpeg',
             contentType: 'image/jpg' },
          id: 19035681,
          address: 'Houston, TX, United States',
          city: 'Houston',
          beds: 2,
          stars: 5,
          price: 220,
          desc: 'Viva casa buenos aires' },
        { photo: 
           { data: '../images/pexels-photo-210552.jpeg',
             contentType: 'image/jpg' },
          id: 15375322,
          address: 'Houston, TX, United States',
          city: 'Houston',
          price: 220,
          desc: 'Beautiful cottage uphill',
          beds: 2,
          stars: 5
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
        //console.log('State: ', this.state.similarListings);
      });
      console.log('Res: ', this.state.similarListings[0].rating, this.state.similarListings[0].stars);
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
      dots: false,
      infinite: false,
      slidesToShow: 3,
      slidesToScroll: 1,
      afterChange: function (index) {
        console.log(`Slider Changed to: ${index + 1}, background: #222; color: #bada55`);
      }
    };
    return (
      <div className="similarListings">
        <div className="similarListingsTitle">
          <span>Similar listings</span>
        </div>
        <div className='similarExp'>
          <Slider {...settings}>
		       {this.state.similarListings.map((listing, index) => <SimilarListings key={index} value={listing}/>)}
          </Slider>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('listings'));
