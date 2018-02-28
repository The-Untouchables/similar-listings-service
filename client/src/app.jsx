import React from "react";
import ReactDOM from "react-dom";
import Slider from "react-slick";
import starrating from 'react-star-rating-component';
import axios from 'axios';
import SimilarListings from './similarListings.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentListing: {}, 
      similarlistings: []
    }
    this.fetch = this.fetch.bind(this);
    this.fetchRatings = this.fetchRatings.bind(this);
    this.getSimilarListings = this.getSimilarListings(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getSimilarListings('San Francisco');
  }

  fetch(id) {
    axios.get(`/rooms/:${id}/similarListings`)
    .then((res) => {
      console.log('Success', res.data);
      this.setState({currentListing: res.data[0], similarListings: res.data});
    })
    .catch((err) => {
      console.error('Error fetching similar listings', err);
    });
  }

  fetchRatings(id) {
    axios.get(`/rooms/:${id}/similarListings`)
     .then((res) => {
      console.log('Success', res.data);
    })
    .catch((err) => {
      console.error('Error getting ratings', err);
    });
  }

  handleClick (id) {
    this.fetch(id);
  }


  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToScroll: 4,
      slidesToShow: 4
    };
    return (
      <div>
        <h2>HackBnB</h2>
          <div className="similarListings">
            <div className="similarListingsTitle">
              <h1>Other highly rated Experiences <span>{this.state.currentListing.city}</span></h1>
            </div>
            <div className="similarExp">
              {this.state.similarListings.length > 0 && <Slider {...settings}>
                {this.state.similarListings.map((item, index) => {
                  return  
                    <div key={index}>
                      <SimilarListings 
                        handleClick={this.handleClick}
                        similarListing={item} 
                        currentListing={this.state.currentListing}
                      />
                    </div>
                  })
                }
                </Slider>
              }
            </div>
          </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));