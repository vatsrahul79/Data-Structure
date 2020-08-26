function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));
	// arr.unshift(0)
	var res = findAvg(arr, n);
	console.log(Math.ceil(res));
	function findAvg(arr, n) {
		if (n == 1) {
			return arr[0];
		} else {
			return (findAvg(arr, n - 1) * (n - 1) + arr[n - 1]) / n;
		}
	}
}
