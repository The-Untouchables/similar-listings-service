import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import Rating from 'react-star-rating-component';
import * as vibrant from 'node-vibrant';
import axios from 'axios';
import $ from 'jquery';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: { photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 },
      similarListings: [{ photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 }, { photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 }, { photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 }, { photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 }, { photo: 
   { data: '../images/pexels-photo-276625.jpeg',
     contentType: 'image/jpg' },
  id: 21826970,
  lon: -95.37852098550984,
  lat: 29.750631740465447,
  address: 'Houston, TX, United States',
  city: 'Houston',
  desc: 'Check out My YouTube channel about hosting on Airbnb \n"Airbnb Automated"\n\n I am a traveling small business owner. Though I first used airbnb as a guest,  my primary use for airbnb now is as a host. I really enjoy hosting and hearing about my guests and their stories. What you\'ll find with any of my properties will be a hotel quality clean within a beautiful and artful home. Hello to you all, I wish you safe travels and unforgettable moments on your journey.',
  photo_url: 'https://a0.muscache.com/im/pictures/3458ea4b-bab0-4a4e-b49c-60d713e76b76.jpg?aki_policy=medium',
  __v: 0 }]
    }
    this.fetch = this.fetch.bind(this);
    this.getSimilarListings = this.getSimilarListings.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetch('20799308');
    //Vibrant.from(this.props.currentListing.photo.data).getPalette((err, palette) => console.log(palette))
  }

  fetch(id) {
    axios.get(`/rooms/${id}/similarListings`)
    .then((res) => {
      this.setState({
        similarListings: res.data,
        currentListing: res.data[0]
      });
      console.log('Success', this.state.similarListings);
      console.log('Res: ', res.data.length);
    })
    .catch((err) => {
      console.error('Error fetching similar listings', err);
    });
  }

  getSimilarListings(id) {
    axios.get(`/rooms/${id}/similarListings`)
    .then((res) => {
      //console.log('Success', res.data);
    })
    .catch((err) => {
      console.error('Error getting ratings', err);
    });
  }

  handleClick (id) {
    this.fetch(id);
  }

  render() {
    const settings =  {
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      slidesToScroll: 4,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]};
    return (
      <div>
        <h1>HackBnB</h1>
        <div className="similarListings">
          <div className="similarListingsTitle">
            <h2>Other highly rated Experiences in <span>{this.state.currentListing.city}</span></h2>
          </div>
          <div className="similarExp">
            <Slider {...settings}>
              <div className="similarListing_container" onClick={() => {this.handleClick(this.state.similarListings[1].id)}}>
                <div className="similarListing_inner_container">
                  <img className="similarListing_img" src={this.state.similarListings[1].photo.data} width="237" height="158" />
                  <div className="similarListing_category">
                    <span>{this.state.similarListings[1].desc}</span> · <span>{this.state.similarListings[1].city}</span>
                  </div>
                  <div className="similarListing_title">{this.state.similarListings[1].address}</div>
                  <div className="similarListing_price">$<span>{this.state.similarListings[1].price}</span> per night</div>
                  <div className="similarListing_rating">
                    <Rating
                      name={'ratingStars'}
                      value={this.state.similarListings[1].ratings}
                      editing={false}
                      starColor={'#008489'}
                      emptyStarColor={'#D8D8D8'}
                    />
                    <div className="similarListing_rating">{this.state.similarListings[1].ratings}</div>
                  </div>
                </div>
              </div>

              <div className="similarListing_container" onClick={() => {this.handleClick(this.state.similarListings[2].id)}}>
                <div className="similarListing_inner_container">
                  <img className="similarListing_img" src={this.state.similarListings[2].photo.data} width="237" height="158" />
                  <div className="similarListing_category">
                    <span>{this.state.similarListings[2].desc}</span> · <span>{this.state.similarListings[2].city}</span>
                  </div>
                  <div className="similarListing_title">{this.state.similarListings[2].address}</div>
                  <div className="similarListing_price">$<span>{this.state.similarListings[2].price}</span> per night</div>
                  <div className="similarListing_rating">
                    <Rating
                      name={'ratingStars'}
                      value={this.state.similarListings[2].ratings}
                      editing={false}
                      starColor={'#008489'}
                      emptyStarColor={'#D8D8D8'}
                    />
                    <div className="similarListing_rating">{this.state.similarListings[2].ratings}</div>
                  </div>
                </div>
              </div>

              <div className="similarListing_container" onClick={() => {this.handleClick(this.state.similarListings[4].id)}}>
                <div className="similarListing_inner_container">
                  <img className="similarListing_img" src={this.state.similarListings[4].photo.data} width="237" height="158" />
                  <div className="similarListing_category">
                    <span>{this.state.similarListings[4].desc}</span> · <span>{this.state.similarListings[4].city}</span>
                  </div>
                  <div className="similarListing_title">{this.state.similarListings[4].address}</div>
                  <div className="similarListing_price">$<span>{this.state.similarListings[4].price}</span> per night</div>
                  <div className="similarListing_rating">
                    <Rating
                      name={'ratingStars'}
                      value={this.state.similarListings[4].ratings}
                      editing={false}
                      starColor={'#008489'}
                      emptyStarColor={'#D8D8D8'}
                    />
                    <div className="similarListing_rating">{this.state.similarListings[4].ratings}</div>
                  </div>
                </div>
              </div>


              <div className="similarListing_container" onClick={() => {this.handleClick(this.state.similarListings[3].id)}}>
                <div className="similarListing_inner_container">
                  <img className="similarListing_img" src={this.state.similarListings[3].photo.data} width="237" height="158" />
                  <div className="similarListing_category">
                    <span>{this.state.similarListings[3].desc}</span> · <span>{this.state.similarListings[3].city}</span>
                  </div>
                  <div className="similarListing_title">{this.state.similarListings[3].address}</div>
                  <div className="similarListing_price">$<span>{this.state.similarListings[3].price}</span> per night</div>
                  <div className="similarListing_rating">
                    <Rating
                      name={'ratingStars'}
                      value={this.state.similarListings[3].ratings}
                      editing={false}
                      starColor={'#008489'}
                      emptyStarColor={'#D8D8D8'}
                    />
                    <div className="similarListing_rating">{this.state.similarListings[3].ratings}</div>
                  </div>
                </div>
              </div>

              <div className="similarListing_container" onClick={() => {this.handleClick(this.state.similarListings[4].id)}}>
                <div className="similarListing_inner_container">
                  <img className="similarListing_img" src={this.state.similarListings[4].photo.data} width="237" height="158" />
                  <div className="similarListing_category">
                    <span>{this.state.similarListings[4].desc}</span> · <span>{this.state.similarListings[4].city}</span>
                  </div>
                  <div className="similarListing_title">{this.state.similarListings[4].address}</div>
                  <div className="similarListing_price">$<span>{this.state.similarListings[4].price}</span> per night</div>
                  <div className="similarListing_rating">
                    <Rating
                      name={'ratingStars'}
                      value={this.state.similarListings[4].ratings}
                      editing={false}
                      starColor={'#008489'}
                      emptyStarColor={'#D8D8D8'}
                    />
                    <div className="similarListing_rating">{this.state.similarListings[4].ratings}</div>
                  </div>
                </div>
              </div>

            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
