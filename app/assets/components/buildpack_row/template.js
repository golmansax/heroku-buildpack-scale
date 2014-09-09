define(['react'], function (React) {
  'use strict';

  return function (state, props) {
    return React.DOM.tr(null,
      React.DOM.td(null,
        React.DOM.a({ href: props.url }, props.prettyName)
      ),
      React.DOM.td(null, props.weightInMb)
    );
  };
});
