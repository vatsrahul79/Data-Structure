function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	for (var i = 2; i < data.length; i = i + 2) {
		var arr = data[i].split(" ").map(a => parseInt(a));
		var res = findMax(arr);
		console.log(res);
	}
	function findMax(arr) {
		var arr1 = [];
		var arr2 = [];
		for (var i = 0; i < arr.length; i++) {
			arr1.push(arr[i] + i);
			arr2.push(arr[i] - i);
		}
		var min1 = arr1[0];
		var max1 = arr1[0];
		for (var i = 1; i < arr1.length; i++) {
			if (arr1[i] < min1) {
				min1 = arr1[i];
			} else if (arr1[i] > max1) {
				max1 = arr1[i];
			}
		}
		var res1 = max1 - min1;
		var min2 = arr2[0];
		var max2 = arr2[0];
		for (var i = 1; i < arr2.length; i++) {
			if (arr2[i] < min2) {
				min2 = arr2[i];
			} else if (arr2[i] > max2) {
				max2 = arr2[i];
			}
		}
		var res2 = max2 - min2;
		var ans = Math.max(res1, res2);
		return ans;
	}
}
