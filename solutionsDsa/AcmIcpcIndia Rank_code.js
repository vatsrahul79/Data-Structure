function processData(input) {
	//Enter your code here
	var arr = input.split("\n");
	// console.log(arr)
	var len = Number(arr[0]);
	for (var i = 1; i <= len; i++) {
		// console.log(arr[i])
		if (arr[i] == "India") {
			console.log(i);
		}
	}
}
