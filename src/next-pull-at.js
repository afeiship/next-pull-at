(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;

  nx.pullAt = function (inArray) {

    var result = [];
    var args_ = ARRAY_PROTO.slice.call(arguments, 1);
    var argLen = args_.length;
    for (var i = 0; i < argLen; i++) {
      var value = args_[i];
      var len = inArray.length;
      for (var j = 0; j < len; j++) {
        var element = inArray[j];
        if (value === j) {
          inArray.splice(j, 1);
          result.push(element);
          break;
        }
      }
    }

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pullAt;
  }

}());
