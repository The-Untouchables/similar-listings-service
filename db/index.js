const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
mongoose.connect('mongodb://db:27017/hackbnb');
mongoose.promise = require('bluebird');
const seed = '../data.json';
const seedImages = '../images/';


//listings service data schema.
var similarListingSchema = mongoose.Schema({
  //Listings Schema
  id: Number,
  lon: Number,
  lat: Number,
  city: String,
  address: String,
  desc: String,
  price: Number,
  beds: Number,
  stars: Number,
  ratings: Number,
  photo_url: String,
  photo: {
    data: String,
    contentType: String
  }
});

//Fetches similar listings and returns.
exports.fetchSimilarListings = function(roomId, cb) {
  //Get room object
  similarListings.findOne({'id': roomId}, 'city address price ratings', function (err, obj) {
    if (err) {
      throw err;
    } else {
      console.log('Room: ', obj);
      var query = similarListings.find({'city': obj.city});
      query.select('id city address desc price beds stars ratings photo');
      query.limit(10); //limit results to 6
      query.sort({ratings: -1}); //sort by ratings.
      
      //execute query
      query.exec((err, listings) => {
        if (err) {
          console.log('fetch err: ', err);
          cb(err, null);
        } else {
          console.log('Fetch res: ', listings);
          cb(null, listings);
        }
      });
    }
  });
};

//Store dummy images into db.
var putSimilarListings = function(cb) {
  seedDb(seed, cb);
};


var seedDb = function(paths, cb) {
  let content = path.resolve(__dirname, paths);
  fs.readFile(content, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      //console.log('Data: ', data);
      var imagesFiles = fs.readdirSync(path.resolve(__dirname, seedImages));
      var newdata = JSON.parse(JSON.parse(data));
      //console.log('typeof: ', Array.isArray(newdata), 'len: ', newdata.length);
      var desc = ['Hilltop Airstream with gorgeous views', 'Avalon Treehouse bungalow', 'Loft studio in the Central Area',
      'Casa accogliente e tranquilla vicino a Torrazzo','Strum a Guitar in a Bright, Modern Apartment',
      'Romantic Cabana with view','serene peaceful tower retreat','Designer loft Silom',
      'Vacation house in etno-eco village Humac', 'Jack Sparrow House, Cornwall', 'Mushroom Dome Cabin',
      'Hector Cave house', 'Private Pool House with Amazing Views', 'Lussuoso. Vista incantevole.', 'La Salentina, sea, nature & relax'];

      for (let i = 0, j = 0, k = 0; i < newdata.length && j < imagesFiles.length && k < desc.length;i++, j++, k++) {
        if (j === imagesFiles.length - 1) {//reset at end of array.
          j = 0;
        }

        if (k === desc.length - 1) {
          k = 0;
        }

        var obj = {};
        obj.id = newdata[i].listing.id;
        obj.lon = newdata[i].listing.lng;
        obj.lat = newdata[i].listing.lat;
        obj.stars = 5;
        obj.address = newdata[i].listing.address;
        obj.price =  (200 + i) % 300;
        obj.beds = (i + 5) % 4;
        obj.ratings = obj.beds + obj.price;
        obj.city = newdata[i].listing.city;
        obj.desc = desc[k];
        obj.photo_url = newdata[i].listing.medium_url;
        obj.photo = {};
        obj.photo.data = seedImages + imagesFiles[j];
        obj.photo.contentType = 'image/jpg';
        //console.log('Node: ', i, 'Obj', obj.photo.data);
        similarListings.create(obj, (err, instance) => {
          if (err) {
            console.error('Error writing schema', err);
            cb(err);
            throw err;
          } else {
            console.log('Instance saved!', instance);
          }
        });
      }
    }
  });
};

//Init seed db
putSimilarListings(console.log);
var similarListings = mongoose.model('Listings', similarListingSchema);
