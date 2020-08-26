function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var [len, R] = data[line].split(" ").map(a => parseInt(a));
		line++;
		var arr = data[line].split(" ").map(a => parseInt(a));
		line++;
		// console.log(R,arr)
		var res = maxEarning(len, R, arr);
		console.log(res);
	}

	function maxEarning(len, R, arr) {
		var stack = [];

		var count = 1;
		stack[0] = arr[0];
		for (var i = 0; i < len - 1; i++) {
			if (arr[i + 1] > stack[stack.length - 1]) {
				count++;
				stack.push(arr[i + 1]);
			}
		}
		return count * R;
	}
}
