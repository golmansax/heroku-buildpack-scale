define([
  'react', 'reqwest', 'app/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new HerokuBuildpackScaleConfig());

  function HerokuBuildpackScaleConfig() {
    /* jshint validthis: true */

    return {
      render: render
    };

    function render() {
      return template(this.state, this.props);
    }
  }
});
