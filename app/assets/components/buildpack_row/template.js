define(['react', 'underscore'], function (React, _) {
  'use strict';

  return function (state, props, updateBuildpack) {
    var weight =
      _.isNumber(props.weightInMb) ? props.weightInMb : 'Pending...';

    var buttonAttributes = {
      type: 'button',
      className: 'btn btn-default',
      onClick: updateBuildpack
    };

    return React.DOM.tr(null,
      React.DOM.td(null,
        React.DOM.a({ href: props.url }, props.prettyName)
      ),
      React.DOM.td(null, weight),
      React.DOM.td(null,
        React.DOM.button(buttonAttributes, 'Weigh again')
      )
    );
  };
});
