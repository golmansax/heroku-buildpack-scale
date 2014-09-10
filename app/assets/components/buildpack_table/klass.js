define([
  'react', 'reqwest', 'buildpack_table/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new BuildpackTableConfig());

  function BuildpackTableConfig() {
    /* jshint validthis: true */

    return {
      render: render
    };

    function render() {
      return template(this.state, this.props);
    }
  }
});
