define(['gon', 'underscore'], function (gon, _) {
  'use strict';

  var routes = {};
  _.each(gon, function (route, routeName) {
    routes[routeName] = function (params) {
      return _.template(decodeURIComponent(route))(params);
    };
  });

  return routes;
});
