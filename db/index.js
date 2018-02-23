const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
mogoose.connect('mongodb://localhost:/listings');
mongoose.promise = require('bluebird');
const seed = '../data.json';

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
  fs.readFile(content, 'utf-8', (err, data) {
    if (err) {
      throw err;
    } else {
      for (let i = 0; i < data.length;i++) {
        var obj = {};
        obj.id = data[i].listing.id;
        obj.lon = data[i].listing.lon;
        obj.lat = data[i].listing.lat;
        obj.address = data[i].listing.name;
        obj.price = data[i].price;
        obj.ratings = data[i].listing.user.user.reviewee_count;
        obj.city = data[i].listing.city;
        obj.desc = data[i].listing.user.user.about;
        obj.photo_url = data[i].listing.medium_url;
        exports.listingSchema.insertOne(obj, (err, instance) => {
          if (err) {
            console.error('Error writing schema', err);
            throw err;
          } else {
            console.log('Instance saved!', instance);
          }
        });
      }
    }
  }
};


//listings service data schema.
exports.listingSchema = mongoose.Schema({
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

//init Database here.
seedDb(seed);

module.exports.Listings = mongoose.model('Listings', exports.listingSchema);