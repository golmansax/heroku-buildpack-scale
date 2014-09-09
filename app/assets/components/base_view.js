define(['react', 'base_view_template'], function (React, template) {
  'use strict';

  return React.createClass(new BaseViewConfig());

  function BaseViewConfig() {
    /* jshint validthis: true */

    return {
      render: render
    };

    function render() {
      return template;
    }
  }
});
