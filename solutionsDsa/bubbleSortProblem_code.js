function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	for (var i = 0; i < len - 1; i++) {
		for (var j = 0; j < len - i - 1; j++) {
			if (arr[j] > arr[j + 1]) {
				swap(arr, j, j + 1);
			}
		}
	}
	function swap(arr, j, k) {
		var temp = arr[k];
		arr[k] = arr[j];
		arr[j] = temp;
		return arr;
	}
	console.log(arr.join(" "));
}