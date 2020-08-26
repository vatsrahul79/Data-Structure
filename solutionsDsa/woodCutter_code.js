function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	var [len, req] = data[0].split(" ").map((a) => parseInt(a));
	var arr = data[1]
		.trim()
		.split(" ")
		.map((e) => parseInt(e))
		.sort((a, b) => a - b);
	// console.log(arr)
	var res = search(arr, 0, arr[len - 1]);
	console.log(res);
	function search(arr, lo, hi) {
		var ans = 0;
		while (lo <= hi) {
			var mid = Math.floor((lo + hi) / 2);
			// console.log(mid)
			if (check(mid)) {
				ans = mid;
				lo = mid + 1;
			} else {
				hi = mid - 1;
			}
		}
		return ans;
	}
	function check(x) {
		var sum = 0;
		for (var i = 0; i < len; i++) {
			if (arr[i] > x) {
				sum += arr[i] - x;
			}
		}
		if (sum >= req) {
			return true;
		} else {
			return false;
		}
	}
}
