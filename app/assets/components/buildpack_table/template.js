define([
  'react', 'underscore', 'buildpack_row/klass'
], function (React, _, BuildpackRow) {
  'use strict';

  return function (state, props) {
    var buildpackRows = _.map(props.buildpacks, function (buildpack) {
      var rowAttributes = _.extend(buildpack, {
        updateBuildpack: props.updateBuildpack
      });
      return new BuildpackRow(rowAttributes);
    });

    return React.DOM.table({ className: 'table' },
      React.DOM.thead(null,
        React.DOM.tr(null,
          React.DOM.th(null, 'Name'),
          React.DOM.th(null, 'Weight (MB)'),
          React.DOM.th(null)
        )
      ),
      React.DOM.tbody(null, buildpackRows)
    );
  };
});
