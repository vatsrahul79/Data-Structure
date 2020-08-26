function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	var [n, c, r] = data[0]
		.trim()
		.split(" ")
		.map(a => parseInt(a));
	var arr = data[1]
		.trim()
		.split(" ")
		.map(a => parseInt(a));
	arr.sort((a, b) => a - b);
	var sum = 0;
	for (var i = 0; i < c; i++) {
		sum += arr[i];
	}
	if (sum <= r) {
		console.log("Party");
	} else {
		console.log("Sad");
	}
}
