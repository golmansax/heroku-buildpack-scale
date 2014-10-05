define([
  'window', 'react', 'underscore', 'buildpacks', 'app/template'
], function (window, React, _, buildpacks, template) {
  'use strict';

  return React.createClass(new Config());

  function Config() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      componentDidMount: componentDidMount,
      loadBuildpackIntoState: loadBuildpackIntoState,
      loadBuildpacksIntoState: loadBuildpacksIntoState,
      onUrlChange: onUrlChange,
      onQueryChange: onQueryChange,
      getBuildpacks: getBuildpacks,
      getBuildpacksAfterSomeTime: getBuildpacksAfterSomeTime,
      createBuildpack: createBuildpack,
      updateBuildpack: updateBuildpack,
      resetForm: resetForm,
      render: render
    };

    function getInitialState() {
      return { buildpacks: [], createDisabled: false, inputUrl: '', query: '' };
    }

    function componentDidMount() {
      this.getBuildpacks();
    }

    function getBuildpacks() {
      buildpacks.getAll()
        .then(this.loadBuildpacksIntoState)
        .then(this.getBuildpacksAfterSomeTime);
    }

    function getBuildpacksAfterSomeTime() {
      window.setTimeout(this.getBuildpacks, 10 * 1000);
    }

    function loadBuildpackIntoState(buildpack) {
      this.loadBuildpacksIntoState([buildpack]);
    }

    function loadBuildpacksIntoState(buildpacks) {
      // We do this to override anything in our state with the loaded objects
      var buildpackIndex = _.indexBy(this.state.buildpacks, 'id');
      buildpackIndex = _.defaults(_.indexBy(buildpacks, 'id'), buildpackIndex);

      this.setState({ buildpacks: _.values(buildpackIndex) });
    }

    function onUrlChange(event) {
      this.setState({ inputUrl: event.target.value });
    }

    function onQueryChange(event) {
      this.setState({ query: event.target.value });
    }

    function createBuildpack() {
      this.setState({ createDisabled: true });

      buildpacks.create({ buildpack: { url: this.state.inputUrl } })
        .then(this.loadBuildpackIntoState)
        .always(this.resetForm);
    }

    function updateBuildpack(buildpackData) {
      buildpacks.update(buildpackData.id).then(this.loadBuildpackIntoState);
    }

    function resetForm() {
      this.setState({ createDisabled: false });
    }

    function render() {
      return template(
        this.state, this.props, this.onUrlChange, this.createBuildpack,
        this.updateBuildpack, this.onQueryChange
      );
    }
  }
});
