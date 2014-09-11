define([
  'react', 'underscore', 'buildpack_form/klass', 'buildpack_table/klass'
], function (React, _, BuildpackForm, BuildpackTable) {
  'use strict';

  return function (state, props, onUrlChange, createBuildpack,
                   updateBuildpack) {

    var formAttributes = {
      createBuildpack: createBuildpack,
      onUrlChange: onUrlChange,
      buttonDisabled: state.createDisabled,
      url: state.inputUrl
    };

    var tableAttributes = {
      buildpacks: state.buildpacks,
      updateBuildpack: updateBuildpack
    };

    return React.DOM.div(null,
      new BuildpackForm(formAttributes),
      React.DOM.br(null),
      new BuildpackTable(tableAttributes)
    );
  };
});
