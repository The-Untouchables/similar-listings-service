import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      listings: []
    }
  }

  getSimilarRooms (roomId) {
    console.log(`Find rooms similar to ${roomId}`);
  
    axios.post('/rooms/similarListings', {
      id: roomId
    })
    .then((res) => {
      console.log('REACT RESP: ', res);
    })
    .catch((err) => {
      console.log('Error: ', err);
    });
    
    //Do a GET request:
    axios.get('/rooms/similarListings')
    .then (res => {
      this.state.listings = res.data;
      console.log('Repo SET', this.state.listings);
    })
    .catch(err => {
      console.log(err);
    });
  }

  render () {
    return (
      <div>
        <h1>HackBnB</h1>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('app'));