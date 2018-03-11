const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');
let app = express();
let port = 3007;

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.use(express.static(__dirname + '/../client/dist'));
app.use('/rooms/images', express.static(path.join(__dirname, '../images')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//api response
app.get(`/api/rooms/:roomid/similarListings`, (req, res) => {
  //
  let roomId = req.params.roomid;
  console.log('Req: ', roomId);
  db.fetchSimilarListings(roomId, (err, listings) => {
    if (err) {
      res.status(400).send(`Unable to find similar listings for ${roomId}`);
    } else {
      res.status(200).send(listings);
    }
  });
});

app.get(`/rooms/:roomid/similarListings`, (req, res) => {
  res.sendFile(path.join(__dirname, '../client/dist/index.html'));
});


app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
