function processData(input) {
	//Enter your code here
	var n = Number(input);
	var res = [];
	function numways(n) {
		res[0] = 1;
		res[1] = 1;
		res[2] = 2;
		for (var i = 3; i <= n; i++) {
			res[i] = res[i - 1] + res[i - 2] + res[i - 3];
		}
		return res[n];
	}
	console.log(numways(n));
}
