require([
  'window', 'react', 'app/klass', 'date'
], function (window, React, HerokuBuildpackScale) {
  'use strict';

  var container = window.document.getElementById('react-container');
  if (container) {
    React.renderComponent(new HerokuBuildpackScale(null), container);
  }
});
