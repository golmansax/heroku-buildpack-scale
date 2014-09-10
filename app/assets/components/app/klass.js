define([
  'react', 'reqwest', 'app/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new HerokuBuildpackScaleConfig());

  function HerokuBuildpackScaleConfig() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      componentDidMount: componentDidMount,
      loadBuildpacks: loadBuildpacks,
      addBuildpack: addBuildpack,
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

    function addBuildpack(buildpack) {
      this.state.buildpacks.push(buildpack);
      this.setState({ buildpacks: this.state.buildpacks });
    }

    function render() {
      return template(this.state, this.props, this.addBuildpack);
    }
  }
});
