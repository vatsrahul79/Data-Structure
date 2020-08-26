function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var sum = 0;
	for (var i = 0; i < n; i++) {
		sum += arr[i];
	}
	var avg = Math.ceil(sum / n);
	console.log(avg);
}
