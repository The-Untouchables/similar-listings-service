'use strict'
const chai = require('chai')
const mongoose = require('mongoose');
const chaiAsPromised = require('chai-as-promised')
const bodyParser = require('body-parser');
const db = require('../db/index');
chai.use(chaiAsPromised)
const expect = chai.expect
db.putSimilarListings()

describe('Service listings module', () => {
  describe('fetch', () => {
    it('should export a function', () => {
       expect(db.fetchSimilarListings).to.be.a('Function')
     })
     it('should return a Promise', () => {
       const dbFetchResult = db.fetchSimilarListings
       expect(dbFetchResult.then).equal(undefined);
       expect(dbFetchResult.catch).equal(undefined)
     })
  })
})
