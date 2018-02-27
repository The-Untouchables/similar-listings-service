import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('../similarListings');

const SimilarListings = require('../similarListings');

describe("similarListings Test suite", function() {
  it('should contain spec with an expectation', () => {
    //expect(true).toEqual(true);
  });

  it("should render without throwing an error", () => {
    //expect(true).toEqual(true);
    //expect(shallow('<SimilarListings />').contains('<div className="similarlistings" >Similar Listings Service</div>')).toEqual(true);
  });

  it("should be selectable by class 'similarlistings'", function() {
   // expect(shallow('<SimilarListings />').is('.similarlistings')).toEqual(true);
  });

  it("should mount in a full DOM", function() {
    //expect(mount('<SimilarListings />').find('.similarlistings').length).toEqual(1);
  });
  
  it('should render to static HTML', function() {
    //expect(render('<SimilarListings />').text()).toEqual('Bar');
  });
});
