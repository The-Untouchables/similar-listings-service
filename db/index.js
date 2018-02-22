const mongoose = require('mongoose');
const path = require('path');
const fs = require('fs');
mogoose.connect('mongodb://localhost:/listings');
mongoose.promise = require('bluebird');

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
            cb(file, content);
          }
        });
      });
    }
  });
};

//listings service data schema.
exports.listingSchema = mongoose.Schema({
  //Listings Schema
  desc: String,
  Price: Number,
  Ratings: Number,
  photo: {
    data: Buffer,
    contentType: String
  }
});

//init Database here.

module.exports.Listings = mongoose.model('Listings', exports.listingSchema);