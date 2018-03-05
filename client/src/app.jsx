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
        


      ]
    }
    this.fetch = this.fetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.fetch('20799308');
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
    this.fetch('20799308');
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
            <h2>Other highly rated Experiences in <span>{this.state.similarListings[0].city}</span></h2>
          </div>
          <div className="similarExp">
            <Slider {...settings}>
          		{this.state.similarListings.map((listing, i) => <SimilarListings key={i} value={listing}/>)}
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}


ReactDOM.render(<App />, document.getElementById('app'));