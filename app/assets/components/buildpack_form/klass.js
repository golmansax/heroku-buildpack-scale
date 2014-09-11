define([
  'react', 'reqwest', 'buildpack_form/template'
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
        onUrlChange: React.PropTypes.func.isRequired,
        createBuildpack: React.PropTypes.func.isRequired,
        url: React.PropTypes.string.isRequired,
        buttonDisabled: React.PropTypes.bool.isRequired
      };
    }

    function render() {
      return template(this.state, this.props);
    }
  }
});
