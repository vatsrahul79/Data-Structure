function processData(input) {
	//Enter your code here
	var arr = input.split("");
	var len = arr.length;
	if (arr[0] == "?") {
		if (arr[1] == "a") {
			arr[0] = "b";
		} else {
			arr[0] = "a";
		}
	}
	for (var i = 1; i < arr.length; i++) {
		if (arr[i] == "?") {
			if (arr[i + 1] == "a" || arr[i - 1] == "a") {
				arr[i] = "b";
			} else {
				arr[i] = "a";
			}
		}
	}
	console.log(arr.join(""));
}
