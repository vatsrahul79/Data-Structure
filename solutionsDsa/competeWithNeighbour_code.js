function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var count = 0;
	if (arr[0] > arr[1]) {
		count++;
	}
	if (arr[n - 1] > arr[n - 2]) {
		count++;
	}
	for (var i = 1; i < n - 1; i++) {
		if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
			count++;
		}
	}
	console.log(count);
}
