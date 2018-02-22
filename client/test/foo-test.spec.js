import React from 'react';
import { expect } from 'chai';
import { shallow, mount, render } from 'enzyme';

jest.dontMock('./Foo');

const Foo = require('./Foo');

describe("A suite", function() {
  it('should contain spec with an expectation', function() {
    expect(true).toBe(true);
  });

  it("should render without throwing an error", function() {
    expect(true).toBe(true);
    expect(shallow('<Foo />').contains('<div className="foo" >Similar Listings Service</div>')).toBe(true);
  });

  it("should be selectable by class 'foo'", function() {
    expect(shallow(<Foo />).is('.foo')).toBe(true);
  });

  it("should mount in a full DOM", function() {
    expect(mount(<Foo />).find('.foo').length).toBe(1);
  });
  
  it('should render to static HTML', function() {
    expect(render(<Foo />).text()).toEqual('Bar');
  });
});