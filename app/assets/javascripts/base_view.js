define(['react'], function (React) {
  'use strict';

  return React.createClass(new BaseViewConfig());

  function BaseViewConfig() {
    /* jshint validthis: true */

    return {
      render: render
    };

    function render() {
      return React.DOM.div(null, 'Hello World!');
    }
  }
});
