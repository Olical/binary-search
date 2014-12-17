require('mocha-testcheck').install();
var assert = require('assert');
var binarySearch = require('..');

describe('binarySearch', function () {
    check.it('can find a number in some sorted numbers', [gen.array(gen.int), gen.int], function (list, item) {
        list.sort(function (a, b) {
            return a - b;
        });

        var base = list.indexOf(item);
        var result = binarySearch(list, item);
        assert(list[base] === list[result]);
    });
});
