function processData(input) {
	//Enter your code here
	input = input.split("\n");
	let [n, target] = input[0].split(" ").map((a) => parseInt(a));
	let arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var start = 0;
	var end = n - 1;
	let res = binarySearch(arr, start, end);
	console.log(res);

	function binarySearch(arr, start, end) {
		var mid = Math.floor((start + end) / 2);
		if (start <= end) {
			if (arr[mid] < target) {
				return binarySearch(arr, mid + 1, end);
			} else if (arr[mid] > target) {
				return binarySearch(arr, start, mid - 1);
			} else {
				return 1;
			}
		}

		return -1;
	}
}
