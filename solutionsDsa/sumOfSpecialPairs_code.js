function processData(input) {
	//Enter your code here
	var [len, arr] = input.split("\n");
	len = Number(len);
	arr = arr.split(" ").map(a => parseInt(a));
	// console.log(len,arr.length)
	var res = 0;
	for (var i = 0; i < len - 1; i++) {
		for (var j = i + 1; j < len; j++) {
			// console.log(j,i)
			if (isPrime(j - i)) {
				res += Math.abs(arr[j] - arr[i]);
			}
		}
	}
	console.log(res);
	function isPrime(k) {
		if (k == 1) {
			return false;
		} else if (k == 2) {
			return true;
		} else {
			for (var i = 2; i < k; i++) {
				if (k % i == 0) {
					return false;
				}
			}
		}
		return true;
	}
}
