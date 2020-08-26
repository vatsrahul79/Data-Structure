function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var evenSum = 0;
	var oddSum = 0;
	for (var i = 0; i < n; i++) {
		if (arr[i] % 2 == 0) {
			evenSum += arr[i];
		} else {
			oddSum += arr[i];
		}
	}
	if (oddSum > evenSum) {
		console.log("Odd");
	} else {
		console.log("Even");
	}
}
