define([
  'react', 'reqwest', 'app/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new Config());

  function Config() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      componentDidMount: componentDidMount,
      loadBuildpack: loadBuildpack,
      loadBuildpacks: loadBuildpacks,
      onUrlChange: onUrlChange,
      createBuildpack: createBuildpack,
      resetForm: resetForm,
      render: render
    };

    function getInitialState() {
      return { buildpacks: [], createDisabled: false, inputUrl: '' };
    }

    function componentDidMount() {
      reqwest({ url: '/buildpacks', method: 'get' }).then(this.loadBuildpacks);
    }

    function loadBuildpack(buildpack) {
      this.loadBuildpacks([buildpack]);
    }

    function loadBuildpacks(buildpacks) {
      var buildpackIndex = _.indexBy(this.state.buildpacks, 'id');
      _.each(buildpacks, function (buildpack) {
        if (!buildpackIndex[buildpack.id]) {
          buildpackIndex[buildpack.id] = buildpack;
        }
      });

      this.setState({ buildpacks: _.values(buildpackIndex) });
    }

    function onUrlChange(event) {
      this.setState({ inputUrl: event.target.value });
    }

    function createBuildpack(buildpackData) {
      this.setState({ createDisabled: true });

      var data = { buildpack: { url: this.state.inputUrl } };
      var params = { url: '/buildpacks', data: data, method: 'post' };
      reqwest(params).then(this.loadBuildpack).always(this.resetForm);
    }

    function resetForm() {
      this.setState({ createDisabled: false });
    }

    function addBuildpack(buildpack) {
      this.state.buildpacks.push(buildpack);
      this.setState({ buildpacks: this.state.buildpacks });
    }

    function render() {
      return template(this.state, this.props, this.onUrlChange, this.createBuildpack);
    }
  }
});
