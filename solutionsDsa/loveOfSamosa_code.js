function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var [N, K] = data[0].split(" ").map(a => parseInt(a));
	var arr = data[1].split(" ").map(a => parseInt(a));
	arr.sort((a, b) => a - b);
	var ans = samosaLove(arr, K, N);
	console.log(ans);
	function samosaLove(arr, K, N) {
		var sum = 0;
		var count = 0;
		var flag = false;
		for (var i = 0; i < N; i++) {
			sum += arr[i];
			count++;
			if (sum > K) {
				flag = true;
				break;
			}
		}
		if (flag) {
			return count - 1;
		}
	}
}
