function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var num = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var sum = 0;
	for (var i = 0; i < num; i++) {
		sum += arr[i];
	}
	if (sum > 100) {
		console.log("Greater");
	} else {
		console.log("Lesser");
	}
}
