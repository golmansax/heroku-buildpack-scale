define([
  'react', 'underscore', 'reqwest', 'app/template'
], function (React, _, reqwest, template) {
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
      updateBuildpack: updateBuildpack,
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
      // We do this to override anything in our state with the loaded objects
      var buildpackIndex = _.indexBy(this.state.buildpacks, 'id');
      buildpackIndex = _.defaults(_.indexBy(buildpacks, 'id'), buildpackIndex);

      this.setState({ buildpacks: _.values(buildpackIndex) });
    }

    function onUrlChange(event) {
      this.setState({ inputUrl: event.target.value });
    }

    function createBuildpack() {
      this.setState({ createDisabled: true });

      var data = { buildpack: { url: this.state.inputUrl } };
      var params = { url: '/buildpacks', data: data, method: 'post' };
      reqwest(params).then(this.loadBuildpack).always(this.resetForm);
    }

    function updateBuildpack(buildpackData) {
      var params = { url: '/buildpacks/' + buildpackData.id, method: 'put' }
      reqwest(params).then(this.loadBuildpack);
    }

    function resetForm() {
      this.setState({ createDisabled: false });
    }

    function render() {
      return template(
        this.state, this.props, this.onUrlChange, this.createBuildpack,
        this.updateBuildpack
      );
    }
  }
});
