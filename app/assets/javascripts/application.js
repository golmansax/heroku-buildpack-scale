require(['window', 'react', 'base_view'], function (window, React, BaseView) {
  'use strict';

  var container = window.document.getElementById('react-container');
  if (container) {
    React.renderComponent(new BaseView(null), container);
  }
});
