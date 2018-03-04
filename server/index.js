const express = require('express');
const bodyParser = require('body-parser');
const db = require('../db/index');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/rooms/${roomid}/similarListings', (req, res) => {
  //
  let roomId = roomid;
  console.log('Req: ', roomId);
  db.fetchSimilarListings(roomId, (err, listings) => {
    if (err) {
      res.status(400).send(`Unable to find similar listings for ${roomId}`);
    } else {
      res.status(200).send(listings);
    }
  });
});

let port = 3007;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});
