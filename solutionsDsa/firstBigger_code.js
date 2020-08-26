function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var q = Number(input[2]);
	for (var i = 3; i < q + 3; i++) {
		var res = upperbound(arr, 0, n - 1, Number(input[i]));
		console.log(res);
	}
	function upperbound(arr, start, end, num) {
		while (start < end) {
			var mid = Math.floor((start + end) / 2);
			if (arr[mid] > num) {
				end = mid;
			} else {
				start = mid + 1;
			}
		}
		if (arr[end] > num) {
			return arr[end];
		} else {
			return -1;
		}
	}
}
