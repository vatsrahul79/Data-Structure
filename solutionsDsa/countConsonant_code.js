function processData(input) {
	//Enter your code here
	var str = input.trim().split("");
	// console.log(str.length)
	var count = 0;
	for (var i = 0; i < str.length; i++) {
		if (str[i] != "a" && str[i] != "e" && str[i] != "i" && str[i] != "o" && str[i] != "u") {
			// console.log(str[i])
			count++;
		}
	}
	console.log(count);
}
