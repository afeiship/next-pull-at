(function () {

  var global = global || this || self || window;
  var nx = global.nx || require('next-js-core2');
  var ARRAY_PROTO = Array.prototype;
  var PLACRHOLDER = {};

  nx.pullAt = function (inArray) {

    var i, j, index;
    var length = inArray.length;
    var result = [];
    var args_ = ARRAY_PROTO.slice.call(arguments, 1);
    var len = args_.length;
    var value, element;

    for (i = 0; i < len; i++) {
      value = args_[i];
      for (j = 0; j < length; j++) {
        element = inArray[j];
        if (value === j) {
          inArray.splice(j, 1, PLACRHOLDER);
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
