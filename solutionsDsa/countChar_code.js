function processData(input) {
	//Enter your code here
	var count = 1;
	var res = "";
	for (var i = 0; i < input.length; i++) {
		if (input[i] == input[i + 1]) {
			count++;
		} else{
			res += input[i] + count;
			count = 1;
		}
	}
	console.log(res);
}
