function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var [n, x] = data[0].split(" ").map(a => parseInt(a));
	var arr = data[1].split(" ").map(a => parseInt(a));
	var count = 0;
	var skips = 0;
	for (var i = 0; i < n; i++) {
		if (arr[i] <= x) {
			count++;
		} else {
			skips++;
		}
		if (skips > 1) {
			break;
		}
	}
	console.log(count);
}
