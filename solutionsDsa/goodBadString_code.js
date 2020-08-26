function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	for (var i = 1; i <= tcs; i++) {
		var arr = data[i].split("");
		var res = goodString(arr);
		console.log(res);
	}
	function goodString(arr) {
		var stack = [];
		stack[0] = arr[0];
		for (var i = 0; i < arr.length - 1; i++) {
			if (arr[i + 1] != stack[stack.length - 1]) {
				stack.push(arr[i + 1]);
			}
		}
		return stack.join("");
	}
}
