function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = [];
	for (var i = 1; i <= len; i++) {
		arr.push(data[i].split(" "));
	}
	var stack = [];
	for (var i = 0; i < arr.length; i++) {
		if (arr[i][0] == "E") {
			stack.push(arr[i][1]);
			console.log(stack.length);
		} else {
			if (stack.length == 0) {
				console.log(-1, 0);
			} else {
				console.log(stack.shift(), stack.length);
			}
		}
	}
}
