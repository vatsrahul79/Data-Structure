function processData(input) {
	//Enter your code here
	var data = input.split("\n");
	var n = Number(data[0]);
	var arr = data[1].split(" ").map(a => parseInt(a));
	var product = 1;
	for (var i = 0; i < n; i++) {
		product *= arr[i];
	}
	console.log(product);
}
