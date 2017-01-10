var reverseString = function (str) {
	var reverse = ''; // empty string to hold and add reversed letters
	if (str === '') {
		return null;// returns null for empty str
	} else {
		for (var i = str.length - 1; i >= 0; i--) { // reducing for loop
			reverse += str[i]// assigns and adds letters from the back
		}
	}
	if (str === reverse) {
		return true; // returns true if str and reverse are equal
	}
	return reverse; //returns reverse
}

module.exports = reverseString