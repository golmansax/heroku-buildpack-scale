define([
  'react', 'buildpack_row/template'
], function (React, template) {
  'use strict';

  return React.createClass(new Config());

  function Config() {
    /* jshint validthis: true */

    return {
      updateBuildpack: updateBuildpack,
      propTypes: propTypes(),
      render: render
    };

    function propTypes() {
      return {
        url: React.PropTypes.string.isRequired,
        weightInMb: React.PropTypes.number,
        prettyName: React.PropTypes.string.isRequired,
        updateBuildpack: React.PropTypes.func.isRequired,
        id: React.PropTypes.number.isRequired
      };
    }

    function updateBuildpack() {
      this.props.updateBuildpack(this.props);
    }

    function render() {
      return template(this.state, this.props, this.updateBuildpack);
    }
  }
});
