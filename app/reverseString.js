var reverseString = function (str) {
	if (str === '') {
		return null;
	} else {
		for (var i = str.length - 1; i >= 0; i--) {
			newString += str[i]
		}
	}
}

module.exports = reverseString