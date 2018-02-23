const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
const querystring = require('querystring');
mongoose.connect('mongodb://localhost:/listings');
mongoose.promise = require('bluebird');
const seed = '../data.json';


//listings service data schema.
var listingSchema = mongoose.Schema({
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
    data: Buffer,
    contentType: String
  }
});


//init data and store in a db.
var initDb = function(dirname) {
  fs.readdir(dirname, (err, files) => {
    if (err) {
      throw err;
    } else {
      files.forEach((file) => {
        fs.readFile(dirname + file, 'utf-8', (err, content) => {
          if (err) {
            throw err;
          } else {
            //cb(file, content);
          }
        });
      });
    }
  });
};

var seedDb = function(content) {
  fs.readFile(content, 'utf-8', (err, data) => {
    if (err) {
      throw err;
    } else {
      //console.log('Data: ', data);
      console.log('typeof: ', typeof data);
      var newdata = JSON.parse(JSON.parse(data));
      //console.log('typeof: ', Array.isArray(newdata), 'len: ', newdata.length);

      for (let i = 0; i < newdata.length;i++) {
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
        Listings.create(obj, (err, instance) => {
          if (err) {
            console.error('Error writing schema', err);
            throw err;
          } else {
            console.log('Instance saved!', instance);
          }
        });
      }
    }
  });
};

//init Database here.
seedDb(seed);

var Listings = mongoose.model('Listings', listingSchema);