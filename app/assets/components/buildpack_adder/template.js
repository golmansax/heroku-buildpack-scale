define(['react'], function (React) {
  'use strict';

  return function (state, props, onInputChange, onButtonClick) {
    var inputAttributes =
      { onChange: onInputChange, type: 'text', value: state.url };

    var buttonAttributes =
      { type: 'button', onClick: onButtonClick, disabled: state.buttonDisabled };

    return React.DOM.div(null,
      React.DOM.input(inputAttributes),
      React.DOM.button(buttonAttributes, 'Weigh!')
    );
  };
});
