import Rating from 'react-star-rating-component';
import * as Vibrant from 'node-vibrant';
import ReactDOM from "react-dom";
import Slider from "react-slick";
import React from "react";
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: {},
      similarListings: []
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
    axios.get('/rooms/:roomid/similarListings', {
      params: {
        id: id
      }
    })
    .then((res) => {
      //console.log('Success', res.data);
      this.setState({currentListing: res.data[0], similarListings: res.data});
    })
    .catch((err) => {
      console.error('Error fetching similar listings', err);
    });
  }

  getSimilarListings(id) {
    axios.get('/rooms/:roomid/similarListings', {
      params: {
        id: id
      }
    })
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
    this.componentDidMount();
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
              <div><h3>1</h3></div>
              <div><h3>2</h3></div>
              <div><h3>3</h3></div>
              <div><h3>4</h3></div>
              <div><h3>5</h3></div>
              <div><h3>6</h3></div>
              <div><h3>7</h3></div>
              <div><h3>8</h3></div>
              <div><h3>9</h3></div>
              <div><h3>10</h3></div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));