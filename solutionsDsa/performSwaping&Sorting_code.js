function processData(input) {
	//Enter your code here
	var data = input.trim().split("\n");
	var tcs = Number(data[0]);
	var line = 1;
	for (let i = 0; i < tcs; i++) {
		var [N, K] = data[line].trim().split(" ").map(a => parseInt(a));
		// console.log(K)
		line++;
		var arr = data[line].trim().split(" ").map(a => parseInt(a));
		line++;
		var res = performSwaps(arr, N, K);
		console.log(res.join(" "));
	}
	function performSwaps(arr, N, K) {
		for (var i = 0; i < N; i++) {
			var pos = i;
			for (var j = i + 1; j < N; j++) {
				if (j - i > K) {
					break;
				}
				if (arr[j] < arr[pos]) {
					pos = j;
				}
			}
			for (var l = pos; l > i; l--) {
				var temp = arr[l - 1];
				arr[l - 1] = arr[l];
				arr[l] = temp;
				K--;
			}
		}
		return arr;
	}
}
