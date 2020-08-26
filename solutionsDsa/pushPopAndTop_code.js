function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = [];
	for (var i = 1; i < data.length; i++) {
		arr.push(data[i].split(" "));
	}
	// console.log(arr)
	var stack = [];
	for (var i = 0; i < len; i++) {
		if (arr[i][0] == "1") {
			stack.push(arr[i][1]);
		} else if (arr[i][0] == "2") {
			if (stack.length != 0) {
				stack.pop();
			}
		} else {
			if (stack.length == 0) {
				console.log("Empty!");
			} else {
				console.log(stack[stack.length - 1]);
			}
		}
	}
}
