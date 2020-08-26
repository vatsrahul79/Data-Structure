function processData(input) {
	//Enter your code here
	var arr = input.split(" ");
	// console.log(arr)
	var res = "";
	for (var i = arr.length - 1; i >= 0; i--) {
		res += arr[i];
		res += " ";
	}
	console.log(res);
}
