function processData(input) {
	//Enter your code here
	var arr = input.split("");
	var res = [];
	var mid = Math.floor(arr.length / 2);
	for (var i = 0; i < mid; i++) {
		if (arr.length % 2 == 0) {
			res[i] = arr[mid - i - 1];
			res[i + mid] = arr[arr.length - i - 1];
			// console.log(res)
		} else {
			res[i] = arr[mid - i - 1];
			res[mid] = arr[mid];
			res[i + mid + 1] = arr[arr.length - i - 1];
			// console.log(res)
		}
	}
	console.log(res.join(""));
}
