function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var tcs = Number(data[0]);
	for (var i = 1; i <= tcs; i++) {
		var arr = [];
		var [a, b, N, mod] = data[i].split(" ").map((a) => parseInt(a));
		arr[0] = a;
		arr[1] = b;
		for (var j = 2; j < N; j++) {
			arr[j] = (arr[j - 1] + arr[j - 2]) % mod;
		}
		var obj = {};
		var sum = 0;
		for (var k = 0; k < arr.length; k++) {
			if (obj[arr[k]] > 0) {
				obj[arr[k]]++;
			} else {
				obj[arr[k]] = 1;
			}
		}
		for (var key in obj) {
			sum += obj[key] ** 2;
		}
		console.log(sum);
	}
}
