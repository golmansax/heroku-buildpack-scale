define([
  'react', 'buildpack_row/template'
], function (React, template) {
  'use strict';

  return React.createClass(new BuildpackRowConfig());

  function BuildpackRowConfig() {
    /* jshint validthis: true */

    return {
      getInitialProps: getInitialProps,
      render: render
    };

    function getInitialProps() {
      return { url: '', weightInMb: 0, prettyName: '' };
    }

    function render() {
      return template(this.state, this.props);
    }
  }
});
