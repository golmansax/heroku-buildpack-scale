define([
  'react', 'reqwest', 'buildpack_adder/template'
], function (React, reqwest, template) {
  'use strict';

  return React.createClass(new BuildpackAdderConfig());

  function BuildpackAdderConfig() {
    /* jshint validthis: true */

    return {
      getInitialState: getInitialState,
      onInputChange: onInputChange,
      onButtonClick: onButtonClick,
      addBuildpack: addBuildpack,
      enableButton: enableButton,
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

      var data = { buildpack: { url: this.state.url } };
      var params = { url: '/buildpacks', data: data, method: 'post' };
      reqwest(params).then(this.addBuildpack).always(this.enableButton);
    }

    function addBuildpack(buildpack) {
      console.log(buildpack);
    }

    function enableButton() {
      this.setState({ buttonDisabled: false });
    }

    function render() {
      return template(
        this.state, this.props, this.onInputChange, this.onButtonClick
      );
    }
  }
});
