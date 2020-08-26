function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var span = [];
		var len = Number(data[line]);
		line++;
		var arr = data[line].split(" ").map(a => parseInt(a));
		line++;
		var res = findRange(arr, len, span);
		console.log(res.join(" "));
	}
	function findRange(arr, len, span) {
		var stack = [];
		stack.push(0);
		span[0] = 1;
		for (var i = 1; i < len; i++) {
			while (stack.length != 0 && arr[stack[stack.length - 1]] <= arr[i]) {
				stack.pop();
			}
			if (stack.length == 0) {
				span[i] = i + 1;
			} else {
				span[i] = i - stack[stack.length - 1];
			}
			stack.push(i);
		}
		return span;
	}
}
