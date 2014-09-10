define([
  'react', 'underscore', 'buildpack_adder/klass', 'buildpack_table/klass'
], function (React, _, BuildpackAdder, BuildpackTable) {
  'use strict';

  return function (state) {
    return React.DOM.div(null,
      new BuildpackAdder(null),
      new BuildpackTable(null)
    );
  };
});
