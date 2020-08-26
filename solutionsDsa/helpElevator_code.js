function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	for (var i = 0; i < n; i++) {
		if (arr[i] < 85) {
			console.log("Enter");
		} else {
			console.log("Beep");
		}
	}
}
