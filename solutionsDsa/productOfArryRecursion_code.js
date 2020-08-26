function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));
	var res = findProduct(arr, n - 1);
	console.log(res);
	function findProduct(arr, n) {
		if (n == 0) {
			return arr[0];
		} else {
			return findProduct(arr, n - 1) * arr[n];
		}
	}
}
