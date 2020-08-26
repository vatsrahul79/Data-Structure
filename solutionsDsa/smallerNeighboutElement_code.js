function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	// console.log(arr)
	var stack = [];
	var res = [];
	for (var i = 0; i < len; i++) {
		while (stack.length != 0 && stack[stack.length - 1] >= arr[i]) {
			stack.pop();
		}
		if (stack.length == 0) {
			res.push(-1);
		} else {
			res.push(stack[stack.length - 1]);
		}
		stack.push(arr[i]);
	}
	console.log(res.join(" "));
}
