function processData(input) {
	//Enter your code here
	var [len, arr] = input.split("\n");
	len = Number(len);
	arr = arr.split(" ").map(a => parseInt(a));
	var start = 0;
	var end = len - 1;
	var res = quickSort(arr, start, end);
	console.log(res.join(" "));
}
function quickSort(arr, start, end) {
	if (start < end) {
		var index = partition(arr, start, end);
		quickSort(arr, start, index - 1);
		quickSort(arr, index + 1, end);
	}
	return arr;
}
function partition(arr, start, end) {
	var pivot = arr[end];
	var pIndex = start;
	for (var i = start; i < end; i++) {
		if (arr[i] < pivot) {
			swap(arr, i, pIndex);
			pIndex++;
		}
	}
	swap(arr, pIndex, end);
	return pIndex;
}
function swap(arr, i, j) {
	var temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;
	return arr
}
