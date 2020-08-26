function processData(input) {
	//Enter your code here
	input = input.trim().split("\n");
	var tcs = Number(input[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var jumps = 0;
		var n = Number(input[line++]);
		var minReq = n;
		var x = input[line++]
			.trim()
			.split(" ")
			.map((a) => parseInt(a));
		var res = findJumps(jumps, 0);
		console.log(res);
	}
	function findJumps(jumps, i) {
		if (i == n) {
			if (jumps <= minReq) {
				minReq = jumps;
			}
		} else if (jumps > n) {
			return -1;
		} else {
			if (i + x[i] <= n && i + x[i] >= 0) {
				findJumps(jumps + 1, i + x[i]);
			}

			findJumps(jumps + 1, i + 1);
		}
		return minReq;
	}
}
