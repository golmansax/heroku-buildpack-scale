define(['reqwest', 'routes'], function (reqwest, routes) {
  'use strict';

  return {
    getAll: getAll,
    create: create,
    update: update
  };

  function getAll() {
    return reqwest({ url: routes.buildpacksPath(), method: 'get' });
  }

  function create(data) {
    var params = { url: routes.buildpacksPath(), data: data, method: 'post' };
    return reqwest(params);
  }

  function update(id, data) {
    data = data || {};
    var buildpackPath = routes.buildpackPath({ id: id });
    return reqwest({ url: buildpackPath, method: 'put', data: data });
  }
});
