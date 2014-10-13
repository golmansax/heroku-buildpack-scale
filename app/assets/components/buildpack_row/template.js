define(['react', 'underscore'], function (React, _) {
  'use strict';

  return function (state, props, updateBuildpack) {
    var pendingWeight = !_.isNumber(props.weightInMb);
    var weight = pendingWeight ? 'Pending...' : props.weightInMb;

    var buttonAttributes = {
      type: 'button',
      className: 'btn btn-default',
      onClick: updateBuildpack,
      disabled: pendingWeight
    };

    var formattedDate =
      pendingWeight ? '' : formatDate(new Date(props.lastWeighed));

    return React.DOM.tr(null,
      React.DOM.td(null,
        React.DOM.a({ href: props.url }, props.prettyName)
      ),
      React.DOM.td(null, weight),
      React.DOM.td(null, formattedDate),
      React.DOM.td(null,
        React.DOM.button(buttonAttributes, 'Weigh again')
      )
    );
  };

  function formatDate(date) {
    return date.toString('MMM d yyyy');
  }
});
