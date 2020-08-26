function processData(input) {
	//Enter your code here
	var runs = [1, 2, 3, 4, 6];
	var arr = input
		.trim()
		.split(" ")
		.map(a => parseInt(a));
	var total = 0;
	for (var i = 0; i < arr.length; i++) {
		total += arr[i] * runs[i];
	}
	console.log(total);
}
