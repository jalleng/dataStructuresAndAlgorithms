'use strict';

var pusher = require('../lib/methods');
var popper = require('../lib/methods');
var shifter = require('../lib/methods');
var unshifter = require('../lib/methods');
var unique = require('../lib/methods');

var expect = require('chai').expect;

describe('pusher', function() {
  var test = [1,2,3,4,5];
  it('should return the length of the new array', function() {
    expect(test.pusher(6)).to.eql(6);
  });
  it('should add the element to the end of the array', function() {
    expect(test).to.eql([1,2,3,4,5,6]);
  });
});

describe('popper', function() {
  var test = [1,2,3,4,5];
  it('should return the last element of an array', function() {
    expect(test.popper()).to.eql(5);
  });
  it('should remove the last element of the array', function() {
    expect(test).to.eql([1,2,3,4]);
  });
});

describe('shifter', function() {
  var test = [1,2,3,4,5];
  it('should return the first element of an array', function() {
    expect(test.shifter()).to.eql(1);
  });
  it('should remove first element from the array', function() {
    expect(test).to.eql([2,3,4,5]);
  });
});

describe('unshifter', function() {
  var test = [1,2,3,4,5];
  it('should return the length of the new array', function() {
    expect(test.unshifter(7)).to.eql(6);
  });
  it('should add the element to the front of the array', function() {
    expect(test).to.eql([7,1,2,3,4,5]);
  });
});

describe('unique', function() {
  var test = [1,2,2,3,4,5,6,6,7];
  it('should remove duplicates', function() {
    expect(test.unique()).to.eql([1,2,3,4,5,6,7]);
  });
});




