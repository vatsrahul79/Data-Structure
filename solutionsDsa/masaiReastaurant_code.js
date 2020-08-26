function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var queries = Number(data[0]);
	// console.log(data)
	var arr = [];
	for (let i = 1; i <= queries; i++) {
		arr.push(data[i].split(" ").map(a => parseInt(a)));
	}
	var stack = [];
	for (let i = 0; i < queries; i++) {
		if (arr[i][0] == 1) {
			if (stack.length != 0) {
				console.log(stack[stack.length - 1]);
				stack.pop();
			} else {
				console.log("No Food");
			}
		} else {
			stack.push(arr[i][1]);
		}
	}
}
