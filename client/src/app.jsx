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
    this.listings = props.listings;
    this.state = {
      roomId: props.roomId,
      similarListings: props.listings
    }
    this.fetch = this.fetch.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    if (this.props.roomId) {
      this.fetch(this.props.roomId);
    }
  }

  fetch(id) {
    axios.get(`/api/rooms/${this.props.roomId}/similarListings`, { crossdomain: true })
    .then((res) => {
      this.listings = res.data;
      this.setState({
        similarListings: res.data
      });
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
        console.log(`Slider Changed to: ${index + 1}`);
      }
    };
    return (
      <div className="similarListings">
        <div className="similarListingsTitle">
          <span>Similar listings</span>
        </div>
        <div className='similarExp'>
          <Slider {...settings}>
		       {this.state.similarListings && this.state.similarListings.map((listing, index) => <SimilarListings key={index} value={listing}/>)}
          </Slider>
        </div>
      </div>
    );
  }
}

export default App;
