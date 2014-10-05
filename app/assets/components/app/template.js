define([
  'react', 'underscore', 'buildpack_form/klass', 'buildpack_table/klass'
], function (React, _, BuildpackForm, BuildpackTable) {
  'use strict';

  return function (state, props, onUrlChange, createBuildpack,
                   updateBuildpack, onQueryChange) {

    var inputAttributes = {
      onChange: onQueryChange,
      type: 'text',
      value: state.query,
      className: 'form-control',
      placeholder: 'Find a buildpack (e.g. Ruby, Python, Java)'
    };

    var formAttributes = {
      createBuildpack: createBuildpack,
      onUrlChange: onUrlChange,
      buttonDisabled: state.createDisabled,
      url: state.inputUrl
    };

    var buildpacks = _.filter(state.buildpacks, queryFilter(state.query));
    var tableAttributes = {
      buildpacks: buildpacks,
      updateBuildpack: updateBuildpack
    };

    return React.DOM.div(null,
      React.DOM.input(inputAttributes),
      React.DOM.br(null),
      new BuildpackForm(formAttributes),
      React.DOM.br(null),
      new BuildpackTable(tableAttributes)
    );
  };

  function queryFilter(query) {
    var lowerCaseQuery = query.toLowerCase();
    return function (buildpack) {
      return buildpack.prettyName.toLowerCase().indexOf(lowerCaseQuery) >= 0;
    };
  }
});
