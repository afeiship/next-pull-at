(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;
  var PLACRHOLDER = {};

  nx.pullAt = function (inArray) {

    var result = [];
    var i, index;
    var arg1 = arguments[1];
    var args_ = Array.isArray(arg1) ? arg1 : ARRAY_PROTO.slice.call(arguments, 1);
    var len = args_.length;
    var length = inArray.length;
    var value, element;

    for (i = 0; i < len; i++) {
      value = args_[i];
      for (index = 0; index < length; index++) {
        element = inArray[index];
        if (value === index) {
          inArray.splice(index, 1, PLACRHOLDER);
          result.push(element);
          break;
        }
      }
    }

    //remove all placeholder element:
    for (index = 0; index < length; index++) {
      element = inArray[index];
      if(element === PLACRHOLDER){
        inArray.splice(index,1);
        index--;
        length--;
      }
    }

    return result;
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.pullAt;
  }

}());
