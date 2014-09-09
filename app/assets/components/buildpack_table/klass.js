define([
  'react', 'reqwest', 'buildpack_table/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new BuildpackTableConfig());

  function BuildpackTableConfig() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      componentDidMount: componentDidMount,
      loadBuildpacks: loadBuildpacks,
      render: render
    };

    function getInitialState() {
      return { buildpacks: [] };
    }

    function componentDidMount() {
      reqwest({ url: '/buildpacks', method: 'get' }).then(this.loadBuildpacks);
    }

    function loadBuildpacks(buildpacks) {
      this.setState({ buildpacks: buildpacks });
    }

    function render() {
      return template(this.state, this.props);
    }
  }
});
