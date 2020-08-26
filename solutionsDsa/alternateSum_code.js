function processData(input) {
	//Enter your code here
	var [len, arr] = input.split("\n");
	len = Number(len);
	arr = arr.split(" ").map(a => parseInt(a));
	var sum = 0;
	for (var i = 0; i < len; i = i + 2) {
		sum += arr[i];
	}
	console.log(sum);
}
