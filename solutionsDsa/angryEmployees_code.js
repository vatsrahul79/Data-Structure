function processData(input) {
	//Enter your code here
	input = input.trim().split("\n");
	var tcs = Number(input[0]);
	// console.log(tcs)
	var line = 1;
	for (var k = 0; k < tcs; k++) {
		var arr = [];
		var [n, c] = input[line].split(" ").map((a) => parseInt(a));
		line++;
		for (var j = line; j < line + n; j++) {
			arr.push(Number(input[j]));
		}
		arr.sort((a, b) => a - b);
		var lo = 1;
		var hi = arr[n - 1] - arr[0];

		// console.log(arr)
		line = line + n;
		// console.log(line)
		// var res =
		console.log(findMax(arr, lo, hi));
	}
	function findMax(arr, lo, hi) {
		// console.log(arr)
		while (lo <= hi) {
			// var mid = Math.floor((lo+hi)/2)
			if (bool(lo)) {
				lo++;
			} else {
				return lo - 1;
			}
		}
		return lo - 1;
	}
	function bool(x) {
		var last_placed = arr[0];
		var emp_placed_sofar = 1;
		for (let i = 1; i < n; i++) {
			if (arr[i] - last_placed >= x) {
				emp_placed_sofar++;
				last_placed = arr[i];
				if (emp_placed_sofar == c) {
					return true;
				}
			}
		}
		return false;
	}
}
