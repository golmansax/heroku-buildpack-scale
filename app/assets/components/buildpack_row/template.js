define(['react'], function (React) {
  'use strict';

  return function (state, props) {
    return React.DOM.tr(null,
      React.DOM.td(null,
        React.DOM.a({ href: props.url }, props.pretty_name)
      ),
      React.DOM.td(null, props.weight_in_mb)
    );
  }
});
