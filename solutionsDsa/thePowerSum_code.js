function powerSum(X, N) {
	var res = 0;
	var range = Math.floor(Math.pow(X, 1 / N));

	function checkPower(x, k) {
		if (x == 0) {
			res += 1;
		}
		for (var i = range; i > k; i--) {
			var diff = x - Math.pow(i, N);
			if (diff >= 0) {
				checkPower(diff, i);
			}
		}
		return res;
	}
	return checkPower(X, 0);
}
