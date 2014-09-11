define(['react'], function (React) {
  'use strict';

  return function (state, props) {
    var sampleUrl=
      'https://github.com/heroku-buildpack-ocaml/heroku-buildpack-ocaml.git';

    var inputAttributes = {
      onChange: props.onUrlChange,
      type: 'text',
      value: props.url,
      className: 'form-control',
      placeholder: 'Enter a buildpack URL (e.g. ' + sampleUrl + ')'
    };

    var buttonAttributes = {
      type: 'button',
      onClick: props.createBuildpack,
      disabled: props.buttonDisabled,
      className: 'btn btn-primary'
    };

    return React.DOM.div(null,
      React.DOM.input(inputAttributes),
      React.DOM.button(buttonAttributes, 'Weigh!')
    );
  };
});
