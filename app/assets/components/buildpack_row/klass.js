define([
  'react', 'buildpack_row/template'
], function (React, template) {
  'use strict';

  return React.createClass(new Config());

  function Config() {
    /* jshint validthis: true */

    return {
      updateBuildpack: updateBuildpack,
      //loadBuildpack: loadBuildpack,
      propTypes: propTypes(),
      render: render
    };

    function updateBuildpack() {
      var url = '/buildpacks/' + this.state.id;
      reqwest({ url: url, method: 'put' }).then(this.loadBuildpack);
    }

    function propTypes() {
      return {
        url: React.PropTypes.string.isRequired,
        weightInMb: React.PropTypes.number,
        prettyName: React.PropTypes.string.isRequired,
        id: React.PropTypes.number.isRequired
      };
    }

    function render() {
      return template(this.state, this.props, this.updateBuildpack);
    }
  }
});
