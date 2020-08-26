function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var [n, target] = input[0].split(" ").map((a) => parseInt(a));
	var arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var start = 0;
	var end = n - 1;
	var res = lowerBound(arr, start, end);
	console.log(res);
	function lowerBound(arr, start, end) {
		while (start < end) {
			var mid = Math.floor((start + end) / 2);
			if (target <= arr[mid]) {
				end = mid;
			} else {
				start = mid + 1;
			}
		}

		if (arr[start] == target) {
			return start;
		} else {
			return -1;
		}
	}
}
