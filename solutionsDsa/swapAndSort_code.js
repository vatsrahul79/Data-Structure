function processData(input) {
	input = input.split("\n");
	var tcs = Number(input[0]);
	var line = 1;
	for (var i = 0; i < tcs; i++) {
		var len = Number(input[line]);
		line++;
		// console.log(len)
		// console.log(input[line])
		var arr = input[line]
			.trim()
			.split(" ")
			.map((a) => parseInt(a));
		var res = canSort(arr, len);
		console.log(res);
		line++;
	}
	function canSort(arr, len) {
		for (var i = 0; i < len; i++) {
			arr[i] += i;
		}
		arr.sort((a, b) => a - b);
		for (var i = 0; i < len - 1; i++) {
			if (arr[i + 1] == arr[i]) {
				return "NO";
			} else {
				arr[i] = arr[i] - i;
			}
		}
		arr[len - 1] = arr[len - 1] - (len - 1);
		var ans = "YES" + "\n" + arr.join(" ");
		return ans;
	}
}
