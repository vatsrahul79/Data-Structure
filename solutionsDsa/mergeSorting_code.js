function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var start = 0;
	var end = len - 1;
	function merge(arr, start, end) {
		var mid = Math.floor((start + end) / 2);
		var i = start;
		var j = mid + 1;
		var k = start;
		var temp = [];
		while (i <= mid && j <= end) {
			if (arr[i] < arr[j]) {
				temp[k++] = arr[i++];
			} else {
				temp[k++] = arr[j++];
			}
		}
		while (i <= mid) {
			temp[k++] = arr[i++];
		}
		while (j <= end) {
			temp[k++] = arr[j++];
		}
		for (var l = start; l <= end; l++) {
			arr[l] = temp[l];
		}
		return arr;
	}
	function merge_sort(arr, start, end) {
		if (start < end) {
			var mid = Math.floor((start + end) / 2);
			merge_sort(arr, start, mid);
			merge_sort(arr, mid + 1, end);
			merge(arr, start, end);
		}
		return arr;
	}
	var merge = merge_sort(arr, start, end);
	console.log(merge.join(" "));
}
