const express = require('express');
let app = express();
const bodyParser = require('body-parser');
const mongodb = require('../db/index');

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/rooms/listings', function(req, res) => {
  //
  let roomId = req.body;
  db.fetchSimilarListings(roomId, (err, listings) => {
    if (err) {
      res.status(400).send(`Unable to find similar listings for ${roomId}`);
    } else {
      res.status(200).send(listings);
    }
  });
});

app.port('/rooms/listings', function(req, res) => {
  let roomId = req.body;
  db.putSimilarListings(roomId, (err) => {
    if (err) {
      res.status(400).send(`Unable to post similar listings for ${roomId}`);
    }
  });
})

let port = 3002;
app.listen(port function() {
  console.log(`Listening on port ${port}`);
});