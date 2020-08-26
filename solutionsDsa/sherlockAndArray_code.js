function balancedSums(arr) {
	var left = [];
	var sum1 = 0;
	var sum2 = 0;
	var right = [];
	for (var i = 0; i < arr.length; i++) {
		sum1 += arr[i];
		sum2 += arr[arr.length - 1 - i];
		left[i] = sum1;
		right[arr.length - i - 1] = sum2;
	}
	for (var i = 0; i < arr.length; i++) {
		if (left[i] == right[i]) {
			return "YES";
		}
	}
	return "NO";
	console.log(left);
	console.log(right);
}
