import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('./similarListings');

const SimilarListings = require('./similarListings');

describe("similarListings Test suite", function() {
  it('should contain spec with an expectation', function() {
    expect(true).toBe(true);
  });

  it("should render without throwing an error", function() {
    expect(true).toBe(true);
    expect(shallow('<SimilarListings />').contains('<div className="similarlistings" >Similar Listings Service</div>')).toBe(true);
  });

  it("should be selectable by class 'similarlistings'", function() {
    expect(shallow(<SimilarListings />).is('.similarlistings')).toBe(true);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<SimilarListings />).find('.similarlistings').length).toBe(1);
  });
  
  it('should render to static HTML', function() {
    expect(render(<SimilarListings />).text()).toEqual('Bar');
  });
});