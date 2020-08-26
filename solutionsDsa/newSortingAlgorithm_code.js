function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var [len, k] = data[0].split(" ").map(a => parseInt(a));
	var arr = data[1].split(" ").map(a => parseInt(a));
	for (var i = 0; i < len - 1; i++) {
		for (var j = 0; j < len - i - 1; j++) {
			if (arr[j] % k > arr[j + 1] % k) {
				swap(arr, j, j + 1);
			}
		}
	}
	function swap(arr, j, l) {
		var temp = arr[l];
		arr[l] = arr[j];
		arr[j] = temp;
		return arr;
	}
	console.log(arr.join(" "));
}
