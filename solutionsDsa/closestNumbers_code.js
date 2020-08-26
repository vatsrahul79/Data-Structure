function closestNumbers(arr) {
	arr.sort((a, b) => a - b);
	var min = arr[1] - arr[0];
	var res = [];
	for (var i = 0; i < arr.length - 1; i++) {
		for (var j = i + 1; j < arr.length; j++) {
			var diff = arr[j] - arr[i];
			if (diff <= min) {
				if (diff < min) {
					min = diff;
					res = [];
				}
				res.push(arr[i], arr[j]);
			} else {
				break;
			}
		}
	}

	return res;
	// console.log(min)
}
