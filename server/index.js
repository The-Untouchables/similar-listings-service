const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../db/index');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use('/images', express.static(path.join(__dirname, '../images')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get(`/rooms/:roomid/similarListings`, (req, res) => {
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

// app.get(``, (req, res) => {
//   let image = req.params.url;
//   let content = path.resolve(__dirname, paths);
//   var imagesFile = fs.readFileSync(path.resolve(__dirname, image), 'utf8');
//   res.status(200).send(imagesFile);
// });

let port = 3007;
app.listen(port, function() {
  console.log(`Listening on port ${port}`);
});