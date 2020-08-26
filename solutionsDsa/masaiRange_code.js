function processData(input) {
	//Enter your code here
	input = input.trim().split("\n");
	var tcs = Number(input[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var [n, k, p] = input[line]
			.trim()
			.split(" ")
			.map((a) => parseInt(a));
		line++;
		var arr = input[line]
			.trim()
			.split(" ")
			.map((a) => parseInt(a));
		arr.sort((a, b) => a - b);
		line++;
		var res = findRange(arr, k, p);
		console.log(res);
	}
	function findRange(arr, k, p) {
		for (var i = 0; i < n; i++) {
			var target = arr[i] + 2 * p;
			var upperBound = upperbound(i, n - 1, target);
			// console.log(upperBound)
			var count = upperBound - i;
			if (count >= k) {
				return "NO";
			}
		}
		return "YES";
	}
	function upperbound(lo, hi, target) {
		while (lo <= hi) {
			var mid = lo + Math.floor((hi - lo) / 2);
			if (arr[mid] <= target) {
				var res = mid + 1;
				lo = mid + 1;
			} else hi = mid - 1;
		}
		return res;
	}
}
