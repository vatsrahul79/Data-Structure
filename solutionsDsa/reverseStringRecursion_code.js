function processData(input) {
	//Enter your code here
	var res = reverseStr(input);
	console.log(res);
	function reverseStr(input) {
		if (input.length == 0) {
			return "";
		} else {
			return reverseStr(input.substr(1)) + input[0];
		}
		// console.log(ans)
	}
}
