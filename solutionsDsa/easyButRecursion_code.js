function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var tcs = Number(input[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var n = Number(input[line++]);
		var arr = input[line++].split(" ").map((a) => parseInt(a));
		var res = findSum(n - 1, arr);
		console.log(res);
	}
	function findSum(n, arr) {
		if (n < 0) {
			return 0;
		} else {
			return arr[n] + findSum(n - 1, arr);
		}
	}
}
