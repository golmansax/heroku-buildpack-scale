define(['react', 'underscore'], function (React, _) {
  'use strict';

  return function (state, props) {
    var weight =
      _.isUndefined(props.weightInMb) ? 'Pending...' : props.weightInMb;

    return React.DOM.tr(null,
      React.DOM.td(null,
        React.DOM.a({ href: props.url }, props.prettyName)
      ),
      React.DOM.td(null, weight)
    );
  };
});
