function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	// console.log(data)
	var len = Number(data[0]);
	var arr = [];
	for (var i = 1; i <= len; i++) {
		arr.push(data[i].split(" "));
	}
	// console.log(arr)
	var res = findMin(arr);
	function findMin(arr) {
		var stack = [];
		for (var i = 0; i < arr.length; i++) {
			if (arr[i][0] == "PUSH") {
				stack.push(Number(arr[i][1]));
			} else if (arr[i][0] == "MIN") {
				if (stack.length != 0) {
					console.log(Math.min(...stack));
				} else {
					console.log("EMPTY");
				}
			} else if (arr[i][0] == "POP") {
				if (stack.length != 0) {
					stack.pop();
				} else {
					console.log("EMPTY");
				}
			}
		}
	}
}
