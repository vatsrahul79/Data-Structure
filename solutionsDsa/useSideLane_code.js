function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	// console.log(data)
	var line = 0;
	for (var i = 0; i < data.length; i++) {
		var len = Number(data[line]);
		line++;
		var arr = data[line]
			.trim()
			.split(" ")
			.map(a => parseInt(a));
		// console.log(arr)
		var ans = sideLane(arr);
		console.log(ans);
		line++;
		if (data[line] == 0) {
			break;
		}
	}
	function sideLane(arr) {
		var stack = [];
		var k = 1;
		var check = true;
		var i = 0;
		while (k <= arr.length) {
			if (arr[i] == k) {
				i++;
				k++;
			} else {
				if (stack.length == 0) {
					stack.push(arr[i]);
					i++;
				} else if (stack[stack.length - 1] < arr[i] && stack.length != 0) {
					check = false;
					break;
				} else {
					stack.push(arr[i]);
					i++;
				}
			}

			while (stack[stack.length - 1] == k && stack.length != 0) {
				stack.pop();
				k++;
			}
		}
		if (check) {
			return "yes";
		} else {
			return "no";
		}
	}
}
