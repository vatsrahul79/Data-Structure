function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var [n, target] = data[0].split(" ").map(a => parseInt(a));
	var arr = data[1].split(" ").map(a => parseInt(a));
	var count = 0;
	for (var i = 0; i < n - 1; i++) {
		for (var j = i + 1; j < n; j++) {
			if (arr[i] + arr[j] == target) {
				count++;
			}
		}
	}
	console.log(count);
}
