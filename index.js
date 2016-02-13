var _ = require('lodash');
var loaderUtils = require('loader-utils');
var htmlClean = require('htmlclean');

module.exports = function (source) {
  this.cacheable && this.cacheable();
  var options = loaderUtils.parseQuery(this.query);
  var template = _.template(htmlClean(source), options);
  return 'module.exports = ' + template;
};
