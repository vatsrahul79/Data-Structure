function processData(input) {
	//Enter your code here
	var arr = input.split(" ");
	var n = arr.length;
	var stack = [];
	for (var i = 0; i < n; i++) {
		stack.push(arr.pop());
	}
	console.log(stack.join(" "));
}
