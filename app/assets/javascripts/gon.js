define(['window'], function (window) {
  'use strict';

  var gon = window.gon;
  delete window.gon;
  return gon;
});
