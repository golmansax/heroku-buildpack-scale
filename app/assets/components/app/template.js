define([
  'react', 'underscore', 'buildpack_adder/klass', 'buildpack_table/klass'
], function (React, _, BuildpackAdder, BuildpackTable) {
  'use strict';

  return function (state, props, addBuildpack) {
    return React.DOM.div(null,
      new BuildpackAdder({ onBuildpackAdd: addBuildpack }),
      new BuildpackTable({ buildpacks: state.buildpacks })
    );
  };
});
