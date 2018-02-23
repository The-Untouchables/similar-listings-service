const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
mongoose.connect('mongodb://localhost:/hackbnb');
mongoose.promise = require('bluebird');
const seed = '../data.json';
const seedImages = '../images/'


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
  var room = similarListings.findOne({'id': roomId}, 'city address price ratings', function (err, obj) {
    if (err) throw err;
  });

  var query = similarListings.find({'city': room.city});
  query.select('id city address desc price ratings photo');
  query.limit(6); //limit results to 6
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
};


//Store dummy images into db.
exports.putSimilarListings = function(cb) {
  seedDb(seed, cb);
};


var seedDb = function(content, cb) {
  fs.readFile(content, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      //console.log('Data: ', data);
      var imagesFiles = fs.readdirSync(seedImages);
      
      console.log('typeof: ', typeof data);
      var newdata = JSON.parse(JSON.parse(data));
      //console.log('typeof: ', Array.isArray(newdata), 'len: ', newdata.length);

      for (let i = 0, j = 0; i < newdata.length && j < imagesFiles.length;i++, j++) {
        if (j === imagesFiles.length - 1) {//reset at end of array.
          j = 0;
        }

        var obj = {};
        obj.id = newdata[i].listing.id;
        obj.lon = newdata[i].listing.lng;
        obj.lat = newdata[i].listing.lat;
        obj.address = newdata[i].listing.address;
        obj.price = newdata[i].price;
        obj.ratings = newdata[i].listing.user.user.reviews_count;
        obj.city = newdata[i].listing.city;
        obj.desc = newdata[i].listing.user.user.about;
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

var similarListings = mongoose.model('Listings', similarListingSchema);