function processData(input) {
	//Enter your code here
	input = input.split("\n");
	var n = Number(input[0]);
	var arr = input[1].split(" ");
	var l = 0;
	var r = n - 1;
	var res = [];
	var ans = permutations(arr, l, r, res);
	console.log(ans.sort().join("\n"));
	function permutations(arr, l, r) {
		if (l == r) {
			res.push(arr.join(" "));
		} else {
			for (var i = l; i <= r; i++) {
				swap(arr, l, i);
				permutations(arr, l + 1, r, res);
				swap(arr, i, l);
			}
		}
		function swap(arr, j, k) {
			var temp = arr[k];
			arr[k] = arr[j];
			arr[j] = temp;
		}
		return res;
	}
}
