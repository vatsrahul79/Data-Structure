function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	var tcs = Number(data[0]);
	var stack = [];
	for (var i = 1; i <= tcs; i++) {
		var arr = data[i].split(" ").map(a => parseInt(a));
		if (arr[0] == 1) {
			stack.push(arr[1]);
		} else if (arr[0] == 2) {
			stack.pop();
		} else {
			console.log(Math.max(...stack));
		}
	}
}
