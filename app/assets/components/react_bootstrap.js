require([
  'window', 'react', 'buildpack_table/klass'
], function (window, React, BuildpackTable) {
  'use strict';

  var container = window.document.getElementById('react-container');
  if (container) {
    React.renderComponent(new BuildpackTable(null), container);
  }
});
