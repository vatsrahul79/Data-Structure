function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var flag = false;
	var arr = data[1].split(" ").map(a => parseInt(a));
	for (var i = 0; i < n; i++) {
		if (arr[i] == 42) {
			flag = true;
			break;
		}
	}
	if (flag) {
		console.log("Yes");
	} else {
		console.log("No");
	}
}
