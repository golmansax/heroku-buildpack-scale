define([
  'react', 'reqwest', 'buildpack_table/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new Config());

  function Config() {
    /* jshint validthis: true */

    return {
      propTypes: propTypes(),
      render: render
    };

    function propTypes() {
      return {
        buildpacks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
        updateBuildpack: React.PropTypes.func.isRequired
      };
    }

    function render() {
      return template(this.state, this.props);
    }
  }
});
