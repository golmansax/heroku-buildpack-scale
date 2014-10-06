define([
  'react', 'underscore', 'buildpack_adder/klass', 'buildpack_table/klass'
], function (React, _, BuildpackAdder, BuildpackTable) {
  'use strict';

  return Renderer;

  function Renderer(onUrlChange, createBuildpack, updateBuildpack,
                    onQueryChange, showBuildpackAdder) {

    this.render = render;

    function render(state) {
      var buildpacks = _.filter(state.buildpacks, queryFilter(state.query));
      if (_.any(buildpacks)) {
        return React.DOM.div(null,
          searchBox(state.query),
          React.DOM.br(null),
          buildpackTable(buildpacks),
          buildpackAdderOption(
            state.inputUrl, state.createDisabled, state.adderShowing
          )
        );
      } else {
        return React.DOM.div(null,
          searchBox(state.query),
          React.DOM.br(null),
          buildpackAdder(state.inputUrl, state.createDisabled)
        );
      }
    }

    function searchBox(query) {
      var inputAttributes = {
        onChange: onQueryChange,
        type: 'text',
        value: query,
        className: 'form-control',
        placeholder: 'Find a buildpack (e.g. Ruby, Python, Java)'
      };

      return React.DOM.input(inputAttributes);
    }

    function buildpackTable(buildpacks) {
      var tableAttributes = {
        buildpacks: buildpacks,
        updateBuildpack: updateBuildpack
      };

      return new BuildpackTable(tableAttributes);
    }

    function buildpackAdder(inputUrl, buttonDisabled) {
      var adderAttributes = {
        createBuildpack: createBuildpack,
        onUrlChange: onUrlChange,
        buttonDisabled: buttonDisabled,
        url: inputUrl
      };

      return new BuildpackAdder(adderAttributes);
    }

    function buildpackAdderOption(inputUrl, buttonDisabled, adderShowing) {
      if (adderShowing) {
        return buildpackAdder(inputUrl, buttonDisabled);
      } else {
        var linkAttributes = {
          href: '#',
          onClick: showBuildpackAdder
        };

        return React.DOM.p(null,
          'or ',
          React.DOM.a(linkAttributes, 'add a buildpack!')
        );
      }
    }

    function queryFilter(query) {
      var lowerCaseQuery = query.toLowerCase();
      return function (buildpack) {
        var adjustedName =
          buildpack.prettyName.replace(/\s/g, '').toLowerCase();
        return adjustedName.indexOf(lowerCaseQuery) >= 0;
      };
    }
  }
});
