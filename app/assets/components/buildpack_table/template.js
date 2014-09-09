define([
  'react', 'underscore', 'buildpack_row/klass'
], function (React, _, BuildpackRow) {
  'use strict';

  return function (state, props) {
    var buildpackTemplates = _.map(state.buildpacks, function (buildpack) {
      return BuildpackRow(buildpack);
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
