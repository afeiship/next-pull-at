var assert = require('assert');
var nx = require('next-js-core2');
require('../src/next-pull-at');

describe('next/pullAt', function () {

  it('pull from a pure array', function () {
    var array = [5, 10, 15, 20];
    var evens = nx.pullAt(array, 1, 3);

    // console.log(array);
    // console.log(evens);

    assert.equal(array.length, 2);
    assert.equal(evens.length, 2);

    assert.deepEqual(array, [5,15]);
    assert.deepEqual(evens, [10,20]);

  });

});
