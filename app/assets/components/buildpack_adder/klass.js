define([
  'react', 'buildpack_adder/template'
], function (React, template) {
  'use strict';

  return React.createClass(new BuildpackAdderConfig());

  function BuildpackAdderConfig() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      onInputChange: onInputChange,
      onButtonClick: onButtonClick,
      render: render
    };

    function getInitialState() {
      return { url: '', buttonDisabled: false };
    }

    function onInputChange(event) {
      this.setState({ url: event.target.value });
    }

    function onButtonClick() {
      this.setState({ buttonDisabled: true });
    }

    function render() {
      return template(
        this.state, this.props, this.onInputChange, this.onButtonClick
      );
    }
  }
});
