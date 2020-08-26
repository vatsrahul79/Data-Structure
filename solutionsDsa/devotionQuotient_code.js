function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var N = Number(data[0]);
	var arr = [];
	for (var i = 1; i <= N; i++) arr.push(data[i].split(" "));
	var max = -999999;
	for (var i = 0; i < N; i++) {
		if (max < Number(arr[i][1])) {
			max = Number(arr[i][1]);
			var ans = arr[i][0];
		}
	}
	console.log(ans);
}
