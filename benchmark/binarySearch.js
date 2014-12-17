var binarySearch = require('..');
var sample = require('./sample');

module.exports = {
    name: 'binarySearch on 1000 items ranging from -100 to 100',
    tests: [
        {
            name: 'First',
            fn: function () {
                binarySearch(sample, -100);
            }
        },
        {
            name: 'Last',
            fn: function () {
                binarySearch(sample, 100);
            }
        },
        {
            name: '~25%',
            fn: function () {
                binarySearch(sample, -51);
            }
        },
        {
            name: '~50%',
            fn: function () {
                binarySearch(sample, 3);
            }
        },
        {
            name: '~75%',
            fn: function () {
                binarySearch(sample, 52);
            }
        }
    ]
};
