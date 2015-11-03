'use strict';

Array.prototype.pusher = function(element) {
  this[this.length] = element;
  return this.length;
};

Array.prototype.popper = function() {
  var val = this[this.length-1];
  this.length -= 1;
  return val;
};

Array.prototype.shifter = function() {
  var list = [];
  var val = this[0];
  for (var i = 1; i < this.length; i++) {
    list[i-1] = this[i];
  };
  for (var j = 0; j < list.length +1; j++) {
    this[j] = list[j];
  };
  this.length = this.length-1;
  return val;
};

Array.prototype.unshifter = function(element) {
  var list = [];
  list[0] = element;
  for (var i = 1; i < (this.length + 1); i++) {
    list[i] = this[i-1];
  };
  for (var j = 0; j < list.length; j++) {
    this[j] = list[j];
  };
  return list.length;
};

Array.prototype.unique = function() {
    var list = [];
    for (var i = 0; i < this.length; i++) {
        var num = this[i];
        if (list.indexOf(num) < 0) list.push(num);
    }
    return list;
};

module.exports = Array;



