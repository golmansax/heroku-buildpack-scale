define(['react'], function (React) {
  'use strict';

  return function (state, props, onInputChange, onButtonClick) {
    var sample_url =
      'https://github.com/heroku-buildpack-ocaml/heroku-buildpack-ocaml.git';

    var inputAttributes = {
      onChange: onInputChange,
      type: 'text',
      value: state.url,
      className: 'form-control',
      placeholder: 'Enter a buildpack URL (e.g. ' + sample_url + ')'
    };

    var buttonAttributes = {
      type: 'button',
      onClick: onButtonClick,
      disabled: state.buttonDisabled,
      className: 'btn btn-primary'
    };

    return React.DOM.div(null,
      React.DOM.input(inputAttributes),
      React.DOM.button(buttonAttributes, 'Weigh!')
    );
  };
});
