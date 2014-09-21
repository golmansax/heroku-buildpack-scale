define(['window'], function (window) {
  'use strict';

  var gon = window.gon;
  window.gon = 'Require the \'gon\' module instead of accessing it directly!';
  return gon;
});
