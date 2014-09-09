define(['react', 'underscore'], function (React, _) {
  'use strict';

  return function (state, props) {
    return React.DOM.tr(null,
      React.DOM.td(null, props.pretty_name),
      React.DOM.td(null, props.weight_in_mb)
    );
  }
});
