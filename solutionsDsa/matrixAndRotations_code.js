function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	input.shift();
	input = input.map((a) => a.split(" ").join(""));
	// console.log(input)
	var str = input[0] + input[0];
	// console.log(str)
	var count = 0;
	for (var i = 0; i < n; i++) {
		for (var j = 0; j <= str.length - n; j++) {
			var sub = str.substring(j, j + n);
			// console.log(sub)
			if (input[i] == sub) {
				count++;
				break;
			}
		}
	}
	// console.log(count)
	if (count == n) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
