/**
 * Performs a binary search on the provided sorted list and returns the index of the item if found. If it can't be found it'll return -1.
 *
 * @param {*[]} list Items to search through.
 * @param {*} item The item to look for.
 * @return {Number} The index of the item if found, -1 if not.
 */
function binarySearch(list, item) {
    var min = 0;
    var max = list.length - 1;
    var guess;

	var bitwiseGuess = function(min, max) {
		return (min + max) >> 1;
	};

	var nonBitwiseGuess = function(min, max) {
		return Math.floor((min + max) / 2);
	};

	var bitwise = (max <= 2147483647) ? true : false;
	var getNextGuess = bitwise ? bitwiseGuess : nonBitwiseGuess;

	while (min <= max) {
		guess = getNextGuess(min, max);
		if (list[guess] === item) { return guess; }
		else {
			if (list[guess] < item) { min = guess + 1; }
			else { max = guess - 1; }
		}
	}

    return -1;
}

module.exports = binarySearch;
