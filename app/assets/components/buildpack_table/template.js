define(['react', 'underscore'], function (React, _) {
  'use strict';

  return function (state, props) {
    var buildpackTemplates = _.map(state.buildpacks, function (buildpack) {
      return React.DOM.tr(null,
        React.DOM.td(null, buildpack.pretty_name),
        React.DOM.td(null, buildpack.weight_in_mb)
      );
    });

    return React.DOM.table(null,
      React.DOM.thead(null,
        React.DOM.tr(null,
          React.DOM.th(null, 'Name'),
          React.DOM.th(null, 'Weight (MB)')
        )
      ),
      React.DOM.tbody(null, buildpackTemplates)
    );
  }
});
