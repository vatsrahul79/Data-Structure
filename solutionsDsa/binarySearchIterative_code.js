function processData(input) {
	//Enter your code here
	input = input.split("\n");
	let [n, target] = input[0].split(" ").map((a) => parseInt(a));
	let arr = input[1].split(" ").map((a) => parseInt(a));
	arr.sort((a, b) => a - b);
	var start = 0;
	var end = n - 1;
	let res = binaryIterative(arr, start, end);
	console.log(res);
	function binaryIterative(arr, start, end) {
		// console.log(res)
		while (start <= end) {
			var mid = Math.floor((start + end) / 2);

			if (arr[mid] == target) {
				return 1;
			} else if (arr[mid] < target) {
				start = mid + 1;
			} else {
				end = mid - 1;
			}
		}
		return -1;
	}
}
