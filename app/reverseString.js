var reverseString = function (str) {
	var reverse = '';
	if (str === '') {
		return null;
	} else {
		for (var i = str.length - 1; i >= 0; i--) {
			reverse += str[i]
		}
	}
	if (str === reverse) {
		return true;
	}
	return reverse;
}

module.exports = reverseString