function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));

	arr.sort((a, b) => a - b);
	var sum = 0;
	for (var i = 0; i < n; i++) {
		sum += arr[i] * i;
	}
	console.log(sum);
}
