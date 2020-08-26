function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var len = Number(data[0]);
	var arr = data[1].split(" ").map((a) => parseInt(a));
	var res = arrayZeros(arr, len);
	console.log(res);
	function arrayZeros(arr, len) {
		for (var i = 0; i < len - 1; i++) {
			arr[i + 1] = arr[i + 1] - arr[i];
			arr[i] = 0;
		}
		if (arr[len - 1] == 0) {
			return "YES";
		} else {
			return "NO";
		}
	}
}
