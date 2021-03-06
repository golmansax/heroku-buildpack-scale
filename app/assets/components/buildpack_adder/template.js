define(['react'], function (React) {
  'use strict';

  return function (state, props) {
    var sampleUrl=
      'https://github.com/heroku-buildpack-ocaml/heroku-buildpack-ocaml';

    var inputAttributes = {
      onChange: props.onUrlChange,
      type: 'text',
      value: props.url,
      className: 'form-control col-md-8',
      placeholder: 'Enter a buildpack URL (e.g. ' + sampleUrl + ')'
    };

    var buttonAttributes = {
      type: 'button',
      onClick: props.createBuildpack,
      disabled: props.buttonDisabled,
      className: 'btn btn-primary btn-block col-md-4'
    };

    return React.DOM.div({ className: 'form-group' },
      React.DOM.div({ className: 'col-md-8' },
        React.DOM.input(inputAttributes)
      ),
      React.DOM.div({ className: 'col-md-4' },
        React.DOM.button(buttonAttributes, 'Weigh!')
      )
    );
  };
});
