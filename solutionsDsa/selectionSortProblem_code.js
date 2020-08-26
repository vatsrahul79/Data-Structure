function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var min;
	for (var i = 0; i < len; i++) {
		min = i;
		for (var j = i + 1; j < len; j++) {
			if (arr[j] < arr[min]) {
				min = j;
			}
		}
		swap(arr, min, i);
	}
	function swap(arr, min, i) {
		var temp = arr[i];
		arr[i] = arr[min];
		arr[min] = temp;
	}
	console.log(...arr);
}
