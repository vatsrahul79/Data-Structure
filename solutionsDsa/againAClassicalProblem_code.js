function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	// console.log(data)

	var tcs = Number(data[0]);
	for (var i = 1; i <= tcs; i++) {
		var open = [];
		var arr = data[i].split("");
		// console.log(arr)
		if (arr.length % 2 == 1) {
			console.log("not balanced");
		} else if (arr[0] == "}" || arr[0] == ")" || arr[0] == "]") {
			console.log("not balanced");
		} else {
			for (var j = 0; j < arr.length; j++) {
				if (arr[j] == "[" || arr[j] == "{" || arr[j] == "(") {
					open.push(arr[j]);
				} else {
					if (
						(open[open.length - 1] == "[" && arr[j] == "]") ||
						(open[open.length - 1] == "{" && arr[j] == "}") ||
						(open[open.length - 1] == "(" && arr[j] == ")")
					) {
						open.pop();
					}
				}
			}
			if (open.length == 0) {
				console.log("balanced");
			} else {
				console.log("not balanced");
			}
		}
	}
}
