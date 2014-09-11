define([
  'react', 'underscore', 'buildpack_form/klass', 'buildpack_table/klass'
], function (React, _, BuildpackForm, BuildpackTable) {
  'use strict';

  return function (state, props, onUrlChange, createBuildpack) {
    var formAttributes = {
      createBuildpack: createBuildpack,
      onUrlChange: onUrlChange,
      buttonDisabled: state.createDisabled,
      url: state.inputUrl
    };

    return React.DOM.div(null,
      new BuildpackForm(formAttributes),
      React.DOM.br(null),
      new BuildpackTable({ buildpacks: state.buildpacks })
    );
  };
});
