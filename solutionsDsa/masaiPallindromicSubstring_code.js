function processData(input) {
	//Enter your code here
	var string = input;
	// console.log(string.length)
	var longest = 0;

	for (var i = 0; i < string.length; i++) {
		for (var j = 0; j < string.length - i; j++) {
			var subString = string.substr(i, j + 1);
			// console.log(subString,i,j)

			if (isPallindrome(subString)) {
				var length = isPallindrome(subString);
				if (length > longest) {
					longest = length;
				}
			}
		}
	}
	function isPallindrome(subString) {
		let flag = true;
		if (subString.length > 1) {
			for (let i = 0; i < Math.floor(subString.length / 2); i++) {
				if (subString[i] != subString[subString.length - 1 - i]) {
					flag = false;
					break;
				}
			}
		}
		if (flag) {
			return subString.length;
		} else {
			return false;
		}
	}

	console.log(longest);
}
